import axios from 'axios';
import { getUser } from '../hooks/useUser/helpers';

export const BASE_URL = 'http://158.160.34.74:8080';
export const $api = axios.create({
  baseURL: BASE_URL + '/api/',
});

$api.interceptors.request.use((config) => {
  const token = getUser()?.ID;
  console.log(token);
  config.headers.Authorization = '1';
  return config;
});
