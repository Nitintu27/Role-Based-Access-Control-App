import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from '../services/axiosInstance';

const UserForm = ({ onUserAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/users', { name, email, role }).then((res) => {
      onUserAdded(res.data);
      setName('');
      setEmail('');
      setRole('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Add User
      </Button>
    </form>
  );
};

export default UserForm;
