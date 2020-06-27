import Realty from '../models/Realty';

class PropertiesRepository {
  private properties: Realty[];

  constructor() {
    this.properties = [];
  }

  findAll(): Realty[] {
    return this.properties;
  }
}

export default PropertiesRepository;
