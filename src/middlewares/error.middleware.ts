'use strict'

import {Request, Response, NextFunction } from 'express'
import createError from 'http-errors'

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new createError.NotFound(`Not Found - ${req.originalUrl}`)
  next(error)
}

// eslint-disable-next-line no-unused-vars
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if(err?.statusCode) {
    res.status(err.statusCode)
  }else if(res.statusCode === 200) {
    res.status(500)
  }

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
}

export {
  notFound,
  errorHandler
}