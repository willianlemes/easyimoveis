import { Finality } from '../../../enums';

export default interface Request {
  userId: string;
  ownerId: string;
  finality?: Finality;
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
}
