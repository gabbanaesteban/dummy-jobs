'use strict'

import { Company } from '../models/company.model'
import { User } from '../models/user.model'

//TODO: create interfaces
const create = async (companyParams: any, user: any) => {
  const { _id: userId } = user
  
  const companyData = {
    ...companyParams,
    owner: userId
  }
  
  const company = await Company.create(companyData)

  await User.findByIdAndUpdate(userId, { company })
  
  return company
}


export {
  create
}