import axios from "axios";

const API_URL = "http://localhost:3001"; // JSON Server URL

// Users API
export const getUsers = () => axios.get(`${API_URL}/users`);
export const createUser = (user) => axios.post(`${API_URL}/users`, user);
export const updateUser = (id, updatedUser) => axios.put(`${API_URL}/users/${id}`, updatedUser);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);

// Roles API
export const getRoles = () => axios.get(`${API_URL}/roles`);
export const createRole = (role) => axios.post(`${API_URL}/roles`, role);
export const updateRole = (id, updatedRole) => axios.put(`${API_URL}/roles/${id}`, updatedRole);
export const deleteRole = (id) => axios.delete(`${API_URL}/roles/${id}`);
