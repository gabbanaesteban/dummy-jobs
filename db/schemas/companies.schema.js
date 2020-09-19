'use strict'

/* eslint-disable no-undef */

const schema = {
    bsonType: "object",
    required: ["name"],
    properties: {
        name: {
            bsonType: "string",
            maxLength: 255,
        },
        website: {
            bsonType: "string",
            maxLength: 255,
        },
        description: {
            bsonType: 'string',
            maxLength: 65535
        }
    }
}

module.exports = schema