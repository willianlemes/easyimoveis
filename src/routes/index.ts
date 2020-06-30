import { Router } from 'express';

import usersRouter from './users.routes';
import personRoute from './properties.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/persons', personRoute);

export default routes;
