import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../../models/User';
import UsersRepository from '../../repositories/UsersRepository';

interface Request {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  genre: string;
  dateBirth: string;
  photo: string;
  status: string;
}

class UpdateUserService {
  public async execute({
    id,
    firstName,
    lastName,
    password,
    genre,
    dateBirth,
    photo,
    status
  }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const hashedPassword = await hash(password, 8);

    await usersRepository.update(id, {
      firstName,
      lastName,
      password: hashedPassword,
      genre,
      dateBirth,
      photo,
      status
    });

    const user = await usersRepository.findOneOrFail(id);

    delete user.password;

    return user;
  }
}

export default UpdateUserService;
