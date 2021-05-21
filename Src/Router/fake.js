const express = require('express')
const route = express.Router()
const auth = require('../Controllers/auth').auth

const fakeController = require('../Controllers/fake')

route
    .route('/creditcards')
    .get(auth , fakeController.credit)

module.exports = route;