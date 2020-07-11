import { getCustomRepository } from 'typeorm';

import Realty from '../../models/Realty';
import PropertiesRepository from '../../repositories/PropertiesRepository';

import Request from './interfaces/Request';

class CreateRealtyService {
  async execute(request: Request): Promise<Realty> {
    const realtyRepository = getCustomRepository(PropertiesRepository);

    const realtyEntity = realtyRepository.create({ ...request });

    return realtyRepository.save(realtyEntity);
  }
}

export default CreateRealtyService;
