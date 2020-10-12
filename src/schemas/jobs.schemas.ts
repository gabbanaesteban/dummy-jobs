'use strict'

import * as yup from 'yup'

const createSchema = yup.object().shape({
  title: yup.string().required(),
  type: yup.string().oneOf(['Full-time', 'Part-time','Freelance', 'Intership', 'Temporary']).required(),
  level: yup.string().oneOf(['Beginner','Junior','Mid-level','Senior','Lead','Manager']),
  description: yup.string().min(160).required(),
  application: yup.object().shape({
    how_to_apply: yup.string().min(20).required(),
    target: yup.string().required(),
    target_type: yup.string().oneOf(['email','ATS']).required()
  }).required(),
  compensation: yup.object().shape({
    currency: yup.string().oneOf(['USD']).required(),
    min_salary: yup.number(),
    max_salary: yup.number()
  }),
  location: yup.object().shape({
    can_be_remote: yup.boolean().default(false).required(),
    remote_only: yup.boolean().when('can_be_remote', { is: false, then: yup.boolean().oneOf([false]) }).required(),
    address: yup.string().required()
  }).required()
})

export {
  createSchema
}