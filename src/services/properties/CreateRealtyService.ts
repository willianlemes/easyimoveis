import { getRepository } from 'typeorm';

import Realty from '../../models/Realty';

interface Request {
  userId: string;
  ownerId: string;
  finality?: string;
  kind?: string;
  price?: number;
  address?: string;
  addressNumber?: string;
  neighborhood?: string;
  complement?: string;
  cep?: string;
  city?: string;
  state?: string;
  measureType?: string;
  zoneFront?: number;
  zoneBottom?: number;
  zoneLeft?: number;
  zoneRight?: number;
  numberDorms?: number;
  numberSuites?: number;
  numberBathrooms?: number;
  numberRoom?: number;
  carsCapacity?: number;
  isFurnished: boolean;
  status: string;
}

class CreateRealtyService {
  async execute(request: Request): Promise<Realty | null> {
    const realtyRepository = getRepository(Realty);

    const realtyEntity = realtyRepository.create({ ...request });

    return realtyRepository.save(realtyEntity);
  }
}

export default CreateRealtyService;
