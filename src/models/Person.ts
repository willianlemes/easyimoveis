import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('people')
class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
}
export default Person;
