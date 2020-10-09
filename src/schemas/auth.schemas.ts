'use strict'

import * as yup from 'yup'

const email = yup.string().email().trim().lowercase()

export const signupSchema = yup.object().shape({
  name: yup.string().trim().required(),
  email: email.required(),
  password: yup.string().required()
})

export const signinSchema = yup.object().shape({
  email: email.required(),
  password: yup.string().required()
})
