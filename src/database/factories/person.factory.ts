import { define } from 'typeorm-seeding';
import '../../extensions/faker';
import Faker from 'faker';

import Person from '../../models/Person';

define(Person, (faker: typeof Faker) => {
  // eslint-disable-next-line no-param-reassign
  faker.locale = 'pt_BR';
  const person = new Person();
  person.name = faker.name.findName();
  person.nickname = faker.name.findName();

  return person;
});
