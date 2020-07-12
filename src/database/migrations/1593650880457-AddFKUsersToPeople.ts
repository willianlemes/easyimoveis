import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm';

export default class AddFKUsersToPeople1593650880457
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'people',
      new TableColumn({
        name: 'user_id',
        type: 'uuid'
      })
    );

    await queryRunner.createForeignKey(
      'people',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        name: 'fk_people_user'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('people', 'fk_people_user');
    await queryRunner.dropColumn('people', 'user_id');
  }
}
