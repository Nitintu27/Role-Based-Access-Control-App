import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import axios from '../services/axiosInstance';

const RoleForm = ({ onRoleAdded }) => {
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState({
    read: false,
    write: false,
    delete: false,
  });

  const handlePermissionChange = (e) => {
    setPermissions({
      ...permissions,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedPermissions = Object.keys(permissions).filter((key) => permissions[key]);

    // Send data to the backend or mock API
    axios.post('/roles', { name: roleName, permissions: selectedPermissions }).then((res) => {
      onRoleAdded(res.data); // Callback to refresh the role list
      setRoleName('');
      setPermissions({
        read: false,
        write: false,
        delete: false,
      });
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <TextField
        label="Role Name"
        value={roleName}
        onChange={(e) => setRoleName(e.target.value)}
        fullWidth
        required
        style={{ marginBottom: '15px' }}
      />

      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={permissions.read}
              onChange={handlePermissionChange}
              name="read"
              color="primary"
            />
          }
          label="Read"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={permissions.write}
              onChange={handlePermissionChange}
              name="write"
              color="primary"
            />
          }
          label="Write"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={permissions.delete}
              onChange={handlePermissionChange}
              name="delete"
              color="primary"
            />
          }
          label="Delete"
        />
      </FormGroup>

      <Button type="submit" variant="contained" color="primary">
        Add Role
      </Button>
    </form>
  );
};

export default RoleForm;
