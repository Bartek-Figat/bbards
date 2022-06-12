import axios from 'axios';

async function Logout() {
  const token = localStorage.getItem('token');
  await axios.get('http://api.bbards.com/api/v1/logout', {
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  localStorage.removeItem('token');
  window.location.href = '/';
}

export default Logout;
