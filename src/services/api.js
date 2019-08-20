import axios from 'axios';

const api = axios.create({
  baseURL: 'http://apimeetapp.fvsystem.com.br',
});

export default api;
