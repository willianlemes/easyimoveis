import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateTableBusiness1593275441645
  implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'business',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()'
          },
          {
            name: 'title',
            type: 'varchar'
          },
          {
            name: 'stage',
            type: 'varchar',
            length: '100'
          },
          {
            name: 'expected_closure',
            type: 'date'
          },
          {
            name: 'probability',
            type: 'int'
          },
          {
            name: 'annotations',
            type: 'text',
            isNullable: true
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()'
          }
        ]
      })
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('business', true);
  }
}
