import { Router } from 'express';
import CreateBusinessService from '../services/business/CreateBusinessService';
import ListBusinessService from '../services/business/ListBusinessService';

const businessRouter = Router();

businessRouter.post('/', async (request, response) => {
  const {
    userId,
    realtyId,
    customerId,
    title,
    stage,
    expectedClosure,
    probability,
    annotations
  } = request.body;

  const createBusiness = new CreateBusinessService();

  const business = await createBusiness.execute({
    userId,
    realtyId,
    customerId,
    title,
    stage,
    expectedClosure,
    probability,
    annotations
  });

  return response.json({ business });
});

businessRouter.get('/', async (request, response) => {
  const listBusiness = new ListBusinessService();

  const business = await listBusiness.resolve();

  return response.json(business);
});

export default businessRouter;
