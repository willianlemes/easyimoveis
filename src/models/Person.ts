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

  @Column({ name: 'genre' })
  genre: string;

  @Column({ name: 'datebirth' })
  datebirth: Date;

  @Column({ name: 'rg_ie' })
  rg_ie: string;

  @Column({ name: 'cpf_cnpj' })
  cpf_cnpj: string;

  @Column({ name: 'occupation' })
  occupation: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'cell_phone' })
  cell_phone: string;

  @Column({ name: 'address' })
  address: string;

  @Column({ name: 'address_number' })
  address_number: string;

  @Column({ name: 'neighborhood' })
  neighborhood: string;

  @Column({ name: 'cep' })
  cep: string;

  @Column({ name: 'state' })
  state: string;

  @Column({ name: 'city' })
  city: string;

  @Column({ name: 'photo' })
  photo: string;

  @Column({ name: 'status' })
  status: string;

  @CreateDateColumn({ name: 'created_at', default: 'now()' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', default: 'now()' })
  updatedAt: Date;
}
export default Person;
