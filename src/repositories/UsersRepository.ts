import User from '../models/User';

class UsersRepository {
  private users: User[] = [
    {
      id: 1,
      firstName: 'Carlos',
      properties: []
    },
    {
      id: 2,
      firstName: 'Eduardo',
      properties: []
    }
  ];

  findAll(): User[] {
    return this.users;
  }
}

export default UsersRepository;
