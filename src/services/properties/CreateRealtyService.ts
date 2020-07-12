import { getCustomRepository } from 'typeorm';

import Realty from '../../models/Realty';
import PropertiesRepository from '../../repositories/PropertiesRepository';
import RequestCreateRealty from './interfaces/RequestCreateRealty';

class CreateRealtyService {
  async execute(request: RequestCreateRealty): Promise<Realty> {
    const realtyRepository = getCustomRepository(PropertiesRepository);

    const realtyEntity = realtyRepository.create({ ...request });

    return realtyRepository.save(realtyEntity);
  }
}

export default CreateRealtyService;
