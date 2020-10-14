'use strict'

import { Router } from 'express'
import { create } from '../controllers/jobs.controller'

const routes = Router({ mergeParams: true })

routes.post('/', create)

export default routes