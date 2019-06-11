import express from 'express';
import passport from 'passport';
import userController from '../controllers/userController';

let userControllerInstance = new userController();
let userRouter = express.Router();

userRouter.post('/login', passport.authenticate('local', {session: false}), userControllerInstance.handleLogin);
userRouter.post('/register', userControllerInstance.handleRegister);

export default userRouter;