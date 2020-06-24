import User from '../models/User';

class UsersRepository {
  private users: User[] = [
    {
      id: 1,
      firstName: 'Carlos'
    },
    {
      id: 2,
      firstName: 'Eduardo'
    }
  ];

  findAll() {
    return this.users;
  }
}

export default UsersRepository;
