import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import UserRepository from '../../repositories/UsersRepository';
import AppError from '../../errors/AppError';
import User from '../../models/User';

interface Request {
  email: string;
  password: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<{ user: User }> {
    const usersRepository = getCustomRepository(UserRepository);

    const user = await usersRepository.findOne({
      where: email
      // select: ['id', 'email', 'password']
    });

    if (!user) {
      throw new AppError('E-mail/senha incorreto.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('E-mail/senha incorreto.');
    }

    return { user };
  }
}

export default AuthenticateUserService;
