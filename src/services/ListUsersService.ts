import { getCustomRepository } from 'typeorm';

import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

import AppError from '../errors/AppError';

class ListUsersService {
  public execute(): User[] {
    const usersRepository = new UsersRepository();

    const users = usersRepository.findAll();

    if (!users) {
      throw new AppError('Transaction does not exist');
    }

    return users;
  }
}

export default ListUsersService;
