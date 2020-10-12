'use strict'

import mongoose from 'mongoose'

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    default: null
  },
  website: {
    type: String,
    required: false,
    trim: true,
    default: null
  },
  description: {
    type: String,
    required: false,
    trim: true,
    default: null
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    unique: true
  }
},
  { timestamps: true }
)

export const Company = mongoose.model('Company', companySchema)