import { getCustomRepository } from 'typeorm';
import Person from '../../models/Person';
import PeopleRepository from '../../repositories/PeopleRepository';
import AppError from '../../errors/AppError';

class FindPeopleByUserService {
  async execute(userId: string): Promise<Person> {
    const peopleRepository = getCustomRepository(PeopleRepository);

    const people = await peopleRepository.findPeopleByUserService(userId);

    if (!people) {
      throw new AppError('Pessoa nao cadastrada');
    }

    return people;
  }
}

export default FindPeopleByUserService;
