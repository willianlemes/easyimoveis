import { getCustomRepository } from 'typeorm';
import Person from '../../models/Person';
import PeopleRepository from '../../repositories/PeopleRepository';
import AppError from '../../errors/AppError';
import RequestCreatePeople from './interfaces/RequestCreatePeople';
import { Status, Profile } from '../../enums';

class CreatePeopleService {
  public async execute({
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
  }: RequestCreatePeople): Promise<Person> {
    const peopleRepository = getCustomRepository(PeopleRepository);

    if (cpfCnpj) {
      const checkCnpj = await peopleRepository.findByCpfCnpj(cpfCnpj);

      if (checkCnpj) {
        throw new AppError(
          'Já existe uma pessoa com esse CPF/CNPJ cadastrada.'
        );
      }
    }
    if (genre && !['M', 'F', 'O'].includes(genre)) {
      throw new AppError('O gênero da pessoa não é válido.');
    }
    if (type && !['F', 'J'].includes(type)) {
      throw new AppError('O tipo da pessoa não é válido.');
    }

    const { CUSTOMER, BROKER, INTERESTED, OTHER } = Profile;

    if (profile && ![CUSTOMER, BROKER, INTERESTED, OTHER].includes(profile)) {
      throw new AppError('O perfil cadastrado não é válido');
    }

    const people = peopleRepository.create({
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
      status: Status.ACTIVE
    });
    await peopleRepository.save(people);
    return people;
  }
}

export default CreatePeopleService;
