const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;

// Serve static files from the "client" folder
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.json());

app.use(cors());

// // Database connection setup
// const db = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'root',
//     database: 'onlinestore',
// });
const fs = require('fs');
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        ca: process.env.MYSQL_ATTR_SSL_CA,
    },
});

db.connect(function (err) {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
        db.query("SELECT product_code FROM order_products WHERE product_code IS NOT NULL", function (error, result, fields) {
            if (err) {
                console.error("Error: ", err);
                res.status(500).send("Error fetching data");
            } else {
                result = JSON.parse(JSON.stringify(result));
                const newArray = result.map(one => one.product_code);
                console.log(newArray);
            }
        });
    }
});

app.get('/api/ordercodes', (req, res) => {
    db.query("SELECT product_code FROM order_products WHERE product_code IS NOT NULL", function (error, result) {
        result = JSON.parse(JSON.stringify(result));
        const newArray = result.map(one => one.product_code);
        res.send(newArray);
    });
})


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


app.post('/checkout', (req, res) => {
    const { user, order, products } = req.body; // Destructuring user and order data from request body

    // Begin transaction
    db.beginTransaction(err => {
        if (err) { throw err; }

        // Insert user into 'users' table
        const queryUser = 'INSERT INTO users (user_email, user_firstName, user_lastName, user_address1, user_address2, user_country, user_ZIP, user_countryCode, user_contactNumber) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

        db.query(queryUser, [user.user_email, user.user_firstName, user.user_lastName, user.user_address1, user.user_address2, user.user_country, user.user_ZIP, user.user_countryCode, user.user_contactNumber], (err, userResult) => {
            if (err) {
                return db.rollback(() => {
                    throw err;
                });
            }

            const insertedUserId = userResult.insertId; // Get the inserted user ID

            // Insert order into 'orders' table
            const queryOrder = 'INSERT INTO orders (user_id, order_totalCost, order_date) VALUES (?, ?, NOW())';

            db.query(queryOrder, [insertedUserId, order.order_totalCost], (err, orderResult) => {
                if (err) {
                    return db.rollback(() => {
                        throw err;
                    });
                }


                const insertedOrderId = orderResult.insertId; // Get the inserted order ID

                // Insert products into 'order_products' table
                products.forEach(product => {
                    const queryProduct = 'INSERT INTO order_products (order_id, product_name, product_price, quantity, choice1, choice2, choice3, choice4, choice5, choice6, choice7, choice8, product_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

                    // Define the values array
                    const values = [
                        insertedOrderId,
                        product.product_name,
                        product.product_price,
                        product.quantity,
                        product.choice1 || null, // If choice1 exists, use its value, otherwise insert NULL
                        product.choice2 || null, // If choice2 exists, use its value, otherwise insert NULL
                        product.choice3 || null, // If choice3 exists, use its value, otherwise insert NULL
                        product.choice4 || null, // If choice4 exists, use its value, otherwise insert NULL
                        product.choice5 || null, // If choice5 exists, use its value, otherwise insert NULL
                        product.choice6 || null, // If choice6 exists, use its value, otherwise insert NULL
                        product.choice7 || null, // If choice7 exists, use its value, otherwise insert NULL
                        product.choice8 || null, // If choice8 exists, use its value, otherwise insert NULL
                        product.product_code
                    ];

                    console.log(product.product_code);

                    // Execute product insert query
                    db.query(queryProduct, values, (err, result) => {
                        if (err) {
                            return db.rollback(() => {
                                throw err;
                            });
                        }
                    });
                });


                // If everything is successful, commit the transaction
                db.commit(err => {
                    if (err) {
                        return db.rollback(() => {
                            throw err;
                        });
                    }
                    console.log('Transaction Complete.');
                    res.json({ message: 'Checkout successful' });
                });
            });
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
