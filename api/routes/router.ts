'use strict'

import { Router, Request, Response } from 'express'
import companiesRoutes from './companies.routes'
import authRoutes from './auth.routes'

const router = Router()

router.use('/', authRoutes)
router.use('/companies', companiesRoutes)

router.use((req: Request, res: Response) => {
  res.sendStatus(404)
})

export default router