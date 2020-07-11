import { Router } from 'express';
import CreatePeopleService from '../services/people/CreatePeopleService';
import ListPeopleService from '../services/people/ListPeopleService';
import FindPeopleService from '../services/people/FindPeopleService';
import FindPeopleByUserService from '../services/people/FindPeopleByUserService';
import UpdatePeopleService from '../services/people/UpdatePeopleService';

const peopleRoute = Router();

peopleRoute.post('/', async (request, response) => {
  const {
    userId,
    name,
    nickname,
    profile,
    type,
    genre,
    datebirth,
    rgIe,
    cpfCnpj,
    occupation,
    email,
    phone,
    cellPhone,
    address,
    addressNumber,
    neighborhood,
    cep,
    state,
    city,
    photo
  } = request.body;

  const createPeople = new CreatePeopleService();
  const people = await createPeople.execute({
    userId,
    name,
    nickname,
    profile,
    type,
    genre,
    datebirth,
    rgIe,
    cpfCnpj,
    occupation,
    email,
    phone,
    cellPhone,
    address,
    addressNumber,
    neighborhood,
    cep,
    state,
    city,
    photo
  });

  response.json({ people });
});

peopleRoute.get('/', async (_, response) => {
  const people = new ListPeopleService();

  const listPeople = await people.execute();

  return response.json(listPeople);
});

peopleRoute.get('/:id', async (request, response) => {
  const { id } = request.params;
  const people = new FindPeopleService();
  const person = await people.execute(id);
  return response.json(person);
});

peopleRoute.get('/users/:users_id', async (request, response) => {
  const { userId } = request.params;
  const people = new FindPeopleByUserService();
  const peopleByUserService = await people.execute(userId);
  return response.json(peopleByUserService);
});

peopleRoute.put('/', async (request, response) => {
  const {
    id,
    userId,
    name,
    nickname,
    profile,
    type,
    genre,
    datebirth,
    rgIe,
    cpfCnpj,
    occupation,
    email,
    phone,
    cellPhone,
    address,
    addressNumber,
    neighborhood,
    cep,
    state,
    city,
    photo,
    status
  } = request.body;

  const updatePeople = new UpdatePeopleService();

  const person = await updatePeople.execute({
    id,
    userId,
    name,
    nickname,
    profile,
    type,
    genre,
    datebirth,
    rgIe,
    cpfCnpj,
    occupation,
    email,
    phone,
    cellPhone,
    address,
    addressNumber,
    neighborhood,
    cep,
    state,
    city,
    photo,
    status
  });

  return response.json(person);
});

export default peopleRoute;
