import axios from 'axios';

const server = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const wompi = axios.create({
  baseURL: process.env.REACT_APP_WOMPI_BASE_URL,
});

export default { server, wompi };
