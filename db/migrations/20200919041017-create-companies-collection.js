'use strict'
/* eslint-disable no-undef */

const $jsonSchema = require('../schemas/companies.schema')

async function up(db) {
  const validator = { $jsonSchema }
  return db.createCollection("companies", { validator })
}

async function down(db) {
  return db.companies.drop()
}


const API = {
  up,
  down
}

module.exports = API
