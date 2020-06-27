import User from '../models/User';

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  findAll(): User[] {
    return this.users;
  }
}

export default UsersRepository;
