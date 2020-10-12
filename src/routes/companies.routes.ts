'use strict'

import { Router } from 'express'
import { create } from '../controllers/companies.controller'

const router = Router({ mergeParams: true });

router.post('/', create)

export default router