import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'email' })
  email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this.id = uuid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

export default User;
