import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';
import User from '../models/User';
import AppError from '../errors/AppError';

class ListUsersService {
  public async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.find();

    if (!users || users.length < 1) {
      throw new AppError('Não há usuários cadastrados');
    }

    return users;
  }
}

export default ListUsersService;
