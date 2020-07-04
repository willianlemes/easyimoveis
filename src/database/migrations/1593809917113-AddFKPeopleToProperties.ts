import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm';

export default class AddFKPeopleToProperties1593809917113
  implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'properties',
      new TableColumn({
        name: 'owner_id',
        type: 'uuid'
      })
    );

    await queryRunner.createForeignKey(
      'properties',
      new TableForeignKey({
        columnNames: ['owner_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'people',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        name: 'fk_properties_people'
      })
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('properties', 'fk_properties_people');

    await queryRunner.dropColumn('properties', 'owner_id');
  }
}
