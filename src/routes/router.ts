'use strict'

import { Router } from 'express'
import companiesRoutes from './companies.routes'
import jobsRoutes from './jobs.routes'
import authRoutes from './auth.routes'
import { protect } from '../middlewares/auth.middleware'
import { notFound, errorHandler } from '../middlewares/error.middleware'

const router = Router()

router.use('/', authRoutes)

router.use(protect)
router.use('/companies', companiesRoutes)
router.use('/jobs', jobsRoutes)

router.use(notFound)
router.use(errorHandler)

export default router