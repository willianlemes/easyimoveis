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
console.log('AQUI É PRA TER CONFLITO');
export default UsersRepository;
