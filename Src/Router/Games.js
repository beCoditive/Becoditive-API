const express = require('express')
const route = express.Router()
const auth = require('../Utilities/auth').auth

const gamesController = require('../Controllers/Games')

route
    .route('/guessthelogo')
    .get(auth , gamesController.guess)

route
    .route('/trivia')
    .get(auth , gamesController.trivia)

route
    .route('/neverhaveiever')
    .get(auth , gamesController.never)

route
    .route('/wouldyourather')
    .get(auth , gamesController.would)

route
    .route('/rpc')
    .get(auth , gamesController.rockpaper)

module.exports = route;