'use strict'

import createError from "http-errors"
import { Company } from "../models/company.model"
import { Job } from "../models/job.model"

const create = async (jobParams: any, user: any) => {
  const company = await Company.findOne({ owner: user }).lean().exec()

  if (!company) {
    throw new createError.BadRequest('The user needs to have a company before creating jobs')
  }

  const jobData = {
    ...jobParams,
    company
  }

  const { _id: jobId } = await Job.create(jobData)
  const job = await Job.findById(jobId).lean().exec()

  return job
}

export {
  create
}