const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;

// Serve static files from the "client" folder
app.use(express.static(path.join(__dirname, 'client')));

app.use(cors());

// // Middleware to parse incoming POST data
// app.use(bodyParser.urlencoded({ extended: true }));


// app.get('/bag.html', (req, res) => {
//     // Sending the "bag.html" file
//     res.sendFile(path.join(__dirname, '../client/bag.html'));
// });


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


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
