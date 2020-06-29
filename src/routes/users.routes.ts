import { Router } from 'express';
import UsersRepository from '../repositories/UsersRepository';

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.post('/', async (request, response) => {
  const { firstName, lastName, email } = request.body;
  const user = usersRepository.create(firstName, lastName, email);
  return response.json({ user });
});

usersRouter.get('/', (request, response) => {
  const users = usersRepository.all();
  return response.json(users);
});

export default usersRouter;
