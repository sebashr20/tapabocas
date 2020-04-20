import axios from 'axios';

export const server = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const wompi = axios.create({
  baseURL: process.env.REACT_APP_WOMPI_BASE_URL,
});
