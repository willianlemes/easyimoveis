import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;
}

export default User;
