import { Router } from 'express';
import CreateUserService from '../services/users/CreateUserService';
import ListUsersService from '../services/users/ListUsersService';
import FindUserService from '../services/users/FindUserService';
import UpdateUserService from '../services/users/UpdateUserService';

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
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.get('/', async (_, response) => {
  try {
    const listUsers = new ListUsersService();
    const users = await listUsers.execute();
    return response.json({ users });
  } catch (err) {
    return response.status(401).json({ error: err.message });
  }
});

usersRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const findUser = new FindUserService();
    const user = await findUser.execute(id);
    return response.json({ user });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.put('/', async (request, response) => {
  try {
    const {
      id,
      firstName,
      lastName,
      password,
      genre,
      dateBirth,
      photo,
      status
    } = request.body;

    const updateUser = new UpdateUserService();

    const user = await updateUser.execute({
      id,
      firstName,
      lastName,
      password,
      genre,
      dateBirth,
      photo,
      status
    });

    return response.json({ user });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
