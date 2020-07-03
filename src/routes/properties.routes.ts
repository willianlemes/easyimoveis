import { Router } from 'express';

import FindPropertiesByUserService from '../services/properties/FindPropertiesByUserService';

const propertiesRouter = Router();

propertiesRouter.get('/user/:user_id', async (request, response) => {
  const { user_id } = request.params;

  const findPropertiesByUser = new FindPropertiesByUserService();

  const properties = await findPropertiesByUser.execute(user_id);

  response.json({ properties });
});

export default propertiesRouter;
