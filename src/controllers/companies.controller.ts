'use strict'

import { Response } from 'express'
import asyncHandler from 'express-async-handler'
import { createSchema } from '../schemas/company.schemas'
import * as companiesService from '../services/companies.service'
import { validateParams } from '../utils/helpers'

const create = asyncHandler( async (req: any, res: Response) => {
  const params = req.body
  const compayParams = await validateParams(params, createSchema)
  const user = req.user
  const response = await companiesService.create(compayParams, user)
  res.status(201).send(response)
})


export {
  create
}