const express = require('express')
const route = express.Router()

const animalController = require('../Controllers/Animals')

route
    .route('/cat')
    .get(animalController.cat)

route
    .route('/dog')
    .get(animalController.dog)

route
    .route('/panda')
    .get(animalController.panda)

route
    .route('/bird')
    .get(animalController.bird)

module.exports = route;