import { getCustomRepository } from 'typeorm';
import Person from '../../models/Person';
import PeopleRepository from '../../repositories/PeopleRepository';
import AppError from '../../errors/AppError';

class ListPeopleService {
  public async execute(): Promise<Person[]> {
    const peopleRepository = getCustomRepository(PeopleRepository);

    const people = await peopleRepository.find();

    if (!people || people.length < 1) {
      throw new AppError('Não há pessoas cadastradas.');
    }

    return people;
  }
}

export default ListPeopleService;
