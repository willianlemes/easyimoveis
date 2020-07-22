import { Router } from 'express';

import AuthenticateUserService from '../services/users/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  await authenticateUser.execute({ email, password });

  response.json({ ok: true });
});

export default sessionsRouter;
