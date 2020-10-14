'use strict'

import {Request, Response, NextFunction } from 'express'
import createError from 'http-errors'

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new createError.NotFound(`Not Found - ${req.originalUrl}`)
  next(error)
}

// eslint-disable-next-line no-unused-vars
const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  error?.statusCode ? res.status(error.statusCode) : res.status(500)

  res.json({
    message: error.message,
    fields: error?.fields,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack
  })
}

export {
  notFound,
  errorHandler
}