/* eslint-disable @typescript-eslint/interface-name-prefix */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ValueTransformer
} from 'typeorm';

import User from './User';

import { Type, Genre, Status, Profile } from '../enums';

interface IProfileTransformer {
  value: string;
  label: string;
}

const ProfileTransformer: ValueTransformer = {
  from: dbValue => {
    let profileName = '';

    switch (dbValue) {
      case Profile.CUSTOMER:
        profileName = 'Cliente';
        break;
      case Profile.BROKER:
        profileName = 'Corretor';
        break;
      case Profile.INTERESTED:
        profileName = 'Interessado';
        break;
      default:
        profileName = 'Outro';
        break;
    }
    return { value: dbValue, label: profileName };
  },
  to: entityValue => entityValue
};

interface ITypeTransformer {
  value: string;
  label: string;
}

const TypeTransformer: ValueTransformer = {
  from: dbValue => {
    let typeName = '';

    switch (dbValue) {
      case Type.JURIDICAL:
        typeName = 'Jurídica';
        break;
      default:
        typeName = 'Física';
        break;
    }
    return { value: dbValue, label: typeName };
  },
  to: entityValue => entityValue
};

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

  @Column({ type: 'varchar', transformer: ProfileTransformer })
  profile: IProfileTransformer;

  @Column({
    type: 'varchar',
    length: 1,
    default: Type.PHYSISCS,
    transformer: TypeTransformer
  })
  type: ITypeTransformer;

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
