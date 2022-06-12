import axios from 'axios';

async function Logout() {
  const jwt = localStorage.getItem('token');
  await axios.delete('http://api.bbards.com/api/v1/logout', {
    credentials: 'include',
    headers: {
      Authorization: jwt,
    },
  });
  localStorage.removeItem('token');
  window.location.href = '/';
}

export default Logout;
