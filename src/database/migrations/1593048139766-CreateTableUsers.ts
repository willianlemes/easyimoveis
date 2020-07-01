import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateTableUsers1593048139766
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
            isPrimary: true,
            default: 'uuid_generate_v4()'
          },
          {
            name: 'first_name',
            type: 'varchar',
            length: '255'
          },
          {
            name: 'last_name',
            type: 'varchar',
            length: '255'
          },
          {
            name: 'email',
            type: 'varchar',
            length: '255'
          },
          {
            name: 'password',
            type: 'varchar',
            length: '60'
          },
          {
            name: 'forget',
            type: 'varchar',
            length: '255',
            isNullable: true
          },
          {
            name: 'genre',
            type: 'varchar',
            length: '10'
          },
          {
            name: 'date_birth',
            type: 'date',
            isNullable: true
          },
          {
            name: 'photo',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'status',
            type: 'varchar',
            length: '1'
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
    await queryRunner.dropTable('users', true);
  }
}
