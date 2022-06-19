import axios from 'axios';

async function Logout() {
  const token = localStorage.getItem('token');
  const devURL = 'http://localhost:8080/api/v1/logout';
  const baseURL = 'http://api.bbards.com/api/v1/logout';
  await axios.get(devURL, {
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  localStorage.removeItem('token');
  window.location.href = '/';
}

export default Logout;
