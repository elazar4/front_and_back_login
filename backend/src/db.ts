import mysql, { RowDataPacket } from 'mysql2';

  const db =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database:'sys'
  });


  
export default db;


export const  chechPasswordByEmail = (email: string,password: string)  => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results: RowDataPacket[]) => {
    if (err) {
      console.error('Error executing query:', err);
      return 500;
    }

    if (results.length === 0) {
      return 404;
    }

    const user = results[0];

    if (user.password === password) {
      return 200;
    } else {
      return 401
    }
  });
}