import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../../models/User';
import UsersRepository from '../../repositories/UsersRepository';
import AppError from '../../errors/AppError';
import { Genre, Status } from '../../enums';

interface Request {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  genre: Genre;
  dateBirth: Date;
  photo: string;
  status: Status;
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

    if (genre) {
      if (['M', 'F', 'O'].indexOf(genre) === -1) {
        throw new AppError('O gênero do usuário não é válido.');
      }
    }

    if (dateBirth && dateBirth > new Date()) {
      throw new AppError(
        'A data de aniversário do usuário não pode ser maior que a data atual.'
      );
    }

    if (status && !['A', 'I'].includes(status)) {
      throw new AppError('O status do usuário não é válido.');
    }

    const hashedPassword = await hash(password, 8);

    const partialUser = usersRepository.create({
      id,
      firstName,
      lastName,
      password: hashedPassword,
      genre,
      dateBirth,
      photo,
      status
    });

    await usersRepository.update(id, partialUser);

    const user = await usersRepository.findOneOrFail(id);

    delete user.password;

    return user;
  }
}

export default UpdateUserService;
