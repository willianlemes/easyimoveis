import { getCustomRepository } from 'typeorm';
import PropertiesRepository from '../../repositories/PropertiesRepository';
import Realty from '../../models/Realty';
import AppError from '../../errors/AppError';

class FindPropertiesById {
  async execute(id: string): Promise<Realty> {
    const propertiesRepository = getCustomRepository(PropertiesRepository);

    const realty = await propertiesRepository.findOne({
      where: { id }
    });

    if (!realty) {
      throw new AppError('Não há imóvel com este ID.', 404);
    }

    return realty;
  }
}

export default FindPropertiesById;
