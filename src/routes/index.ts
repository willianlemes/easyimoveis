import { Router } from 'express';

import usersRouter from './users.routes';
import peopleRoute from './people.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/people', peopleRoute);

export default routes;
