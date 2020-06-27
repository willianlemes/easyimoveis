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
            isPrimary: true
          },
          {
            name: 'finality',
            type: 'varchar',
            length: '100'
          },
          {
            name: 'kind',
            type: 'varchar',
            length: '100'
          },
          {
            name: 'price',
            type: 'numeric',
            precision: 15,
            scale: 2
          },
          {
            name: 'address',
            type: 'varchar',
            length: '255'
          },
          {
            name: 'address_number',
            type: 'varchar',
            length: '10'
          },
          {
            name: 'neighborhood',
            type: 'varchar',
            length: '255'
          },
          {
            name: 'complement',
            type: 'varchar',
            length: '255'
          },
          {
            name: 'cep',
            type: 'varchar',
            length: '9'
          },
          {
            name: 'city',
            type: 'varchar',
            length: '255'
          },
          {
            name: 'state',
            type: 'varchar',
            length: '2'
          },
          {
            name: 'measure_type',
            type: 'varchar',
            length: '30'
          },
          {
            name: 'zone_front',
            type: 'numeric',
            precision: 10,
            scale: 3
          },
          {
            name: 'zone_bottom',
            type: 'numeric',
            precision: 10,
            scale: 3
          },
          {
            name: 'zone_left',
            type: 'numeric',
            precision: 10,
            scale: 3
          },
          {
            name: 'zone_right',
            type: 'numeric',
            precision: 10,
            scale: 3
          },
          {
            name: 'number_dorms',
            type: 'int'
          },
          {
            name: 'number_suites',
            type: 'int'
          },
          {
            name: 'number_bathrooms',
            type: 'int'
          },
          {
            name: 'number_room',
            type: 'int'
          },
          {
            name: 'cars_capacity',
            type: 'int'
          },
          {
            name: 'is_furnished',
            type: 'boolean'
          },
          {
            name: 'status',
            type: 'varchar',
            length: '1'
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
        onDelete: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('properties');
  }
}
