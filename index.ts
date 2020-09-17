'use strict'

import * as dotenv from 'dotenv'
import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'
import * as helmet from 'helmet'

dotenv.config()

// const router = require('./api/routes/index')

const app = express()

app.use(helmet())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

// app.use(router)
const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Listeting at http://localhost:${port}`)
})

