import { getRepository } from 'typeorm';

import Realty from '../../models/Realty';

import AppError from '../../errors/AppError';

class ListPropertiesService {
  async execute(): Promise<Realty[]> {
    const realtyRepository = getRepository(Realty);

    const properties = await realtyRepository.find();

    if (!properties || properties.length < 1) {
      throw new AppError('Não há propriedades cadastradas.', 404);
    }

    return properties;
  }
}

export default ListPropertiesService;
