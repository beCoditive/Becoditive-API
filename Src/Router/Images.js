const express = require('express')
const route = express.Router()

const imageController = require('../Controllers/Images')

route
    .route('/delete')
    .get(imageController.delete)

route
    .route('/ad')
    .get(imageController.ad)


module.exports = route;