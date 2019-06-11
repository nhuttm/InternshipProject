import mongoose from 'mongoose';
import JWT from 'jsonwebtoken';
import passport from 'passport';
import * as Types from '../constant';
import { JWT_SECRET } from '../key';

const User = mongoose.model('User');

const createToken = user => {
    return JWT.sign({id: user._id, role: user.role},JWT_SECRET, { 
        expiresIn: new Date().setDate(new Date().getDate() + 1),
        subject: 'app_token',
        issuer: 'nhuttm'
    });
}

export default class userController {
    handleLogin = (req, res) => {
        if (req.user.message){
            res.status(401).json({message: req.user.message});
        } else{
            const token = createToken(req.user);
            console.log(req.user);
            res.status(200).json({token, user:req.user, message: 'Login success'});
        }
    }

    handleRegister = async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        const fullname = req.body.fullname;

        try{
            const findUser = await User.findOne({'username':email});

            if (findUser){
                return res.status(403).json({error: 'Email is already in use'});
            }
    
            const user = new User({
                _id: mongoose.Types.ObjectId(),
                username: email,
                password: password,
                fullname: fullname,
                role: Types.IS_USER
            });
    
            await user.save();

            res.status(200).json({token, result: 'Create account success'});
        } catch(error){
            console.log(error);
        }
    }
};