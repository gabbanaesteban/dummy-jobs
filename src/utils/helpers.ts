'use strict'

import { ObjectSchema } from 'yup'

export function validateParams(params: any, schema: ObjectSchema, validationOptions: any = {}) {
    const options  = {
        abortEarly: false,
        stripUnknown: true,
        ...validationOptions,
    }

    return schema.validate(params, options)
}