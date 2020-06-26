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
}
export default Person;
