import { EntityRepository, Repository } from 'typeorm';

import Realty from '../models/Realty';

@EntityRepository(Realty)
class PropertiesRepository extends Repository<Realty> {
  async findByUser(userId: string): Promise<Realty[]> {
    return this.find({
      where: {
        userId
      }
    });
  }

  async findByOwner(ownerId: string): Promise<Realty[]> {
    return this.find({
      where: {
        ownerId
      }
    });
  }
}

export default PropertiesRepository;
