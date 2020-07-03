import { Router } from 'express';

import usersRouter from './users.routes';
import peopleRoute from './people.routes';
import propertiesRouter from './properties.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/people', peopleRoute);
routes.use('/properties', propertiesRouter);

export default routes;
