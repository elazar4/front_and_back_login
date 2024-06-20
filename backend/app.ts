import express from 'express';
import mysql from 'mysql2';

const app = express();
const port = 3000;

// MySQL database connection configuration
const db = mysql.createConnection({
    host: 'localhost',    // Your database host
    user: 'root',         // Your database user
    password: 'Elazar18!', // Your database password
    //database: 'testdb'    // Your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Define a route to fetch and print data from the table
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM sys.users'; // Replace with your table name
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error fetching data from the database.');
            return;
        }
        res.json(results);
    });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
