import { Router } from 'express';
import { userRegisterValidatioin, userLoginValidation } from '../validation/validation';
import { Middleware } from '../middleware/middleware';
import { UserService } from '../services/user.services';
const router = Router({
  caseSensitive: true,
  strict: true,
});

const service = new UserService();
const middleware = new Middleware();

router.get('/user', middleware.isAuthenticated.bind(middleware), service.userData.bind(service));

router.post('/registration', userRegisterValidatioin, service.userRegister.bind(service));

router.get('/activate/:token', service.userEmailConfiramtion.bind(service));

router.post('/login', userLoginValidation, service.userLogin.bind(service));

router.put('/update');

router.get('/logout', middleware.isAuthenticated.bind(middleware), service.userLogout.bind(service));

export default router;
