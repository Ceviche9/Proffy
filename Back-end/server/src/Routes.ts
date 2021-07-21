import express from 'express';
import ClassesController from './Controller/Classes';
import ConnectionsController from './Controller/Connections';

const routes = express.Router();

const classController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classController.create);
routes.get('/classes', classController.index);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);


export default routes;