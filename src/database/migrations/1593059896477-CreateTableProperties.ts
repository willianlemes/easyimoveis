import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export default class CreateTableProperties1593059896477
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'properties',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isPrimary: true
          },
          {
            name: 'finality',
            type: 'varchar'
          },
          {
            name: 'kind',
            type: 'varchar'
          },
          {
            name: 'price',
            type: 'numeric',
            precision: 15,
            scale: 2
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('properties');
  }
}
