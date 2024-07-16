import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../const';
import './UserTable.css';


interface User {
id: number;
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  password: string;
}

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get(`${baseUrl}/getAllUsers`)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
          <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Password</th>
            {/* Add other headers as per your table structure */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              {/* Add other cells as per your table structure */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
