import { useNavigate } from 'react-router-dom';
import { authAxios } from '../config/axios';
import { ROUTES } from '../router/router';

async function Logout() {
  let navigate = useNavigate();
  authAxios.delete(`/logout`);
  localStorage.removeItem('token');
  navigate(`${ROUTES.LOGIN}`, { replace: true });
}

export default Logout;
