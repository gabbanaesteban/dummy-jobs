'use strict'

import { config as configDotenv } from 'dotenv'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

import { connect } from './utils/db'

import router from './routes/router'

configDotenv()

const app = express()

app.use(helmet())
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(router)

const port = process.env.PORT || 3001

app.listen(port, async () => {
    await connect()
    // eslint-disable-next-line no-undef
    console.log(`Listening at http://localhost:${port}`)
})

