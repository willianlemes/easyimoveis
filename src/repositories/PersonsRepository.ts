import Person from '../models/Person';

class PersonsRepository {
  private persons: Person[];

  constructor() {
    this.persons = [];
  }

  findAll(): Person[] {
    return this.persons;
  }
}

export default PersonsRepository;
