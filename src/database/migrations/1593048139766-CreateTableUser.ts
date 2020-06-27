import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateTableUser1593048139766
  implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isPrimary: true
          },
          {
            name: 'first_name',
            type: 'varchar'
          }
        ]
      })
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users', true);
  }
}
