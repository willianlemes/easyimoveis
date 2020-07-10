import { getCustomRepository } from 'typeorm';

import PropertiesRepository from '../../repositories/PropertiesRepository';

import Realty from '../../models/Realty';

import AppError from '../../errors/AppError';

class FindPropertiesByOwnerService {
  async execute(ownerId: string): Promise<Realty[]> {
    const propertiesRepository = getCustomRepository(PropertiesRepository);

    const properties = await propertiesRepository.findByOwner(ownerId);

    if (!properties || properties.length < 1) {
      throw new AppError('Não há propriedades para este proprietário.', 404);
    }

    return properties;
  }
}

export default FindPropertiesByOwnerService;
