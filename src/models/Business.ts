import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import User from './User';
import Realty from './Realty';
import Person from './Person';

@Entity('business')
class Business {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'users_id', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => Realty)
  @JoinColumn({ name: 'realty_id', referencedColumnName: 'id' })
  realty: Realty;

  @ManyToOne(() => Person)
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  customer_id: Person;

  @Column()
  title: string;

  @Column()
  stage: string;

  @Column()
  expected_closure: Date;

  @Column()
  probability: number;

  @Column()
  annotations: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default Business;
