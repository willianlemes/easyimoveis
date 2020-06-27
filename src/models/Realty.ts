import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import User from './User';

@Entity('properties')
class Realty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.properties)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'finality' })
  finality: string;

  @Column({ name: 'kind' })
  kind: string;

  @Column({ name: 'price' })
  price: number;

  @Column({ name: 'address' })
  address: string;

  @Column({ name: 'address_number' })
  addressNumber: string;

  @Column({ name: 'neighborhood' })
  neighborhood: string;

  @Column({ name: 'complement' })
  complement: string;

  @Column({ name: 'cep' })
  cep: string;

  @Column({ name: 'city' })
  city: string;

  @Column({ name: 'state' })
  state: string;

  @Column({ name: 'measure_type' })
  measureType: string;

  @Column({ name: 'zone_front' })
  zoneFront: number;

  @Column({ name: 'zone_bottom' })
  zoneBottom: number;

  @Column({ name: 'zone_left' })
  zoneLeft: number;

  @Column({ name: 'zone_right' })
  zoneRight: number;

  @Column({ name: 'number_dorms' })
  numberDorms: number;

  @Column({ name: 'number_suites' })
  numberSuites: number;

  @Column({ name: 'number_bathrooms' })
  numberBathrooms: number;

  @Column({ name: 'number_room' })
  numberRoom: number;

  @Column({ name: 'cars_capacity' })
  carsCapacity: number;

  @Column({ name: 'is_furnished' })
  isFurnished: boolean;

  @Column({ name: 'status' })
  status: string;
}

export default Realty;
