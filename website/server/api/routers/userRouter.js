import express from 'express';

import userController from '../controllers/userController';

let userControllerInstance = new userController();
let userRouter = express.Router();

userRouter.post('/login', userControllerInstance.handleLogin);
userRouter.post('/register', userControllerInstance.handleRegister);

export default userRouter;