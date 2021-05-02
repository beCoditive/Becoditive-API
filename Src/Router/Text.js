const express = require('express')
const route = express.Router()

const textController = require('../Controllers/Text')

route
    .route('/reverse')
    .get(textController.reverse)

  
route
    .route('/binary')
    .get(textController.binary)

route
    .route('/sarcastic')
    .get(textController.sarcastic)
    
route
    .route('/shuffle')
    .get(textController.shuffle)

module.exports = route;