'use strict'

import { Router } from 'express'
import { signup, signin } from '../controllers/auth.controller'

const router = Router({ mergeParams: true })

router.post('/signup', signup)
router.post('/signin', signin)

export default router