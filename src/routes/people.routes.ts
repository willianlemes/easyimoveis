import {Router} from 'express';

const peopleRoute = Router();

peopleRoute.get('/',(request,response)=>{
    response.json({message:'People Route'});
});

export default peopleRoute;