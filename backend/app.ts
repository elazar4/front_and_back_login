import mysql from 'mysql2'



const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234'
}).promise()


const result = await pool.query("SELECT * FROM sys.users")
console.log(result)



//import { User, insertUser } from './userService';


/*
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import bodyParser from 'body-parser';


const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log('Request received:', email, password);
    if (email && password) {
        return res.status(200).json({ message: 'Login successful' });
    } else {
        return res.status(400).json({ message: 'Email and password are required' });
    }
});

MySQL database connection configuration
const db = mysql.createConnection({
    host: 'localhost',    // Your database host
    user: 'root',         // Your database user
    password: '1234', // Your database password
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
*/