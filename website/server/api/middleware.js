import passport from 'passport';
import { ADMIN } from './constant';

export const passportLocal = passport.authenticate('local', { session: false });
export const passportJWT = passport.authenticate('jwt', { session: false });
export const checkRoleUser = (req, res, next) => {
    if (req.user.role === ADMIN) {
        next();
    }
    else {
        res.status(403).send("You are not allowed to access");
    }
}