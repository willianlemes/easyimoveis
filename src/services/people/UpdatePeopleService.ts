import { getCustomRepository } from 'typeorm';
import RequestUpdatePeople from './interfaces/RequestUpdatePeople';
import PeopleRepository from '../../repositories/PeopleRepository';
import Person from '../../models/Person';
import AppError from '../../errors/AppError';

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
  }: RequestUpdatePeople): Promise<Person | undefined> {
    const peopleRepository = getCustomRepository(PeopleRepository);
    if (genre) {
      if (['M', 'F', 'O'].indexOf(genre) === -1) {
        throw new AppError('O gênero do usuário não é válido.');
      }
    }

    if (status && !['A', 'I'].includes(status)) {
      throw new AppError('O status do usuário não é válido.');
    }
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
