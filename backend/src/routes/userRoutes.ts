import express, { Request, Response } from 'express';
import mysql, { RowDataPacket } from 'mysql2';
import bodyParser from 'body-parser';
import db from '../db';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: string;
}

const router = express.Router();
/*
const createUser = async (user: any) => {
  
  const { firstName, lastName, age, email, password } = user;

  const query = 'INSERT INTO users (firstName, lastName, age, email, password) VALUES (?, ?, ?, ?, ?)';
  await db.execute(query, [firstName, lastName, age, email, password]);
  await db.end();
};

app.post('/api/users', async (req, res) => {
  try {
    const user = req.body;
    await createUser(user);
    res.status(201).send('User created successfully');
  } catch (error) {
    console.error('Error creating user', error);
    res.status(500).send('Internal Server Error');
  }
});
*/

router.post('/createUser', async (req, res) => {
  try {
    const user = req.body;
    const { firstName, lastName, age, email, password } = user;

  const query = 'INSERT INTO users (firstName, lastName, age, email, password) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [firstName, lastName, age, email, password]);
    res.status(201).send('User created successfully');
  } catch (error) {
    console.error('Error creating user', error);
    res.status(500).send('Internal Server Error');
  }
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
