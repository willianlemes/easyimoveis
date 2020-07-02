import { Router } from 'express';

const peopleRoute = Router();

peopleRoute.get('/', (_, response) => {
  response.json({ message: 'People Route' });
});

export default peopleRoute;
