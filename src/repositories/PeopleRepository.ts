import { EntityRepository, Repository } from 'typeorm';
import Person from '../models/Person';

@EntityRepository(Person)
class PeopleRepository extends Repository<Person> {
  public async findByCpfCnpj(cpfCnpj: string): Promise<Person | null> {
    const findPerson = await this.findOne({
      where: { cpfCnpj }
    });
    return findPerson || null;
  }

  public async findPeopleByUserService(
    users_id: string
  ): Promise<Person | null> {
    const findUser = await this.findOne({
      where: {
        users_id
      }
    });
    return findUser || null;
  }
}

export default PeopleRepository;
