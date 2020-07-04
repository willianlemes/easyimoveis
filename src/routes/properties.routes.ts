import { Router } from 'express';

import FindPropertiesByUserService from '../services/properties/FindPropertiesByUserService';
import CreateRealtyService from '../services/properties/CreateRealtyService';

const propertiesRouter = Router();

propertiesRouter.get('/user/:user_id', async (request, response) => {
  const { user_id } = request.params;

  const findPropertiesByUser = new FindPropertiesByUserService();

  const properties = await findPropertiesByUser.execute(user_id);

  response.json({ properties });
});

propertiesRouter.post('/', async (request, response) => {
  const createRealty = new CreateRealtyService();

  const realty = await createRealty.execute(request.body);

  return response.json({ realty });
});

export default propertiesRouter;
