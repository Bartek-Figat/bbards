import {SafeParseError, z} from 'zod'
import {NextFunction, Request, Response} from "express";

const userFormValidator = z.object({
    name: z.string().min(3).max(20),
    password: z.string().min(6),
    email: z.string().email(),
})

const updateUserFormValidator = userFormValidator.partial();


const loginFormValidator = z.object({
    username: z.string(),
    password: z.string(),
})


export type UserForm = z.infer<typeof userFormValidator>;
export type UpdateUserForm = z.infer<typeof updateUserFormValidator>
export type LoginForm = z.infer<typeof loginFormValidator>

export const validateUserForm = (req: Request, res: Response, next: NextFunction) => {
    const raw = req.body;

    const parsed = userFormValidator.safeParse(raw);

    if (parsed.success === false) {
        return res.status(400).json(parsed.error)
    }

    req.body = parsed.data;
    next()
}

export const validateLoginForm = (req:Request, res: Response, next: NextFunction) => {
    const raw = req.body;

    const parsed = loginFormValidator.safeParse(raw);

    if (parsed.success === false) {
        return res.status(400).json(parsed.error)
    }

    req.body = parsed.data;
    next()
}

export const validateUpdateUserForm = (req,res,next)=> {
    const raw = req.body;

    const parsed = updateUserFormValidator.safeParse(raw);

    if (parsed.success === false) {
        return res.status(400).json(parsed.error)
    }

    req.body = parsed.data;
    next()
}
