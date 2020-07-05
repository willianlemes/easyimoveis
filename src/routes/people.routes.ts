import { Router } from 'express';
import CreatePeopleService from '../services/people/CreatePeopleService';
import ListPeopleService from '../services/people/ListPeopleService';

const peopleRoute = Router();

peopleRoute.post('/', async (request, response) => {
  const createPeople = new CreatePeopleService();

  const people = await createPeople.execute(request.body);

  return response.json({ people });
});

peopleRoute.get('/', async (request, response) => {
  const people = new ListPeopleService();

  const listPeople = await people.execute();

  return response.json(listPeople);
});

export default peopleRoute;
