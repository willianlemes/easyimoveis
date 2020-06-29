import User from '../models/User';

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public create(firstName: string, lastName: string, email: string): User {
    const user = new User(firstName, lastName, email);
    this.users.push(user);
    return user;
  }

  public all(): User[] {
    return this.users;
  }
}

export default UsersRepository;
