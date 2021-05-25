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
  .route('/wanted')
  .get(imageController.wanted)

route
  .route('/gay')
  .get(imageController.gay)

route
  .route('/discordblue')
  .get(imageController.bluediscord)

route
  .route('/rip')
  .get(imageController.rip)

route
  .route('/sepia')
  .get(imageController.speia)

route
  .route('/firsttime')
  .get(imageController.firsttime)

route
  .route('/jokeoverhead')
  .get(imageController.jokeoverhead)

route
  .route('/kimborder')
  .get(imageController.kimborder)

route
  .route('/captcha')
  .get(imageController.captcha)

module.exports = route
