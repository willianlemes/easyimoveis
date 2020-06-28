import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey
} from 'typeorm';

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
            type: 'timestamp with time zone'
          },
          {
            name: 'probability',
            type: 'int'
          },
          {
            name: 'annotations',
            type: 'text'
          }
        ]
      })
    );

    await queryRunner.addColumn(
      'business',
      new TableColumn({
        name: 'users_id',
        type: 'uuid'
      })
    );

    await queryRunner.createForeignKey(
      'business',
      new TableForeignKey({
        columnNames: ['users_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        name: 'fk_business_users'
      })
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('business', 'fk_business_users');
    await queryRunner.dropTable('business', true);
  }
}
