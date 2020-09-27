'use strict'

import { Router } from 'express'
import { signup } from '../controllers/auth.controller'

const router = Router({ mergeParams: true })

router.post('/signup', signup)

export default router