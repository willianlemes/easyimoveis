import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import User from '../../models/User';

export default class CreateUsersSeeder implements Seeder {
  public async run(factory: Factory, _: Connection): Promise<void> {
    await factory(User)().createMany(500);
  }
}
