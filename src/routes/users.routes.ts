import { Router } from 'express';
import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.post('/', async (request, response) => {
  const { firstName, lastName, email } = request.body;

  const createUser = new CreateUserService(usersRepository);

  const user = createUser.execute({
    firstName,
    lastName,
    email
  });

  return response.json({ user });
});

usersRouter.get('/', (request, response) => {
  const users = usersRepository.all();
  return response.json(users);
});

export default usersRouter;
