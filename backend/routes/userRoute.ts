import express, { Request, Response } from 'express';
import mysql from 'mysql2';

export interface User {
    firstName: string;
    lastName: string;
    age: string;
    email: string;
    password: string;
}

const app = express();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234'
}).promise()


const result = await pool.query("SELECT * FROM sys.users")


/*
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
});

const createUser = async (user: User): Promise<void> => {
    const connection = db.connect()
        const query = 'INSERT INTO users (firstName, lastName, age, email, password) VALUES (?, ?, ?, ?, ?)';
        await connection.query(query, [user.firstName, user.lastName, user.age, user.email, user.password]);
};


app.post("/createUser", (req, res) => {
    const { firstName, lastName, age, email, password } = req.body;
    console.log('Request received:', firstName, lastName, age, email, password);
});




app.get('/getUser', (req, res) => {
    const query = 'SELECT * FROM sys.users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error fetching data from the database.');
            return;
        }
        res.json(results);
    });
});

app.put('/updateUser', (req, res) => {

});


app.delete('/deleteUser', (req, res) => {

});

*/