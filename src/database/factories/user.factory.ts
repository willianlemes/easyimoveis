import { define } from 'typeorm-seeding';
import Faker from 'faker';
import User from '../../models/User';

define(User, (faker: typeof Faker) => {
  // eslint-disable-next-line no-param-reassign
  faker.locale = 'pt_BR';
  const gender = faker.random.number(1);
  const user = new User();
  user.firstName = faker.name.firstName(gender);
  user.lastName = faker.name.lastName(gender);
  user.email = faker.internet
    .email(user.firstName, user.lastName)
    .toLowerCase();
  user.password = faker.random.word();
  user.genre = faker.random.arrayElement<string>([
    'Masculino',
    'Feminino',
    'Outro'
  ]);
  user.dateBirth = faker.date.past(80, '2000');
  user.status = faker.random.arrayElement<string>(['A', 'I']);
  return user;
});
