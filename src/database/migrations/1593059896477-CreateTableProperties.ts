import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey
} from 'typeorm';

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
            isPrimary: true,
            default: 'uuid_generate_v4()'
          },
          {
            name: 'finality',
            type: 'varchar',
            length: '100',
            isNullable: true
          },
          {
            name: 'kind',
            type: 'varchar',
            length: '100',
            isNullable: true
          },
          {
            name: 'price',
            type: 'numeric',
            precision: 15,
            scale: 2,
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
            name: 'complement',
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
            name: 'city',
            type: 'varchar',
            length: '255',
            isNullable: true
          },
          {
            name: 'state',
            type: 'varchar',
            length: '2',
            isNullable: true
          },
          {
            name: 'measure_type',
            type: 'varchar',
            length: '30',
            isNullable: true
          },
          {
            name: 'zone_front',
            type: 'numeric',
            precision: 10,
            scale: 3,
            isNullable: true
          },
          {
            name: 'zone_bottom',
            type: 'numeric',
            precision: 10,
            scale: 3,
            isNullable: true
          },
          {
            name: 'zone_left',
            type: 'numeric',
            precision: 10,
            scale: 3,
            isNullable: true
          },
          {
            name: 'zone_right',
            type: 'numeric',
            precision: 10,
            scale: 3,
            isNullable: true
          },
          {
            name: 'number_dorms',
            type: 'int',
            isNullable: true
          },
          {
            name: 'number_suites',
            type: 'int',
            isNullable: true
          },
          {
            name: 'number_bathrooms',
            type: 'int',
            isNullable: true
          },
          {
            name: 'number_room',
            type: 'int',
            isNullable: true
          },
          {
            name: 'cars_capacity',
            type: 'int',
            isNullable: true
          },
          {
            name: 'is_furnished',
            type: 'boolean'
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

    await queryRunner.addColumn(
      'properties',
      new TableColumn({
        name: 'user_id',
        type: 'uuid'
      })
    );

    await queryRunner.createForeignKey(
      'properties',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        name: 'fk_properties_user'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('properties', 'fk_properties_user');
    await queryRunner.dropTable('properties', true);
  }
}
