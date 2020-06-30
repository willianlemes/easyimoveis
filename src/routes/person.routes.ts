import { Router } from 'express';

const personRoute = Router();

personRoute.get('/', (request, response) => {
  response.json({ message: 'PersonRoute' });
});

export default personRoute;
