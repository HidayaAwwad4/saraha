import { Router } from "express";
import * as AuthController from './auth.controller.js'
const router = Router();

router.post('/',AuthController.Register);

export default router;