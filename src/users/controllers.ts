import {Request, Response} from "express";
import {LoginForm, UpdateUserForm, UserForm} from "./middlewares";
import {IUser, User} from "./schema";
import * as mongoose from "mongoose";
import * as  bcrypt from 'bcrypt';
import {logger} from "../utils/logger";
import {JwtPayload, sign} from "jsonwebtoken";

//TODO
const secret = 'aaaaaaaa';

export const getUser = async (req: Request, res: Response) => {
    const jwtPayload = req.user as JwtAtPayload;

    const user = await User.findById(jwtPayload.sub);

    return res.json(user.toObject());
}


export type JwtAtPayload = JwtPayload & Omit<IUser, 'password'>

export const registerUser = async (req: Request, res: Response) => {
    const data = req.body as UserForm;

    try {
        await User.create({...data, password: await bcrypt.hash(data.password, 10)});
    } catch (err) {
        if (err.name === 'MongoError' && err.code === 11000) {
            return res.status(400).json({message: 'Username or email is already in use!'})
        } else {
            logger.error(err);
            return res.sendStatus(500);
        }
    }

    return res.sendStatus(201);
}

export const login = async (req: Request, res: Response) => {
    const data = req.body as LoginForm;

    const user = await User.findByName(data.username);

    if (!user || !await user.verify(data.password)) {
        return res.sendStatus(401);
    }

    const {password, ...payload} = user.toObject();

    return res.json({
        at: sign(payload, secret, {expiresIn: '1h', subject: payload._id.toString(), })
    })
}

export const updateUser = async (req: Request, res: Response) => {
    const {sub} = req.user as JwtAtPayload;
    const data = req.body as UpdateUserForm;

    const updatedUser = await User.findByIdAndUpdate(sub, data, {new: true});
    const {password, ...result} = updatedUser.toObject();

    return res.json(result);
}

export const confirmEmail = async (req: Request, res: Response) => {
    const { token } = req.params;
    const user = await User.findOne({ emailConfirmationToken: token });

    if(!user) return res.sendStatus(404);

    if(user.emailConfirmationToken !== token) return res.sendStatus(401);

    user.isVerified = true;
    user.emailConfirmationToken = null;

    await user.save();

    return res.json({message: 'Email confirmed!'})

}