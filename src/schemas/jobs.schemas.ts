'use strict'

import * as yup from 'yup'

const emailSchema = yup.string().trim().lowercase().email()

const createSchema = yup.object().shape({
  title: yup.string().required(),
  type: yup.string().oneOf(['Full-time', 'Part-time','Freelance', 'Intership', 'Temporary']).required(),
  level: yup.string().oneOf(['Beginner','Junior','Mid-level','Senior','Lead','Manager']),
  description: yup.string().min(160).required(),
  application: yup.object().shape({
    how_to_apply: yup.string().min(20).required(),
    target_type: yup.string().oneOf(['email','ATS']).required(),
    target: yup.string().required()
    .when('target_type', { is: 'email', then: emailSchema })
    .when('target_type', { is: 'ATS', then: yup.string().url() })
  }).required(),
  compensation: yup.object().shape({
    currency: yup.string().oneOf(['USD']).required(),
    min_salary: yup.number().nullable().default(null),
    max_salary: yup.number().nullable().default(null)
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