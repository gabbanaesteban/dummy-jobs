'use stric'

import * as express from 'express'
import { router as companiesRoutes } from './companies.routes'

const router = express.Router()

router.use('/companies', companiesRoutes)

router.get('/', (req, res) => res.send('Dummy Jobs API v1'))

router.get('/health', (req, res) => {
    const healthcheck = {
        uptime: process.uptime(),
        status: 'Ok',
        timestamp: Date.now()
    }

    res.send(JSON.stringify(healthcheck))
})

export default router