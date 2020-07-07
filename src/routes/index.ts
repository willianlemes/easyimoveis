import { Router } from 'express';

import usersRouter from './users.routes';
import peopleRoute from './people.routes';
import propertiesRouter from './properties.routes';
import businessRouter from './business.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/people', peopleRoute);
routes.use('/properties', propertiesRouter);
routes.use('/business', businessRouter);

export default routes;
