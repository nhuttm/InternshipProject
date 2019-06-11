import express from 'express';
import passport from 'passport';
import categoryController from '../controllers/categoryController';

let categoryRouter = express.Router();

let categoryControllerInstance = new categoryController();
categoryRouter.get('/', passport.authenticate('jwt', {session: false}),categoryControllerInstance.listAllCategories);

export default categoryRouter;