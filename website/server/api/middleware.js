import passport from 'passport';
import multer from 'multer';
import path from 'path';
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

let storage = multer.diskStorage({
    destination: '../public/img',
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000
    },
    fileFilter: (req, file, callback) => {
        checkFileType(file, callback);
    }
}).array('img', 4);