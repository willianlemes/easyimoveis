import { Router } from 'express';
import CreatePeopleService from '../services/people/CreatePeopleService';
import ListPeopleService from '../services/people/ListPeopleService';
import FindPeopleService from '../services/people/FindPeopleService';
import FindPeopleByUserService from '../services/people/FindPeopleByUserService';
import PeopleRepository from '../repositories/PeopleRepository';

const peopleRoute = Router();

peopleRoute.post('/', async (request, response) => {
  const createPeople = new CreatePeopleService();
  const { cpf_cnpj } = request.body;
  const peopleRepository = new PeopleRepository();

  const checkCnpj = peopleRepository.findByCpfCnpj(cpf_cnpj);

  if (checkCnpj) {
    const people = await createPeople.execute(request.body);
    response.json({ people });
  }
});

peopleRoute.get('/', async (_, response) => {
  const people = new ListPeopleService();

  const listPeople = await people.execute();

  return response.json(listPeople);
});

peopleRoute.get('/peoples/:id', async (request, response) => {
  const { id } = request.params;
  const people = new FindPeopleService();
  const person = await people.execute(id);
  return response.json(person);
});

peopleRoute.get('/users/:users_id', async (request, response) => {
  const { users_id } = request.params;
  const people = new FindPeopleByUserService();
  const peopleByUserService = await people.execute(users_id);
  return response.json(peopleByUserService);
});

export default peopleRoute;
