import {MigrationInterface, QueryRunner , TableColumn, TableForeignKey} from "typeorm";

export default class AddColumnsPeople1593482094087 
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('people', 
        new TableColumn({
            name:'users_id',
            type:'uuid'
        }));

        await queryRunner.createForeignKey('people',new TableForeignKey({
            columnNames: ['users_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            name: 'fk_people_users'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('people', 'fk_people_users');
        await queryRunner.dropColumn('people', 'users_id');
    }
}
