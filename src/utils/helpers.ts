'use strict'

import createError from 'http-errors'
import { ObjectSchema, ValidationError } from 'yup'

const validateParams = async (params: any, schema: ObjectSchema, validationOptions: any = {}) => {
    const options  = {
        abortEarly: false,
        stripUnknown: true,
        ...validationOptions,
    }

    try {
        const validatedParams = await schema.validate(params, options)
        return validatedParams
    }catch(validationError) {
        const httpError = validationErrorToHttpError(validationError)
        throw httpError
    }
}

const validationErrorToHttpError = function(validationError: ValidationError) {
    const fields = validationError.inner.map(({ path, errors }) => {
        const [message] = errors
        return { path, message }
    })

    const error = new createError.BadRequest("Validation errors")
    error.fields = fields
    
    return error
}

export {
    validateParams
}