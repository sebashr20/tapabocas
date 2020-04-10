import axios from 'axios';

export const server = axios.create({
  // baseURL: 'https://api.tapabocasya.com/api/',
  baseURL: 'http://localhost:5000/api/',
});

export const wompi = axios.create({
  baseURL: 'https://production.wompi.co/v1/transactions/',
});
