import axios from 'axios';
const baseURL = 'http://api.bbards.com/api/v1';
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
