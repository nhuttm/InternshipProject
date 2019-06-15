import express from 'express';

import clothesController from '../controllers/clothesController';
import { passportJWT, checkRoleUser } from '../middleware';

let adminRouter = express.Router();

adminRouter.use(passportJWT ,checkRoleUser);

let clothesControllerInstance = new clothesController();
adminRouter.get('/clothes', clothesControllerInstance.listAllClothesAdmin);

export default adminRouter;