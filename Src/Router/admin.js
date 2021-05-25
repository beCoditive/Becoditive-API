const express = require('express')
const route = express.Router()
const auth = require('../Utilities/auth').adminAuth

const adminController = require('../Controllers/Admin')

route
  .route('/newAPIKEY')
  .post(adminController.newAPIKEY)

module.exports = route
