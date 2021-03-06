import { getRepository } from 'typeorm';

import Realty from '../../models/Realty';

import RequestUpdateRealty from './interfaces/RequestUpdateRealty';

import AppError from '../../errors/AppError';

class UpdateRealtyService {
  async execute(
    id: string,
    request: RequestUpdateRealty
  ): Promise<Realty | undefined> {
    const realtyRepository = getRepository(Realty);

    const realtyFound = await realtyRepository.findOne(id);

    if (!realtyFound) {
      throw new AppError('A propriedade informada não existe.', 404);
    }

    await realtyRepository.update(id, request);

    return realtyRepository.findOne(id);
  }
}

export default UpdateRealtyService;
