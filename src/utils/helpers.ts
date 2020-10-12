'use strict'

import { ObjectSchema } from 'yup'

const validateParams = (params: any, schema: ObjectSchema, validationOptions: any = {}) => {
    const options  = {
        abortEarly: false,
        stripUnknown: true,
        ...validationOptions,
    }

    return schema.validate(params, options)
}

export {
    validateParams
}