import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../../models/User';
import UsersRepository from '../../repositories/UsersRepository';

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

    const checkUserExists = await usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new Error('Já existe um usuário cadastrado com esse e-mail.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      genre,
      dateBirth,
      photo,
      status: 'A'
    });

    await usersRepository.save(user);

    delete user.password;

    return user;
  }
}

export default CreateUserService;
