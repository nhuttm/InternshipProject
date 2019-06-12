import passport from 'passport';

export const passportLocal = passport.authenticate('local', {session: false});
export const passportJWT = passport.authenticate('jwt', {session: false});