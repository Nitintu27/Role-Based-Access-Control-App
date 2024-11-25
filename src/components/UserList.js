import React, { useState, useEffect } from 'react';
import axios from '../services/axiosInstance';
import { Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users').then((res) => setUsers(res.data));
  }, []);

  const deleteUser = (id) => {
    axios.delete(`/users/${id}`).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  return (
    <div>
      <h1>User Management</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nitin</TableCell>
            <TableCell>nitinbt9617@gmail.com</TableCell>
            <TableCell>Developer</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Button onClick={() => deleteUser(user.id)} variant="outlined" color="error">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserList;
