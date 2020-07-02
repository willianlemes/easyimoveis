import { getCustomRepository } from 'typeorm';
import UsersRepository from '../../repositories/UsersRepository';
import User from '../../models/User';
import AppError from '../../errors/AppError';

class FindUserService {
  public async execute(id: string): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({
      where: { id }
    });

    if (!user) {
      throw new AppError('Não há usuários cadastrados');
    }

    return user;
  }
}

export default FindUserService;
