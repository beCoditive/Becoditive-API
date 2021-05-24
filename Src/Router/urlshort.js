const express = require('express')
const route = express.Router()
const auth = require('../Utilities/auth').auth

const urlController = require('../Controllers/urlshortner')

route
    .route('/create')
    .post(auth , urlController.create)

route
    .route('/update')
    .patch(auth , urlController.update)

route
    .route('/info')
    .get(auth , urlController.info)

module.exports = route;