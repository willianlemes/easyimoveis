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
            isPrimary: true,
            default: 'uuid_generate_v4()'
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255'
          },
          {
            name: 'nickname',
            type: 'varchar',
            length: '255'
          },
          {
            name: 'profile',
            type: 'varchar',
            length: '10'
          },
          {
            name: 'type',
            type: 'varchar',
            length: '1'
          },
          {
            name: 'genre',
            type: 'varchar',
            length: '50',
            isNullable: true
          },
          {
            name: 'date_birth',
            type: 'date',
            isNullable: true
          },
          {
            name: 'rg_ie',
            type: 'varchar',
            length: '20',
            isNullable: true
          },
          {
            name: 'cpf_cnpj',
            type: 'varchar',
            length: '20',
            isNullable: true
          },
          {
            name: 'occupation',
            type: 'varchar',
            length: '100',
            isNullable: true
          },
          {
            name: 'email',
            type: 'varchar',
            length: '100',
            isNullable: true
          },
          {
            name: 'phone',
            type: 'varchar',
            length: '20',
            isNullable: true
          },
          {
            name: 'cell_phone',
            type: 'varchar',
            length: '20',
            isNullable: true
          },
          {
            name: 'address',
            type: 'varchar',
            length: '255',
            isNullable: true
          },
          {
            name: 'address_number',
            type: 'varchar',
            length: '10',
            isNullable: true
          },
          {
            name: 'neighborhood',
            type: 'varchar',
            length: '255',
            isNullable: true
          },
          {
            name: 'cep',
            type: 'varchar',
            length: '9',
            isNullable: true
          },
          {
            name: 'state',
            type: 'varchar',
            length: '2',
            isNullable: true
          },
          {
            name: 'city',
            type: 'varchar',
            length: '255',
            isNullable: true
          },
          {
            name: 'photo',
            type: 'varchar',
            length: '255',
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('people', true);
  }
}
