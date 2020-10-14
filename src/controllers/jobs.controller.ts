'use strict'

import { Response } from "express"
import asyncHandler from "express-async-handler"
import { createSchema } from "../schemas/jobs.schemas"
import { validateParams } from "../utils/helpers"
import * as jobService from '../services/jobs.service'

const create = asyncHandler(async (req: any, res: Response) => {
  const params = req.body
  const user = req.user
  const jobParams = await validateParams(params, createSchema)
  const response = await jobService.create(jobParams, user)
  res.status(201).json(response)
})

export {
  create
}