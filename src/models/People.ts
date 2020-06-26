import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('peoples')
class People {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'nickname' })
  nickname: string;

  @Column({ name: 'profile' })
  profile: string;

  @Column({ name: 'type' })
  type: string;
}
export default People;
