import { Router } from "express";
const router = Router();
import * as AuthController from './auth.controller.js';
import validation from '../../Middleware/validation.js';
import { registerSchema, loginSchema} from "./auth.validation.js";


router.post('/register',validation(registerSchema),AuthController.register);
router.post('/login',validation(loginSchema),AuthController.Login);


export default router;