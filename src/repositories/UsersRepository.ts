import User from '../models/User';

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  findAll(): User[] {
    return this.users;
  }

  createNada(): void {
    console.log('nada mesmo');
  }

  create(): void {
    const teste = 'nada';
  }

  private josiel = 'vinicius';
}

export default UsersRepository;
