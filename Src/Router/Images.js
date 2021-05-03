const express = require('express')
const route = express.Router()

const imageController = require('../Controllers/Images')

route
    .route('/delete')
    .get(imageController.delete)

route
    .route('/ad')
    .get(imageController.ad)

route 
    .route('/hitler')
    .get(imageController.hitler)

route 
    .route('/jail')
    .get(imageController.jail)

route 
    .route('/gay')
    .get(imageController.gay)

route 
    .route('/discordblue')
    .get(imageController.bluediscord)

module.exports = route;