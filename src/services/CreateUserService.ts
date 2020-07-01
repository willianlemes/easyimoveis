import { Repository } from 'typeorm';
import User from '../models/User';

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
  private usersRepository: Repository<User>;

  constructor(usersRepository: Repository<User>) {
    this.usersRepository = usersRepository;
  }

  public async execute({
    firstName,
    lastName,
    email,
    password,
    genre,
    dateBirth,
    photo
  }: Request): Promise<User> {
    const user = await this.usersRepository.create({
      firstName,
      lastName,
      email,
      password,
      genre,
      dateBirth,
      photo,
      status: 'A'
    });

    return user;
  }
}

export default CreateUserService;
