'use strict'

import * as companiesService from '../services/companies.service'

export async function index(req: any, res: any) {
  const companies = await companiesService.getAll(req.user)
  res.send(companies)
}