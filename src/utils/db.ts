'use strict'

import { config as configDotenv } from 'dotenv'
import mongoose from 'mongoose'

configDotenv()

const { MONGO_URI } = process.env

  // @ts-ignore
export function connect(uri: string = MONGO_URI, options = {}) {
  return mongoose.connect(
    uri,
    {...options, useNewUrlParser: true }
  )
}