import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('properties')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'finality' })
  finality: string;

  @Column({ name: 'kind' })
  kind: string;

  @Column({ name: 'price' })
  price: string;
}

export default User;
