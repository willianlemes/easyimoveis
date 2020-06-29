import { getRepository } from 'typeorm';

import User from '../models/User';

import AppError from '../errors/AppError';

class ListUsersService {
  async execute(): Promise<User[]> {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find();

    if (!users || users.length < 1) {
      throw new AppError('Não há usuários cadastrados');
    }

    return users;
  }
}

export default ListUsersService;
