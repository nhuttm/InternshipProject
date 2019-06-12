import express from 'express';
import userController from '../controllers/userController';
import { passportLocal } from '../middleware'; 
let userControllerInstance = new userController();
let userRouter = express.Router();

userRouter.post('/login', passportLocal, userControllerInstance.handleLogin);
userRouter.post('/register', userControllerInstance.handleRegister);

export default userRouter;