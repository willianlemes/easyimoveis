import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Realty from './Realty';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;
}

export default User;
