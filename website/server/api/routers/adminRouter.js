import express from 'express';

import clothesController from '../controllers/clothesController';
import { passportJWT, checkRoleUser } from '../middleware';

let adminRouter = express.Router();

adminRouter.use(passportJWT ,checkRoleUser);

let clothesControllerInstance = new clothesController();
adminRouter.get('/clothes', clothesControllerInstance.listAllClothesAdmin);
adminRouter.post('/clothes/add_product', clothesControllerInstance.addProductIntoDB);
adminRouter.post('/clothes/edit_product', clothesControllerInstance.editProductDB);
adminRouter.delete('/delete/clothes/:id', clothesControllerInstance.removeClothesWithId);

export default adminRouter;