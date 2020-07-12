import { getCustomRepository } from 'typeorm';
import Business from '../../models/Business';
import BusinessReposity from '../../repositories/BusinessRepository';
import AppError from '../../errors/AppError';

class ListBusinessService {
  public async resolve(): Promise<Business[]> {
    const businessRepository = getCustomRepository(BusinessReposity);

    const business = await businessRepository.find();

    if (!business || business.length < 1) {
      throw new AppError('Não há negócios lançados.');
    }

    return business;
  }
}

export default ListBusinessService;
