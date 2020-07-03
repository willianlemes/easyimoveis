import { EntityRepository, Repository } from 'typeorm';
import Person from '../models/Person';

@EntityRepository(Person)
class PeopleRepository extends Repository<Person> {
  public async findByCpfCnpj(cpf_cnjp: string): Promise<Person | null> {
    const findPerson = await this.findOne({
      where: { cpf_cnjp }
    });
    return findPerson || null;
  }
}

export default PeopleRepository;
