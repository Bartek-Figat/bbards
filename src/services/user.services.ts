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

export class UserService {
  constructor(private repository: Repository = new Repository()) {}

  async emailConfirmation({ email, authToken }: Credentials): Promise<void> {
    await transporter.sendMail({
      from: `${email}`,
      to: `${email}`,
      subject: 'Thank you for registering.',
      text: ' Node.js',
      html: `Hello.
          Thank you for registering. Please click the link to complete yor activation
          <a href='http://localhost:3000/activate/${authToken}'>Activation Link</a>`,
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
      const credentials = {
        email: email.toLowerCase(),
        name: userName,
        isVerified: false,
        authToken: sign({ iat: new Date().getTime() }, `${secret}`),
        dateAdded: new Date(),
        lastLoggedIn: null,
        logOutDate: null,
      };
      await this.repository.insertOne({ ...credentials, password: await hash(password, saltRounds) });
      await this.emailConfirmation({ email: credentials.email, authToken: credentials.authToken });
      return res.status(StatusCode.SUCCESS).json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  async userLogin(req: Request, res: Response, next: NextFunction) {
    const { email, password }: User = req.body;
    console.log(email, password);
    const user = await this.repository.findOne(
      { email },
      { email: 1, password: 1, isVerified: 1, authToken: 1, _id: 1 }
    );
    try {
      const match = user && (await compare(password, user.password));
      if (!match || user.isVerified === false || user.authToken !== null)
        return res.status(StatusCode.BAD_REQUEST).json({ error: ErrorMessage.WRONG }).end();

      const token: string = sign({ token: user._id.toString() }, `${secret}`);
      console.log(token);

      await this.repository.updateOne(
        { email: user.email },
        {
          $addToSet: { authorizationToken: { $each: [`${token}`] } },
        },
        {}
      );

      return res.status(200).json({ token });
    } catch (err) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  async userData(req: Request, res: Response, next: NextFunction) {
    const { token } = req.user as {
      token: {
        token: string;
      };
    };

    try {
      const user = await this.repository.findOne(
        { _id: new ObjectId(token.token) },
        { email: 1, name: 1, lastLoggedIn: 1, logOutDate: 1, _id: 0 }
      );

      res.status(StatusCode.SUCCESS).json({ user });
    } catch (err) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }
  async userEmailConfiramtion(req: Request, res: Response, next: NextFunction) {
    const { token } = req.params;
    const authToken = await this.repository.findOne({ authToken: token }, { authToken: 1, _id: 0 });
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
          isVerified: true,
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

  async userLogout(req: Request, res: Response, next: NextFunction) {
    const { token, authHeader } = req.user as {
      token: {
        token: string;
      };
      authHeader: string;
    };
    try {
      const v = await this.repository.updateOne(
        { _id: new ObjectId(token.token) },
        {
          $pull: { authorizationToken: authHeader },
        },
        {}
      );
      console.log(v);
      return res.status(200).json({ message: 'You have been logged out successfully' });
    } catch (err) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR);
    }
  }
}
