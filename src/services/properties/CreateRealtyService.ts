import { getRepository } from 'typeorm';

import Realty from '../../models/Realty';

import Request from './interfaces/Request';

class CreateRealtyService {
  async execute(request: Request): Promise<Realty> {
    const realtyRepository = getRepository(Realty);

    const realtyEntity = realtyRepository.create({ ...request });

    return realtyRepository.save(realtyEntity);
  }
}

export default CreateRealtyService;
