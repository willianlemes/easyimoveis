import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

import { Genre, Status } from '../enums';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ select: false })
  forget?: string;

  @Column({ type: 'varchar' })
  genre?: Genre;

  @Column({ name: 'date_birth' })
  dateBirth: Date;

  @Column()
  photo?: string;

  @Column({ type: 'varchar', length: 1, default: Status.ACTIVE })
  status: Status;

  @CreateDateColumn({ name: 'created_at', select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updatedAt: Date;
}

export default User;
