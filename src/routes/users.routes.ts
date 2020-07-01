import { Router } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();
const usersRepository = getRepository(User);

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

  const createUser = new CreateUserService(usersRepository);

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
});

usersRouter.get('/', (request, response) => {
  const users = usersRepository.all();
  return response.json(users);
});

export default usersRouter;
