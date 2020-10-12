'use strict'

import mongoose from "mongoose"

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Beginner','Junior','Mid-level','Senior','Lead','Manager']
  },
  description: {
    type: String,
    required: true,
    min: 160
  },
  application:{
    how_to_apply: {
      type: String,
      required: true,
      min: 20
    },
    target: {
      type: String,
      required: true
    },
    target_type: {
      type: String,
      required: true,
      enum: ['email', 'ATS']
    }
  },
  compensation: {
    currency: {
      type: String,
      required: true,
      enum: ['USD']
    },
    min_salary: Number,
    max_salary: Number
  },
  location: {
    can_be_remote: {
      type: Boolean,
      default: false
    },
    remote_only: {
      type: Boolean,
      default: false
    },
    address: {
      type: String,
      required: true
    }
  },
  published_at: {
    type: Date,
    default: Date.now
  },
  company: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Company'
  }
},
  { timestamps: true }
)

export const Job = mongoose.model('Job', jobSchema)