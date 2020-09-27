'use strict'

import { config as configDotenv } from 'dotenv'
import mongoose from 'mongoose'

configDotenv()

const {
  MONGO_HOST,
  MONGO_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_DATABASE_NAME
} = process.env

export function _getDefaultUri(): string {
  const host = MONGO_HOST || 'localhost'
  const port = MONGO_PORT || '27017'
  const user = MONGO_USER || ''
  const password = MONGO_PASSWORD || ''

  if (!user || !password) {
    return `mongodb://${host}:${port}/${MONGO_DATABASE_NAME}`
  }

  return `mongodb://${user}:${password}@${host}:${port}/${MONGO_DATABASE_NAME}?authSource=admin`
}

export function connect(uri = _getDefaultUri(), options = {}) {
  // eslint-disable-next-line no-undef
  return mongoose.connect(
    uri,
    {...options, useNewUrlParser: true }
  )
}