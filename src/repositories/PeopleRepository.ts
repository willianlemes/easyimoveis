import Person from '../models/Person';

class PeopleRepository {
    private people: Person[];
  
    constructor() {
      this.people = [];
    }
  
    findAll(): Person[] {
      return this.people;
    }
  }
  
  export default PeopleRepository;