const express = require('express')

const router = express.Router({ mergeParams: true });
const { create } = require('../controllers/companies.controller')

router.post('/', create)

module.exports = router;