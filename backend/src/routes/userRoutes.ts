import express, { Request, Response } from 'express';
import mysql, { RowDataPacket } from 'mysql2';
import bodyParser from 'body-parser';
import db from '../db';

interface user {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  password: string;
}

const router = express.Router();

router.post('/createUser', (req, res) => {
  res.send("Hello1")
});

router.get('/getUser', (req, res) => {
  const { email, password } = req.query;

  if (!email || !password) {
    return res.status(400).send('Email and password are required.');
  }

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results: RowDataPacket[]) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Internal server error.');
    }

    if (results.length === 0) {
      return res.status(404).send('User not found.');
    }

    const user = results[0];

    if (user.password === password) {
      return res.status(200).send('Login successful.');
    } else {
      return res.status(401).send('Invalid password.');
    }
  });
});


router.put('/updateUser', (req, res) => {
  res.send("Hello3")
});

router.delete('/deleteUser', (req, res) => {
  res.send("Hello4")
});

export default router;
