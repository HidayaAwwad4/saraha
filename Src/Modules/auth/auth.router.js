import { Router } from "express";
import * as AuthController from './auth.controller.js'
const router = Router();

router.post('/register',AuthController.Register);
router.post('/login',AuthController.Login);


export default router;