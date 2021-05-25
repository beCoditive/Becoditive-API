const express = require('express')
const route = express.Router()
const auth = require('../Utilities/auth').auth

const textController = require('../Controllers/Text')

route
  .route('/reverse')
  .get(auth, textController.reverse)

route
  .route('/binary')
  .get(auth, textController.binary)

route
  .route('/morse')
  .get(auth, textController.morse)

route
  .route('/sarcastic')
  .get(auth, textController.sarcastic)

route
  .route('/shuffle')
  .get(auth, textController.shuffle)

module.exports = route
