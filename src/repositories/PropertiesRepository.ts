import { EntityRepository, Repository } from 'typeorm';

import Realty from '../models/Realty';

@EntityRepository(Realty)
class PropertiesRepository extends Repository<Realty> {
  async findByUser(id: string): Promise<Realty[] | null> {
    const properties = await this.find({
      where: {
        userId: id
      }
    });

    return properties || null;
  }
}

export default PropertiesRepository;
