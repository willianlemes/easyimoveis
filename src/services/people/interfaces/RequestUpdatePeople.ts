export default interface RequestUpdatePeople {
  id: string;
  userId: string;
  name: string;
  nickname: string;
  profile: string;
  type: string;
  genre?: string;
  datebirth?: Date;
  rgIe?: string;
  cpfCnpj?: string;
  occupation?: string;
  email?: string;
  phone?: string;
  cellPhone?: string;
  address?: string;
  addressNumber?: string;
  neighborhood?: string;
  cep?: string;
  state?: string;
  city?: string;
  photo?: string;
  status?: string;
}
