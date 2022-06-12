import { Router, Request, Response, NextFunction } from 'express';
import { userRegisterValidatioin, userLoginValidation } from '../validation/validation';
import { isAuthenticated } from '../middleware/middleware';
import { Service } from '../services/services';
const router = Router({
  caseSensitive: true,
  strict: true,
});

const service = new Service();

router.get('/user', isAuthenticated, service.userData.bind(service));

router.post('/registration', userRegisterValidatioin, service.userRegister.bind(service));

router.get('/activate/:token', service.userEmailConfiramtion.bind(service));

router.post('/login', userLoginValidation, service.userLogin.bind(service));

router.put('/update');

router.get('/logout', service.userLogout.bind(service));

export default router;
