import * as mongoose from "mongoose";
import * as bcrypt from 'bcrypt'
import {v4} from 'uuid'



export interface IUser {
    name:string;
    email:string;
    password:string;
    emailConfirmationToken?: string;
    isVerified: boolean;
    lastLoggedIn: Date;
}

interface IUserMethods {
    verify: (pass:string)=> Promise<boolean>;
}

interface UserModel extends mongoose.Model<IUser, {}, IUserMethods> {
    findByName: (name: string)=> Promise<mongoose.HydratedDocument<IUser, IUserMethods>>;
    findByEmail: (email: string)=> Promise<mongoose.HydratedDocument<IUser, IUserMethods>>;
}

const userSchema = new mongoose.Schema({
    name: {type: String, index: true, unique: true},
    email: {type: String, index: true, unique: true},
    password: String,
    emailConfirmationToken: {
        type: String,
        default: v4,
    },
    isVerified: {type: Boolean, default: false},
    lastLoggedIn: {type: Date, default: Date.now},
}, {timestamps: true});

userSchema.method('verify', async function (pass: string) {
    return await bcrypt.compare(pass, this.password);
})

userSchema.static('findByName', async function (username: string) {
    return this.findOne({username});
})

userSchema.static('findByEmail', async function (email:string) {
    return this.findOne({email})
})




export const User = mongoose.model<IUser, UserModel>('User', userSchema);