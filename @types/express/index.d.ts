import { Session, SessionData } from 'express-session';
import session from 'express-session';

export {};

declare global {
  namespace Express {
    interface Request {
      user: unknown;
    }
  }
}

declare module 'express-session' {
  export interface SessionData {
    userToken: any;
  }
}
