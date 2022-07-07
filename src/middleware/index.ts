import { Request, Response, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';
import { StatusCode } from '../enum';
import { Repository } from '../repositories/repositories';
import * as mongoose from "mongoose";
import {IUser} from "../users/schema";


//TODO read from env
const secret = 'aaaaa'

export const jwtAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];

  verify(token, secret, (err, payload)=>{
    if (err) return res.sendStatus(401);

    req.user = payload;
    next();
  })
}

export const verifiedOnly = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as Omit<IUser, 'password'>
  if (!user) return res.sendStatus(401);

  if (!user.isVerified) return res.status(403).json({message: 'Verified users only!'})

  next();
}