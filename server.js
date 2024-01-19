// Add these imports at the top of your server.js file
const { Readability } = require('readability');
const { JSDOM } = require('jsdom');
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/search', async (req, res) => {
    const searchTerm = req.query.q;

    // Replace this URL with the starting point of your search
    const initialURL = 'http://localhost:8080/macarons.html';

    try {
        const results = await searchWebPages(initialURL, searchTerm);
        res.json({ results });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Modify the searchWebPages function
async function searchWebPages(url, searchTerm) {
    try {
        const html = await axios.get(url).then((response) => response.data);
        const $ = cheerio.load(html);

        // Extract links from anchor tags
        const links = [];
        $('a').each((index, element) => {
            const link = $(element).attr('href');
            if (link && link.includes(searchTerm)) {
                links.push(link);
            }
        });

        // Extract links from image tags
        $('img').each((index, element) => {
            const src = $(element).attr('src');
            if (src && src.includes(searchTerm)) {
                links.push(src);
            }
        });

        // Extract links from script tags
        $('script').each((index, element) => {
            const src = $(element).attr('src');
            if (src && src.includes(searchTerm)) {
                links.push(src);
            }
        });

        // Extract text content from HTML elements
        const textContent = [];
        $('body *').each((index, element) => {
            const elementText = $(element).text();
            if (elementText && elementText.includes(searchTerm)) {
                textContent.push(elementText);
            }
        });

        // Recursive search through linked pages
        const linkedPages = await Promise.all(
            links.map((link) => searchWebPages(link, searchTerm))
        );

        return Array.prototype.concat.apply(links, linkedPages, textContent);
    } catch (error) {
        console.error(`Error processing ${url}: ${error.message}`);
        return [];
    }
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
