import axios from 'axios';
const baseURL = 'http://localhost/api/v1';
const token = localStorage.getItem('token');

export const authAxios = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const instance = axios.create({
  baseURL,
});
