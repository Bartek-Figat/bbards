import {Router} from "express";
import {confirmEmail, getUser, login, registerUser, updateUser} from "./controllers";
import {validateLoginForm, validateUpdateUserForm, validateUserForm} from "./middlewares";
import {jwtAuth} from "../middleware";

const router = Router();

router.get('/', jwtAuth, getUser);
router.post('/', validateUserForm, registerUser);
router.post('/auth', validateLoginForm, login);
router.put('/', validateUpdateUserForm, updateUser);
router.post('/confirm/:token', confirmEmail)

export default router;