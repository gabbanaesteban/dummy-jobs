'use strict'

import * as yup from 'yup'

const createSchema = yup.object().shape({
  name: yup.string().trim().required(),
  website: yup.string().url().trim().lowercase(),
  description: yup.string()
})

export {
  createSchema
}