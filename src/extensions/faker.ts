import Faker from 'faker';

const emails = new Set<string>();

Faker.custom = {
  uniqueEmail(firstName: string, lastName: string): string {
    const email = Faker.internet.email(firstName, lastName).toLowerCase();

    if (!emails.has(email)) {
      emails.add(email);

      return email;
    }

    return this.uniqueEmail(firstName, lastName);
  }
};
