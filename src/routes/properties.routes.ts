import { Router } from 'express';

import CreateRealtyService from '../services/properties/CreateRealtyService';
import FindPropertiesByUserService from '../services/properties/FindPropertiesByUserService';
import FindPropertiesByOwnerService from '../services/properties/FindPropertiesByOwnerService';
import UpdateRealtyService from '../services/properties/UpdateRealtyService';

const propertiesRouter = Router();

propertiesRouter.post('/', async (request, response) => {
  const createRealty = new CreateRealtyService();

  const realty = await createRealty.execute(request.body);

  return response.json({ realty });
});

propertiesRouter.put('/:id', async (request, response) => {
  const updateRealty = new UpdateRealtyService();

  const { params, body } = request;

  const realty = await updateRealty.execute(params.id, body);

  response.json({ realty });
});

propertiesRouter.get('/user/:user_id', async (request, response) => {
  const { user_id } = request.params;

  const findPropertiesByUser = new FindPropertiesByUserService();

  const properties = await findPropertiesByUser.execute(user_id);

  response.json({ properties });
});

propertiesRouter.get('/owner/:owner_id', async (request, response) => {
  const { owner_id } = request.params;

  const findPropertiesByOwner = new FindPropertiesByOwnerService();

  const properties = await findPropertiesByOwner.execute(owner_id);

  response.json({ properties });
});

export default propertiesRouter;
