import { getCustomRepository } from 'typeorm';
import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  genre: string;
  dateBirth: string;
  photo: string;
}

class CreateUserService {
  public async execute({
    firstName,
    lastName,
    email,
    password,
    genre,
    dateBirth,
    photo
  }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const findEmail = await usersRepository.findByEmail(email);

    if (findEmail) {
      throw new Error('User already registered');
    }

    const user = usersRepository.create({
      firstName,
      lastName,
      email,
      password,
      genre,
      dateBirth,
      photo,
      status: 'A'
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
