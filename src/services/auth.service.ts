'use strict'

import createError from 'http-errors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { config as configDotenv } from 'dotenv'

import { User } from '../models/user.model'

configDotenv()

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXP = process.env.JWT_EXP

const signup = async (params: any): Promise<{ token: string }> => {
  const { name, email, password } = params

  const passwordHash = await hashPassword(password)

  const user = await User.create({
    password: passwordHash,
    name,
    email
  })

  const token = generateToken(user)

  return { token }
}

const signin = async (params: any): Promise<{ token: string }> => {
  const { email, password } = params

  const user = await User.findOne({ email })
    .select('email password')
    .lean()
    .exec()

  if (!user) {
    throw new createError.NotFound('User not found')
  }

  //@ts-ignore
  const match = await checkPassword(password, user.password)

  if (!match) {
    throw new createError.Unauthorized('Password incorrect')
  }

  const token = generateToken(user)

  return { token }
}

const generateToken = (user: any): string => {
  //@ts-ignore
  return jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: JWT_EXP
  })
}

const hashPassword = (password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 8, (err, hash) => {
      if (err) {
        return reject(err)
      }
      resolve(hash)
    })
  })
}

const checkPassword = (password: string, passwordHash: string): Promise<Boolean> => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, match) => {
      if (err) {
        return reject(err)
      }

      resolve(match)
    })
  })
}

export {
  signup,
  signin,
}
