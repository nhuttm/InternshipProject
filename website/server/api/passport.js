import mongoose from 'mongoose';
import passport from 'passport';
import passportLocal from 'passport-local';
import passportJWT from 'passport-jwt';

const User = mongoose.model('User');

const LocalStrategy = passportLocal.Strategy;

    passport.use('local',new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (email, password, done) => {
        try {
            const findUser = await User.findOne({ 'username': email });
            if (!findUser) {
                return done(null, { message: 'Email does not exist' });
            }

            if (password == findUser.password) {
                return done(null, findUser);
            } else {
                return done(null, { message: 'Incorect password' });
            }
        } catch (err) {
            done(err);
        }
    }));