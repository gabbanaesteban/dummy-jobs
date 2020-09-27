'use strict'

import { Request, Response } from 'express'

import { signupSchema } from '../helpers/auth.schemas'
import * as authService from '../services/auth.service'

export async function signup(req: Request, res: Response) {
  const params = req.body
  await signupSchema.validate(params, { abortEarly: false })
  const response = await authService.signup(params)
  res.status(201).send(response)
}