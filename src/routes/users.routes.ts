import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUsersService from '../services/ListUsersService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      genre,
      dateBirth,
      photo
    } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      firstName,
      lastName,
      email,
      password,
      genre,
      dateBirth,
      photo
    });

    return response.json({ user });
  } catch (err) {
    return response.status(401).json({ error: err.message });
  }
});

usersRouter.get('/', async (request, response) => {
  try {
    const listUsers = new ListUsersService();
    const users = await listUsers.execute();
    return response.json({ users });
  } catch (err) {
    return response.status(401).json({ error: err.message });
  }
});

export default usersRouter;
