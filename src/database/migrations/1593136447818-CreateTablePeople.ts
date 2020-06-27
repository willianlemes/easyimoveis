import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateTablePeople1593136447818
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'people',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'nickname',
            type: 'varchar'
          },
          {
            name: 'profile',
            type: 'varchar'
          },
          {
            name: 'type',
            type: 'varchar'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('people', true);
  }
}
