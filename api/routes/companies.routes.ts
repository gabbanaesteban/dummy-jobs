import * as express from 'express'
import { index } from '../controllers/companies.controller'

const router = express.Router({ mergeParams: true });

router.get('/', index)

export { router }