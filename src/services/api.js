import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apimeetapp.fvsystem.com.br',
});

export default api;
