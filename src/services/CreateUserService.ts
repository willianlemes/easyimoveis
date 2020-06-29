import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  firstName: string;
  lastName: string;
  email: string;
}

class CreateUserService {
  private usersRepository: UsersRepository;

  constructor(userRepository: UsersRepository) {
    this.usersRepository = userRepository;
  }

  public execute({ firstName, lastName, email }: Request): User {
    const user = this.usersRepository.create({
      firstName,
      lastName,
      email
    });
    return user;
  }
}

export default CreateUserService;
