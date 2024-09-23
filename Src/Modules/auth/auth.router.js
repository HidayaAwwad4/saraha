import { Router } from "express";
import * as AuthController from './auth.controller.js';
import validation from '../../Middleware/validation.js';
import { registerSchema, loginSchema} from "./auth.validation.js";
const router = Router();

router.post('/register',validation(registerSchema),AuthController.register);
router.post('/login',validation(loginSchema),AuthController.Login);


export default router;