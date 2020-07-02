import { Router } from 'express';

const propertiesRouter = Router();

propertiesRouter.get('/', (_, response) => {
  response.json({ message: 'Hello World' });
});

export default propertiesRouter;
