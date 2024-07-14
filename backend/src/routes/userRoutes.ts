import express from 'express';
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

router.post('/createUser', async (req, res) => {
  try {
    const user = req.body;
    const { firstName, lastName, age, email, password } = user;
    
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results: RowDataPacket[]) => {
  if(results.length === 0){
  const query = 'INSERT INTO users (firstName, lastName, age, email, password) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [firstName, lastName, age, email, password]);
    res.status(201).send('User created successfully');
  }
  else{
    res.status(401).send('User already exist.');
  }
  })

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
  const { email, newPassword } = req.query;
  const query = 'UPDATE users SET password = ? WHERE email = ?';
  db.query(query, [newPassword, email], (err) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Internal server error.');
    }
      return res.status(200).send('Change password successful.');
  });
});

router.delete('/deleteUser', (req, res) => {
  const {email} = req.query;
  const query = 'DELETE FROM users WHERE email = ?';
  db.query(query, [email], (err, results: RowDataPacket[]) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Internal server error.');
    }

    if (results.length === 0) {
      return res.status(404).send('User not found.');
    }
    return res.status(200).send('delete user successful.');
  });
});

export default router;
