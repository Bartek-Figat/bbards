import { Router, Request, Response, NextFunction } from 'express';
import { Middleware } from '../middleware/middleware';
import { AdvertService } from '../services/advert.services';
const router = Router({
  caseSensitive: true,
  strict: true,
});

const advert = new AdvertService();

router.post('/add-advertising', advert.addAdvert.bind(advert));

export default router;
