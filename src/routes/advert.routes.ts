import { Router, Request, Response, NextFunction } from 'express';
import { Middleware } from '../middleware/middleware';
const router = Router({
  caseSensitive: true,
  strict: true,
});

const middleware = new Middleware();

router.get('/advertising', middleware.isAuthenticated.bind(middleware));

router.post('/add-advertising', middleware.isAuthenticated.bind(middleware));

router.put('/modify-advertising', middleware.isAuthenticated.bind(middleware));

export default router;
