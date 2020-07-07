import { define } from 'typeorm-seeding';
import '../../extensions/faker';
import Faker from 'faker';

import User from '../../models/User';

import { Genre, Status } from '../../enums';

define(User, (faker: typeof Faker) => {
  // eslint-disable-next-line no-param-reassign
  faker.locale = 'pt_BR';

  const gender = faker.random.number(1);

  const user = new User();
  user.firstName = faker.name.firstName(gender);
  user.lastName = faker.name.lastName(gender);
  user.email = faker.custom.uniqueEmail(user.firstName, user.lastName);
  user.password = faker.random.word();
  user.genre = faker.random.arrayElement<Genre>([
    Genre.MALE,
    Genre.FEMALE,
    Genre.OTHER
  ]);
  user.dateBirth = faker.date.past(80, '2000');
  user.status = faker.random.arrayElement<Status>([
    Status.ACTIVE,
    Status.INACTIVE
  ]);

  return user;
});
