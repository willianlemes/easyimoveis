import { Router } from 'express';

import ListUsersService from '../services/ListUsersService';

const usersRouter = Router();

usersRouter.get('/', (_, response) => {
  const listUsers = new ListUsersService();

  const users = listUsers.execute();

  return response.json({ users });
});

export default usersRouter;
