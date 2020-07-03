import { Router } from 'express';
import CreatePeopleService from '../services/people/CreatePeopleService';

const peopleRoute = Router();

peopleRoute.post('/', async (request, response) => {
  try {
    const { name, nickname, profile, type, cpf_cnpj } = request.body;
    const createPeople = new CreatePeopleService();

    const people = await createPeople.execute({
      name,
      nickname,
      profile,
      type,
      cpf_cnpj
    });

    return response.json({ people });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default peopleRoute;
