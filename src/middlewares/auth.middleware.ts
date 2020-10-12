'use strict'

import asyncHandler from 'express-async-handler'
import { config as configDotenv } from 'dotenv'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'

import { User } from '../models/user.model'

configDotenv()

const JWT_SECRET = process.env.JWT_SECRET

const protect = asyncHandler(async (req: any, res: any, next: any): Promise<void> => {
  const token = getTokenFromHeader(req.headers.authorization)

  if (!token) {
    throw new createError.Unauthorized('Invalid token')
  }

  const { _id: userId } = await verifyToken(token)

  const user = await User.findById(userId)
    .select('-password')
    .lean()
    .exec()

  if (!user) {
    throw new createError.NotFound('User not found')
  }

  req.user = user
  next()
})

const getTokenFromHeader = (header?: string): string | undefined => {
  if (!header || !header.startsWith('Bearer ')) {
    return undefined
  }

  const [, token] = header.split('Bearer ', 2)

  return token
}

const verifyToken = async (token: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    //@ts-ignore
    jwt.verify(token, JWT_SECRET, (err, payload) => {
      if (err) {
        return reject(err)
      }
      resolve(payload)
    })
  })
}

export {
  protect
}