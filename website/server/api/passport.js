import mongoose from 'mongoose';
import passport from 'passport';
import bcrypt from 'bcrypt';
import { SALT } from './constant';
import passportLocal from 'passport-local';
import passportJWT from 'passport-jwt';
import { JWT_SECRET } from './key';

const User = mongoose.model('User');

const LocalStrategy = passportLocal.Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    console.log('local');
    try {
        const findUser = await User.findOne({ 'username': email });
        if (!findUser) {
            return done(null, { message: 'Email does not exist' });
        }

        let hashPass = await bcrypt.hash(password, SALT);

        if (bcrypt.compare(hashPass, findUser.password)) {
            return done(null, findUser);
        } else {
            return done(null, { message: 'Incorect password' });
        }
    } catch (err) {
        done(err);
    }
}));

let options = {};

options.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
options.secretOrKey = JWT_SECRET;
options.issuer = 'nhuttm';

passport.use('jwt', new JWTStrategy(options, async (jwt_payload, done) => {
    const user = await User.findOne({'_id': jwt_payload.id});
    if (user){
        return done(null, user);
    } else {
        return done(null, false);
    }
}));