import axios from 'axios';

const server = axios.create({
  // baseURL: 'https://api.tapabocasya.com/api/',
  baseURL: 'http://localhost:5000/api/',
});

export default server;
