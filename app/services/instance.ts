import axios from 'axios';
import { getUser } from '../hooks/useUser/helpers';

export const BASE_URL = process.env.BASE_URL;
export const $api = axios.create({
  baseURL: BASE_URL + '/api/',
});

$api.interceptors.request.use((config) => {
  const token = getUser()?.ID;
  console.log(token);
  config.headers.Authorization = token;
  return config;
});
