import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('peoples')
class People {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({name:'name'})
    name: String;

    @Column({name:'nickname'})
    nickname: String;

    @Column({name:'profile'})
    profile: String;
    
    @Column({name:'type'})
    type: string;

}
export default People;