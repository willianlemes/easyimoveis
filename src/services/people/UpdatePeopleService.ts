import { getCustomRepository } from 'typeorm';
import RequestUpdatePeople from './interfaces/RequestUpdatePeople';
import PeopleRepository from '../../repositories/PeopleRepository';
import Person from '../../models/Person';

class UpdatePeopleService {
  public async execute({
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
  }: RequestUpdatePeople): Promise<Person> {
    const peopleRepository = getCustomRepository(PeopleRepository);
    const partialPerson = peopleRepository.create({
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

    await peopleRepository.update(id, partialPerson);

    const person = await peopleRepository.findOneOrFail(id);

    return person;
  }
}

export default UpdatePeopleService;
