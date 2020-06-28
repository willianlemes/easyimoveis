import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm';

export default class AddFKPeopleToBusiness1593376972874
  implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'business',
      new TableColumn({
        name: 'customer_id',
        type: 'uuid'
      })
    );

    await queryRunner.createForeignKey(
      'business',
      new TableForeignKey({
        columnNames: ['customer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'people',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        name: 'fk_business_people'
      })
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('business', 'fk_business_people');

    await queryRunner.dropColumn('business', 'customer_id');
  }
}
