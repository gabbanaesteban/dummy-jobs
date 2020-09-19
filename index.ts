'use strict'

import * as dotenv from 'dotenv'
import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'
import * as helmet from 'helmet'

import router from './api/routes/router'

dotenv.config()

const app = express()

app.use(helmet())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.use(router)

const port = process.env.PORT || 3001

app.listen(port, () => {
    // eslint-disable-next-line no-undef
    console.log(`Listeting at http://localhost:${port}`)
})

