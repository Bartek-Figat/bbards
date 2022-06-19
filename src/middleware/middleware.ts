import { Request, Response, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';
import { StatusCode } from '../enum';
import { Repository } from '../repositories/repositories';

export class Middleware {
  constructor(private repository: Repository = new Repository()) {}

  async isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    const token: string = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(StatusCode.UNAUTHORIZED).json({ status: `${StatusCode.UNAUTHORIZED}` });

    const authorizationToken = await this.repository.findOne(
      { authorizationToken: token },
      { authorizationToken: 1, _id: 0 }
    );

    if (!authorizationToken) {
      return res.status(StatusCode.UNAUTHORIZED).json({ status: `${StatusCode.UNAUTHORIZED}` });
    } else {
      try {
        verify(token, `secret`, (err, token) => {
          if (err)
            return res.status(StatusCode.UNAUTHORIZED).json({
              status: `${StatusCode.UNAUTHORIZED}`,
            });
          req.user = token as JwtPayload;
          next();
        });
      } catch (err) {
        return res.status(StatusCode.UNAUTHORIZED).json({ status: `${StatusCode.UNAUTHORIZED}` });
      }
    }
  }
}
