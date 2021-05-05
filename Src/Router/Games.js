const express = require('express')
const route = express.Router()

const gamesController = require('../Controllers/Games')

route
    .route('/guessthelogo')
    .get(gamesController.guess)

module.exports = route;