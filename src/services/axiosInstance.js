import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001', // JSON Server's URL
});

export default instance;
