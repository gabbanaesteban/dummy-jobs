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

router.use((error: { status?: number, stack: string, message: string }, req: Request, res: Response) => {
  if (error.status) {
    res.status(error.status);
  } else {
    res.status(500);
  }
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
  });
});

export default router