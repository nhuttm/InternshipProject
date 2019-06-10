import mongoose from 'mongoose';
import JWT from 'jsonwebtoken';

import * as Types from '../constant';

const User = mongoose.model('User');

const createToken = user => {
    return JWT.sign({user},Types.JWT_SECRET, { 
        expiresIn: new Date().setDate(new Date().getDate() + 1),
        subject: 'app_token',
        issuer: 'nhuttm'
    });
}

export default class userController {
    handleLogin = async (req, res) => {
        console.log('post-login');
        console.log(req.body);
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