import { getRepository } from 'typeorm';
import Person from '../../models/Person';

interface Request {
  users_id: string;
  name: string;
  nickname: string;
  profile: string;
  type: string;
  genre?: string;
  datebirth?: Date;
  rg_ie?: string;
  cpf_cnpj?: string;
  occupation?: string;
  email?: string;
  phone?: string;
  cell_phone?: string;
  address?: string;
  address_number?: string;
  neighborhood?: string;
  cep?: string;
  state?: string;
  city?: string;
  photo?: string;
  status?: string;
}

class CreatePeopleService {
  public async execute(request: Request): Promise<Person | null> {
    const peopleRepository = getRepository(Person);

    const people = peopleRepository.create({ ...request });

    return peopleRepository.save(people);
  }
}

export default CreatePeopleService;
