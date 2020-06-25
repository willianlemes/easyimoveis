import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('people')
export class People {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: String;

    @Column('varchar')
    nickname: String;

    @Column('varchar')
    profile: String;
    
    @Column()
    type: string;

}