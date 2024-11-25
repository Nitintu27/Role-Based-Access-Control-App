import React, { useEffect, useState } from "react";
import { getRoles, createRole, updateRole, deleteRole } from "./api"; // Import API helper

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });

  // Fetch roles from API
  useEffect(() => {
    getRoles().then((response) => setRoles(response.data));
  }, []);

  // Create role
  const handleCreateRole = () => {
    createRole(newRole).then((response) => {
      setRoles([...roles, response.data]);
      setNewRole({ name: "", permissions: [] });
    });
  };

  // Update role
  const handleUpdateRole = (id) => {
    const updatedRole = { ...newRole, id };
    updateRole(id, updatedRole).then((response) => {
      setRoles(roles.map((role) => (role.id === id ? response.data : role)));
      setNewRole({ name: "", permissions: [] });
    });
  };

  // Delete role
  const handleDeleteRole = (id) => {
    deleteRole(id).then(() => {
      setRoles(roles.filter((role) => role.id !== id));
    });
  };

  return (
    <div>
      <h2>Role Management</h2>

      {/* Create Role Form */}
      <div>
        <input
          type="text"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
          placeholder="Role Name"
        />
        <button onClick={handleCreateRole}>Add Role</button>
      </div>

      {/* Role List */}
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            {role.name} - {role.permissions.join(", ")}
            <button onClick={() => handleUpdateRole(role.id)}>Update</button>
            <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
