'use strict'

const companyService = require('../services/company.service')

async function create(req, res) {
  //validate
  const params = req.body
  const company = await companyService.create(params)

  res.send(company)
}

const API = {
  create
}

module.exports = API