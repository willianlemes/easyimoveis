import { getCustomRepository } from 'typeorm';
import Person from '../../models/Person';
import PeopleRepository from '../../repositories/PeopleRepository';
import AppError from '../../errors/AppError';

class FindPeopleService {
  async execute(id: string): Promise<Person[]> {
    const peopleRepository = getCustomRepository(PeopleRepository);

    const people = await peopleRepository.find({
      where: {
        id
      }
    });

    if (!people) {
      throw new AppError('Pessoa nao cadastrada');
    }

    return people;
  }
}

export default FindPeopleService;
