const express = require('express')
const route = express.Router()
const auth = require('../Utilities/auth').auth

const animalController = require('../Controllers/Animals')

route
  .route('/cat')
  .get(auth, animalController.cat)

route
  .route('/dog')
  .get(auth, animalController.dog)

route
  .route('/panda')
  .get(auth, animalController.panda)

route
  .route('/bird')
  .get(auth, animalController.bird)

module.exports = route
