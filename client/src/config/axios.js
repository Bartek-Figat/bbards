import axios from 'axios';

const devURL = 'http://localhost:8080/api/v1';
const baseURL = 'http://api.bbards.com/api/v1';
const token = localStorage.getItem('token');

export const authAxios = axios.create({
  devURL,
  credentials: 'include',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
});
