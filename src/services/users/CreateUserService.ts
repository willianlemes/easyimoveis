import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../../models/User';
import UsersRepository from '../../repositories/UsersRepository';
import AppError from '../../errors/AppError';
import { Genre, Status } from '../../enums';
import Helper from '../../utils/Helper';

interface Request {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  genre: Genre;
  dateBirth: Date;
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
      throw new AppError(
        'Já existe um usuário cadastrado com esse e-mail.',
        500
      );
    }

    if (genre && !['M', 'F', 'O'].includes(genre)) {
      throw new AppError('O gênero do usuário não é válido.');
    }

    if (!Helper.validateBirthDay(dateBirth)) {
      throw new AppError(
        'A data de aniversário do usuário não pode ser maior que a data atual.'
      );
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
      status: Status.ACTIVE
    });

    await usersRepository.save(user);

    delete user.password;

    return user;
  }
}

export default CreateUserService;
