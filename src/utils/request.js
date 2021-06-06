import axios from 'axios';
import { getAuthToken } from './auth';

const request = axios.create({
  baseURL: process.env.NODE_ENV === 'production' && process.env.REACT_APP_API_URL,
});

request.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {};
  }

  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token.access}`;
  }

  return config;
});

request.interceptors.response.use(
  (response) => response,
  (err) => {
    // your status repsonse
    if (err.response?.status === 500) {
      console.log('Server Error nih, coba lagi yaa :)');
    }
    // return err;
    return Promise.reject(err);
  }
);

export default request;
