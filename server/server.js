const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(cors());
// Middleware to parse incoming POST data
app.use(bodyParser.urlencoded({ extended: true }));
// static middleware to serve files from the "client" directory
app.use(express.static('client'));
app.use(express.static('public'));

app.get('/bootstrap.css', async (req, res) => {
    try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css');
        const css = await response.text();
        res.send(css);
    } catch (error) {
        console.error('Error fetching Bootstrap CSS:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Database connection setup
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'onlinestore',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // const userIdCount = 1;
    // const user_id = generateUserId(userIdCount);
    // formData.user_id = user_id;

    // SQL query to insert data into your MySQL table
    const sql = `INSERT INTO users (user_firstName, user_lastName, user_email, user_countryCode, user_contactNumber, user_address1, user_address2, user_country, user_ZIP) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [formData.user_firstName, formData.user_lastName, formData.user_email, formData.user_countryCode, formData.user_contactNumber, formData.user_address1, formData.user_address2, formData.user_country, formData.user_ZIP], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Data inserted successfully. Rows affected:', result.affectedRows);
            res.send('Form submitted successfully');
        }
    });
});


// function generateUserId(userIdCount) {
//     var nextuserIdCount = userIdCount + 1;
//     var paddedNumericPart = nextuserIdCount.toString().padStart(6, '0');
//     var nextUserId = 'U' + paddedNumericPart;
//     return nextUserId;
// }


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

