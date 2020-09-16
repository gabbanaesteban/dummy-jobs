'use stric'
const express = require('express')
const companies = require('./companies.routes')

const router = express.Router()

router.use('/companies', companies)

router.get('/', (req, res) => res.send('Dummy Jobs API v1'))

router.get('/health', (req, res) => {
    const healthcheck = {
        uptime: process.uptime(),
        status: 'Ok',
        timestamp: Date.now()
    }

    res.send(JSON.stringify(healthcheck))
})

module.exports = router;