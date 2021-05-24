const express = require('express')
const route = express.Router()
const auth = require('../Utilities/auth').auth

const memeController = require('../Controllers/Meme')

route
    .route('/')
    .get(auth , memeController.memes)

route
    .route('/meirl')
    .get(auth , memeController.meirl)

route
    .route('/discordmemes')
    .get(auth , memeController.dcmemes)

route
    .route('/blacktwitter')
    .get(auth , memeController.blactwitter)

module.exports = route;