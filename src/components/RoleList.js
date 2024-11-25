import React, { useState, useEffect } from 'react';
import axios from '../services/axiosInstance';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const RoleList = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get('/roles').then((res) => setRoles(res.data));
  }, []);

  return (
    <div>
      <h1>Role Management</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Role</TableCell>
            <TableCell>Permissions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              <TableCell>{role.permissions.join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RoleList;
