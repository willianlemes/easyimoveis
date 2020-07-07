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

  @Column({ name: 'user_id' })
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'users_id', referencedColumnName: 'id' })
  user: User;

  @Column({ name: 'realty_id', type: 'uuid' })
  realtyId: string;

  @ManyToOne(() => Realty)
  @JoinColumn({ name: 'realty_id', referencedColumnName: 'id' })
  realty: Realty;

  @Column({ name: 'customer_id' })
  customerId: string;

  @ManyToOne(() => Person)
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  customer: Person;

  @Column()
  title: string;

  @Column({ length: 100 })
  stage: string;

  @Column({ name: 'expected_closure' })
  expectedClosure: Date;

  @Column()
  probability: number;

  @Column({ nullable: true })
  annotations: string;

  @CreateDateColumn({ name: 'created_at', default: 'now()' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', default: 'now()' })
  updatedAt: Date;
}

export default Business;
