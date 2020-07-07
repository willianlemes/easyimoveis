import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AlterTableUserFieldForget1594086105363
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('ALTER TABLE users ALTER COLUMN forget TYPE varchar;');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      'ALTER TABLE users ALTER COLUMN forget TYPE varchar(255);'
    );
  }
}
