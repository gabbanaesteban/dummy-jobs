'use strict'

import { Router } from 'express'
import { index } from '../controllers/companies.controller'

const router = Router({ mergeParams: true });

router.get('/', index)

export default router