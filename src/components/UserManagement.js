import React, { useEffect, useState } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "./api"; // Import API helper

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", role: "", status: "Active" });

  // Fetch users from API
  useEffect(() => {
    getUsers().then((response) => setUsers(response.data));
  }, []);

  // Create user
  const handleCreateUser = () => {
    createUser(newUser).then((response) => {
      setUsers([...users, response.data]);
      setNewUser({ name: "", role: "", status: "Active" });
    });
  };

  // Update user
  const handleUpdateUser = (id) => {
    const updatedUser = { ...newUser, id };
    updateUser(id, updatedUser).then((response) => {
      setUsers(users.map((user) => (user.id === id ? response.data : user)));
      setNewUser({ name: "", role: "", status: "Active" });
    });
  };

  // Delete user
  const handleDeleteUser = (id) => {
    deleteUser(id).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  return (
    <div>
      <h2>User Management</h2>

      {/* Create User Form */}
      <div>
        <input
          type="text"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="text"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          placeholder="Role"
        />
        <select
          value={newUser.status}
          onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button onClick={handleCreateUser}>Add User</button>
      </div>

      {/* User List */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role} - {user.status}
            <button onClick={() => handleUpdateUser(user.id)}>Update</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
