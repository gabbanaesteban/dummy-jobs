'use strict'
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')

const router = require('./api/routes/index')

const app = express()

app.use(helmet())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.use(router)
const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Listeting at http://localhost:${port}`)
})

