import axios from 'axios';

export const $api = axios.create({
  baseURL: 'http://158.160.34.74:8080/',
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token;
  return config;
});
