import axios from 'axios';

const server = axios.create({
  baseURL: 'https://api.tapabocasya.com/api/',
});

export default server;
