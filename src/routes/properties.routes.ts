import { Router } from 'express';

const propertiesRouter = Router();

propertiesRouter.get('/', (request, response) => {
  response.json({ message: 'Hello World' });
});

export default propertiesRouter;
