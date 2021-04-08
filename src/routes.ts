import express from 'express';
import TestimonyController from './controller/TestimonyController';

const routes = express.Router();
const testimonyController = new TestimonyController();

routes.get('/testify-list', testimonyController.index);
routes.post('/create-testimony', testimonyController.create);

export default routes;