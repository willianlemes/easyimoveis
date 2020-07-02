import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import User from './User';

@Entity('properties')
class Realty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @Column({ name: 'finality', nullable: true })
  finality: string;

  @Column({ name: 'kind', nullable: true })
  kind: string;

  @Column({ name: 'price', nullable: true })
  price: number;

  @Column({ name: 'address', nullable: true })
  address: string;

  @Column({ name: 'address_number', nullable: true })
  addressNumber: string;

  @Column({ name: 'neighborhood', nullable: true })
  neighborhood: string;

  @Column({ name: 'complement', nullable: true })
  complement: string;

  @Column({ name: 'cep', nullable: true })
  cep: string;

  @Column({ name: 'city', nullable: true })
  city: string;

  @Column({ name: 'state', nullable: true })
  state: string;

  @Column({ name: 'measure_type', nullable: true })
  measureType: string;

  @Column({ name: 'zone_front', nullable: true })
  zoneFront: number;

  @Column({ name: 'zone_bottom', nullable: true })
  zoneBottom: number;

  @Column({ name: 'zone_left', nullable: true })
  zoneLeft: number;

  @Column({ name: 'zone_right', nullable: true })
  zoneRight: number;

  @Column({ name: 'number_dorms', nullable: true })
  numberDorms: number;

  @Column({ name: 'number_suites', nullable: true })
  numberSuites: number;

  @Column({ name: 'number_bathrooms', nullable: true })
  numberBathrooms: number;

  @Column({ name: 'number_room', nullable: true })
  numberRoom: number;

  @Column({ name: 'cars_capacity', nullable: true })
  carsCapacity: number;

  @Column({ name: 'is_furnished' })
  isFurnished: boolean;

  @Column({ name: 'status' })
  status: string;

  @CreateDateColumn({ name: 'created_at', default: 'now()' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', default: 'now()' })
  updatedAt: Date;
}

export default Realty;
