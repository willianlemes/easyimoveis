import { getCustomRepository } from 'typeorm';

import PropertiesRepository from '../../repositories/PropertiesRepository';

import Realty from '../../models/Realty';

import AppError from '../../errors/AppError';

class FindPropertiesByUserService {
  async execute(id: string): Promise<Realty[]> {
    const propertiesRepository = getCustomRepository(PropertiesRepository);

    const properties = await propertiesRepository.findByUser(id);

    if (!properties || properties.length < 1) {
      throw new AppError(
        'Não há propriedades cadastradas por esse usuário',
        404
      );
    }

    return properties;
  }
}

export default FindPropertiesByUserService;
