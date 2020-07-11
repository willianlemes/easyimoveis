import { Router } from 'express';
import { parseISO } from 'date-fns';
import CreateUserService from '../services/users/CreateUserService';
import ListUsersService from '../services/users/ListUsersService';
import FindUserService from '../services/users/FindUserService';
import UpdateUserService from '../services/users/UpdateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
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

  const parsedDate = parseISO(dateBirth);

  const user = await createUser.execute({
    firstName,
    lastName,
    email,
    password,
    genre,
    dateBirth: parsedDate,
    photo
  });

  return response.json({ user });
});

usersRouter.get('/', async (_, response) => {
  const listUsers = new ListUsersService();
  const users = await listUsers.execute();
  return response.json({ users });
});

usersRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const findUser = new FindUserService();
  const user = await findUser.execute(id);
  return response.json({ user });
});

usersRouter.put('/', async (request, response) => {
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
});

export default usersRouter;
