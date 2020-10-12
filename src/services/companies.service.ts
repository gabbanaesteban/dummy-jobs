'use strict'

import { Company } from '../models/company.model'
import { User } from '../models/user.model'

//TODO: create interfaces
const create = async (companyParams: any, user: any) => {
  const companyData = {
    ...companyParams,
    owner: user._id
  }
  
  const company = await Company.create(companyData)
  
  await User.findByIdAndUpdate(user._id, { company })
  
  return company
}


export {
  create
}