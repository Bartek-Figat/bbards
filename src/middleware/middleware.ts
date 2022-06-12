import { Request, Response, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';
import { StatusCode } from '../enum';

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token: string = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(StatusCode.UNAUTHORIZED).json({ status: `${StatusCode.UNAUTHORIZED}` });

  verify(token, `secret`, (err, token) => {
    if (err)
      return res.status(StatusCode.UNAUTHORIZED).json({
        status: `${StatusCode.UNAUTHORIZED}`,
      });
    req.user = token as JwtPayload;
    next();
  });
};
