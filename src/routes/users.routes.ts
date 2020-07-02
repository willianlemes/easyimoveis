import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

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

export default usersRouter;
