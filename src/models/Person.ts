/* eslint-disable @typescript-eslint/interface-name-prefix */
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

import { Type, Genre, Status, Profile } from '../enums';

@Entity('people')
class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'nickname' })
  nickname: string;

  @Column({ type: 'varchar' })
  profile: Profile;

  @Column({
    type: 'varchar',
    length: 1,
    default: Type.PHYSISCS
  })
  type: Type;

  @Column({ type: 'varchar', nullable: true })
  genre: Genre;

  @Column({ name: 'date_birth', nullable: true })
  datebirth: Date;

  @Column({ name: 'rg_ie', nullable: true })
  rgIe: string;

  @Column({ name: 'cpf_cnpj', nullable: true })
  cpfCnpj: string;

  @Column({ name: 'occupation', nullable: true })
  occupation: string;

  @Column({ name: 'email', nullable: true })
  email: string;

  @Column({ name: 'phone', nullable: true })
  phone: string;

  @Column({ name: 'cell_phone', nullable: true })
  cellPhone: string;

  @Column({ name: 'address', nullable: true })
  address: string;

  @Column({ name: 'address_number', nullable: true })
  addressNumber: string;

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

  @Column({ type: 'varchar', length: 1, default: Status.ACTIVE })
  status: Status;

  @CreateDateColumn({ name: 'created_at', select: false, default: 'now()' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false, default: 'now()' })
  updatedAt: Date;
}
export default Person;
