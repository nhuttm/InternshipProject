import express from 'express';

import clothesController from '../controllers/clothesController';

let clothesRouter = express.Router();

let clothesControllerInstance = new clothesController();
clothesRouter.get('/', clothesControllerInstance.listAllClothes);
clothesRouter.get('/:id', clothesControllerInstance.getClothesWithId);

export default clothesRouter;