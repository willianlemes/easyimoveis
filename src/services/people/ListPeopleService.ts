/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { getCustomRepository } from 'typeorm';
import PeopleRepository from '../../repositories/PeopleRepository';
import AppError from '../../errors/AppError';
import PersonView from '../../views/people_views';

class ListPeopleService {
  public async execute() {
    const peopleRepository = getCustomRepository(PeopleRepository);

    const people = await peopleRepository.find({
      select: ['id', 'name', 'nickname', 'type', 'profile']
    });

    if (!people || people.length < 1) {
      throw new AppError('Não há pessoas cadastradas.');
    }

    return PersonView.renderMany(people);
  }
}

export default ListPeopleService;
