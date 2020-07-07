import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AlterTableUserFieldGenre1594085052820
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      "UPDATE users SET genre = 'M' WHERE genre = 'Masculino';"
    );
    queryRunner.query("UPDATE users SET genre = 'F' WHERE genre = 'Feminino';");
    queryRunner.query("UPDATE users SET genre = 'O' WHERE genre = 'Outro';");

    queryRunner.query('ALTER TABLE users ALTER COLUMN genre TYPE varchar(1);');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('ALTER TABLE users ALTER COLUMN genre TYPE varchar(10);');
    queryRunner.query(
      "UPDATE users SET genre = 'Masculino' WHERE genre = 'M';"
    );
    queryRunner.query("UPDATE users SET genre = 'Feminino' WHERE genre = 'F';");
    queryRunner.query("UPDATE users SET genre = 'Outro' WHERE genre = 'O';");
  }
}
