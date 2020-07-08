import { getCustomRepository } from 'typeorm';
import Person from '../../models/Person';
import PeopleRepository from '../../repositories/PeopleRepository';
import AppError from '../../errors/AppError';

class FindPeopleByUserService {
  async execute(user_id: string): Promise<Person> {
    const peopleRepository = getCustomRepository(PeopleRepository);

    const people = await peopleRepository.findPeopleByUserService(user_id);

    if (!people) {
      throw new AppError('Pessoa nao cadastrada');
    }

    return people;
  }
}

export default FindPeopleByUserService;
