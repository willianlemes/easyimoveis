import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

import User from './User';

@Entity('people')
class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'users_id' })
  users_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'users_id', referencedColumnName: 'id' })
  user: User;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'nickname' })
  nickname: string;

  @Column({ name: 'profile' })
  profile: string;

  @Column({ name: 'type' })
  type: string;

  @Column({ name: 'genre', nullable: true })
  genre: string;

  @Column({ name: 'datebirth', nullable: true })
  datebirth: Date;

  @Column({ name: 'rg_ie', nullable: true })
  rg_ie: string;

  @Column({ name: 'cpf_cnpj', nullable: true })
  cpf_cnpj: string;

  @Column({ name: 'occupation', nullable: true })
  occupation: string;

  @Column({ name: 'email', nullable: true })
  email: string;

  @Column({ name: 'phone', nullable: true })
  phone: string;

  @Column({ name: 'cell_phone', nullable: true })
  cell_phone: string;

  @Column({ name: 'address', nullable: true })
  address: string;

  @Column({ name: 'address_number', nullable: true })
  address_number: string;

  @Column({ name: 'neighborhood', nullable: true })
  neighborhood: string;

  @Column({ name: 'cep', nullable: true })
  cep: string;

  @Column({ name: 'state', nullable: true })
  state: string;

  @Column({ name: 'city', nullable: true })
  city: string;

  @Column({ name: 'photo', nullable: true })
  photo: string;

  @Column({ name: 'status', nullable: true })
  status: string;

  @CreateDateColumn({ name: 'created_at', default: 'now()' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', default: 'now()' })
  updatedAt: Date;
}
export default Person;
