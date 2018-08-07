import {Response, Request, Router} from 'express'
import * as properties from './properties';

const router: Router = Router();


router.get('/properties', properties.all)
router.get('/property/:id', properties.one)

export const Api: Router = router;