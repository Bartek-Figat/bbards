import dotenv from 'dotenv';
import { ObjectId } from 'mongodb';
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Repository } from '../repositories/repositories';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { createTransport } from 'nodemailer';
import { StatusCode, ErrorMessage } from '../enum';

dotenv.config();
const { secret, user, pass } = process.env;

const saltRounds: number = 10;

interface User {
  email: string;
  password: string;
  userName: string;
}

interface Credentials {
  email: string;
  authToken: string;
}

const transporter = createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user,
    pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export class Service {
  constructor(private repository: Repository = new Repository()) {}

  async emailConfirmation({ email, authToken }: Credentials): Promise<void> {
    await transporter.sendMail({
      from: `${email}`,
      to: `${email}`,
      subject: 'Thank you for registering.',
      text: ' Node.js',
      html: `Hello.
          Thank you for registering. Please click the link to complete yor activation
          <a href='http://bbards.com/activate/${authToken}'>Activation Link</a>`,
    });
  }

  async userRegister(req: Request, res: Response, next: NextFunction) {
    const { email, password, userName }: User = req.body;
    const userEmail = await this.repository.findOne({ email }, { email: 1, _id: 0 });
    try {
      if (userEmail)
        return res.status(StatusCode.BAD_REQUEST).json({
          error: ErrorMessage.BEDREQ,
        });
      const hashedPassword = await hash(password, saltRounds);
      const credentials = {
        email: email.toLowerCase(),
        name: userName,
        isAuthenticated: false,
        authToken: sign({ iat: new Date().getTime() }, `${secret}`),
        dateAdded: new Date(),
        lastLoggedIn: new Date(),
      };
      await this.repository.insertOne({ ...credentials, password: hashedPassword });
      await this.emailConfirmation({ email: credentials.email, authToken: credentials.authToken });
      return res.status(StatusCode.SUCCESS).json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  async userLogin(req: Request, res: Response, next: NextFunction) {
    const { email, password }: User = req.body;
    console.log(email, password);
    const user = await this.repository.findOne({ email }, { password: 1, isAuthenticated: 1, authToken: 1, _id: 1 });
    try {
      const match = user && (await compare(password, user.password));
      console.log(match);
      if (!match || user.isAuthenticated === false || user.authToken !== null)
        return res.status(StatusCode.BAD_REQUEST).json({ error: ErrorMessage.WRONG });
      const token: string = sign({ token: user._id }, `${secret}`);
      return res.status(200).json({ token });
    } catch (err) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  async userData(req: Request, res: Response, next: NextFunction) {
    const { token } = req.user as { token: string };
    try {
      const user = await this.repository.findOne(
        { _id: new ObjectId(token) },
        { email: 1, name: 1, lastLoggedIn: 1, _id: 0 }
      );
      console.log(user);
      res.status(StatusCode.SUCCESS).json({ user });
    } catch (err) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }
  async userEmailConfiramtion(req: Request, res: Response, next: NextFunction) {
    const { token } = req.params;
    console.log('token', token);
    const authToken = await this.repository.findOne({ authToken: token }, { authToken: 1, _id: 0 });
    console.log('authToken', authToken);
    try {
      if (!authToken) {
        res.status(StatusCode.BAD_REQUEST).json({
          error: ErrorMessage.BEDREQ,
        });
      } else {
        await this.updateAccountAfterEmailConfirmation({ authToken: authToken.authToken });
        return res.json({ status: StatusCode.SUCCESS });
      }
    } catch (err) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }
  async updateAccountAfterEmailConfirmation(token: { authToken: string }): Promise<void> {
    const { email } = await this.repository.findOne({ authToken: token.authToken }, { email: 1, _id: 0 });
    await this.repository.updateOne(
      { email },
      {
        $set: {
          authToken: null,
          isAuthenticated: true,
        },
      },
      {}
    );
    await transporter.sendMail({
      from: `figat29@gmail.com`,
      to: `${email}`,
      subject: 'Thank you for registering.',
      text: 'Node.js',
      html: `Your account has benne successfully activated`,
    });
  }
}
