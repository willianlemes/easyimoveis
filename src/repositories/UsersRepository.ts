import User from '../models/User';

// Data Transfer Object

interface CreateUsersDTO {
  firstName: string;
  lastName: string;
  email: string;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public create({ firstName, lastName, email }: CreateUsersDTO): User {
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;

    this.users.push(user);
    return user;
  }

  public all(): User[] {
    return this.users;
  }
}

export default UsersRepository;
