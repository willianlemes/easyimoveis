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

  nadaDeNovo(): void {
    console.log('nada mais uma vez');
  }

  private josiel = 'vinicius';
}

export default UsersRepository;
