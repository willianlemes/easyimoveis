import { define } from 'typeorm-seeding';
import '../../extensions/faker';
import Faker from 'faker';
import { Genre, Status, Type, Profile } from '../../enums';

import Person from '../../models/Person';

define(Person, (faker: typeof Faker) => {
  // eslint-disable-next-line no-param-reassign
  faker.locale = 'pt_BR';
  const person = new Person();
  person.name = faker.name.findName();
  person.nickname = faker.name.findName();
  person.type = faker.random.arrayElement<Type>([
    Type.JURIDICAL,
    Type.PHYSISCS
  ]);
  person.profile = faker.random.arrayElement<Profile>([
    Profile.BROKER,
    Profile.CUSTOMER,
    Profile.INTERESTED,
    Profile.OTHER
  ]);
  person.status = faker.random.arrayElement<Status>([
    Status.ACTIVE,
    Status.INACTIVE
  ]);
  person.genre = faker.random.arrayElement<Genre>([
    Genre.MALE,
    Genre.FEMALE,
    Genre.OTHER
  ]);

  return person;
});
