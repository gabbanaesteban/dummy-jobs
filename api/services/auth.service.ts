'use strict'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { User } from '../models/user.model'

const JWT_SECRET = process.env.JWT_SECRET || ''
const JWT_EXP = process.env.JWT_EXP || ''

//TODO: create IUser
export function generateToken (user: any) {
  return jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: JWT_EXP
  })
}

export function verifyToken (token: string) {
  new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, payload) => {
      if(err) {
        reject(err)
      }
      resolve(payload)
    })
  })
}

function hashPassword(password: string) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 8, (err, hash) => {
      if(err) {
        reject(err)
      }

      resolve(hash)
    })
  })
}

export async function signup(params: {name: string, email: string, password: string}) {
  const { name, email, password } = params
  const userData = {
    name,
    email,
    password: await hashPassword(password)
  }

  const user = await User.create(userData)
  const token = generateToken(user)

  return { token }
}