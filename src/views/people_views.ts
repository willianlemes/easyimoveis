/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Person from '../models/Person';
import Type from '../enums/person/Type';
import Profile from '../enums/person/Profile';

export default {
  render(person: Person) {
    let typeName = '';
    let profileName = '';

    switch (person.type) {
      case Type.PHYSISCS:
        typeName = 'Física';
        break;
      case Type.JURIDICAL:
        typeName = 'Jurídica';
        break;
      default:
        typeName = '';
        break;
    }

    switch (person.profile) {
      case Profile.CUSTOMER:
        profileName = 'Cliente';
        break;
      case Profile.BROKER:
        profileName = 'Corretor';
        break;
      case Profile.INTERESTED:
        profileName = 'Interessado';
        break;
      case Profile.OTHER:
        profileName = 'Outro';
        break;
      default:
        profileName = '';
        break;
    }

    return {
      id: person.id,
      name: person.name,
      nickname: person.nickname,
      type: typeName,
      profile: profileName
    };
  },

  renderMany(people: Person[]) {
    return people.map(person => this.render(person));
  }
};
