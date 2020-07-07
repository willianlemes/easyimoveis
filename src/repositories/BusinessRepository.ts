import { EntityRepository, Repository } from 'typeorm';
import Business from '../models/Business';

@EntityRepository(Business)
class BusinessRepository extends Repository<Business> {}

export default BusinessRepository;
