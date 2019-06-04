import express from 'express';

import categoryController from '../controllers/categoryController';

let categoryRouter = express.Router();

let categoryControllerInstance = new categoryController();
categoryRouter.get('/', categoryControllerInstance.listAllCategories);

export default categoryRouter;