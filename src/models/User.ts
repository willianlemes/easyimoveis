import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

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

  @Column()
  genre?: string;

  @Column({ name: 'date_birth' })
  dateBirth?: Date;

  @Column()
  photo?: string;

  @Column({ default: 'A' })
  status: string;

  @CreateDateColumn({ name: 'created_at', select: false })
  createAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updatedAt: Date;
}

export default User;
