import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm';

export default class AddFKPropertiesToBusiness1593376557780
  implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'business',
      new TableColumn({
        name: 'realty_id',
        type: 'uuid'
      })
    );

    await queryRunner.createForeignKey(
      'business',
      new TableForeignKey({
        columnNames: ['realty_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'properties',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        name: 'fk_business_properties'
      })
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('business', 'fk_business_properties');

    await queryRunner.dropColumn('business', 'realty_id');
  }
}
