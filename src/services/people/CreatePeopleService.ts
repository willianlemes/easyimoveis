import { getCustomRepository } from 'typeorm';
import Person from '../../models/Person';
import PeopleRepository from '../../repositories/PeopleRepository';

interface Request {
  name: string;
  nickname: string;
  profile: string;
  type: string;
  cpf_cnpj: string;
}

class CreatePeopleService {
  public async execute({
    name,
    nickname,
    profile,
    type,
    cpf_cnpj
  }: Request): Promise<Person> {
    const peopleRepository = getCustomRepository(PeopleRepository);

    const checkPeopleExists = await peopleRepository.findByCpfCnpj(cpf_cnpj);

    if (checkPeopleExists) {
      throw new Error('Já existe uma pessoa cadastrada com esse CPF/CNPJ.');
    }

    const people = peopleRepository.create({
      name,
      nickname,
      profile,
      type,
      cpf_cnpj
    });

    await peopleRepository.save(people);

    return people;
  }
}

export default CreatePeopleService;
