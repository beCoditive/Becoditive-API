const express = require('express')
const route = express.Router()

const memeController = require('../Controllers/Meme')

route
    .route('/meirl')
    .get(memeController.meirl)

route
    .route('/minion')
    .get(memeController.minion)

route
    .route('/dank')
    .get(memeController.dank)

route
    .route('/')
    .get(memeController.allmeme)


module.exports = route;