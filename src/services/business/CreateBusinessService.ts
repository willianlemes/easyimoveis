import { getCustomRepository } from 'typeorm';
import Business from '../../models/Business';
import BusinessReposity from '../../repositories/BusinessRepository';
import UsersRepository from '../../repositories/UsersRepository';
import PeopleRepository from '../../repositories/PeopleRepository';
import PropertiesRepository from '../../repositories/PropertiesRepository';
import AppError from '../../errors/AppError';

interface Request {
  userId: string;
  realtyId: string;
  customerId: string;
  title: string;
  stage: string;
  expectedClosure: Date;
  probability: number;
  annotations: string;
}

class CreateBusinessService {
  public async execute({
    userId,
    realtyId,
    customerId,
    title,
    stage,
    expectedClosure,
    probability,
    annotations
  }: Request): Promise<Business> {
    const businessRepository = getCustomRepository(BusinessReposity);
    const usersRepository = getCustomRepository(UsersRepository);
    const peopleRepository = getCustomRepository(PeopleRepository);
    const propertiesRepository = getCustomRepository(PropertiesRepository);

    const user = await usersRepository.findOne({
      where: {
        id: userId
      }, // select id from users
      select: ['id']
    });

    if (!user) {
      throw new AppError('O usuário vinculado ao negócio não existe.');
    }

    const customer = await peopleRepository.findOne({
      where: {
        id: customerId
      },
      select: ['id']
    });

    if (!customer) {
      throw new AppError('O cliente vinculado ao negócio não existe.');
    }

    const realty = await propertiesRepository.findOne({
      where: {
        id: realtyId
      },
      select: ['id']
    });

    if (!realty) {
      throw new AppError('O imóvel vinculado ao negócio não existe.');
    }

    const business = businessRepository.create({
      userId,
      realtyId,
      customerId,
      title,
      stage,
      expectedClosure,
      probability,
      annotations
    });

    await businessRepository.save(business);

    return business;
  }
}

export default CreateBusinessService;
