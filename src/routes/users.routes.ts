import { Router } from 'express';

import ListUsersService from '../services/ListUsersService';

const usersRouter = Router();

usersRouter.get('/', async (_, response) => {
  const listUsersService = new ListUsersService();

  const users = await listUsersService.execute();

  return response.json({ users });
});

export default usersRouter;
