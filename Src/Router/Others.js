const express = require('express')
const route = express.Router()
const auth = require('../Controllers/auth').auth

const otherController = require('../Controllers/Others')

route
    .route('/joke')
    .get(auth , otherController.joke)

route
    .route('/puns')
    .get(auth, otherController.puns)


route
    .route('/insults')
    .get(auth , otherController.insults)

route
    .route('/flirt')
    .get(auth , otherController.flirt)

route
    .route('/word')
    .get(auth , otherController.word)

route
    .route('/doesnotexists')
    .get(auth , otherController.doesnotexists)

route
    .route('/quote')
    .get(auth , otherController.quotes)

route
    .route('/uselessweb')
    .get(auth , otherController.uselessweb)

route
    .route('/truth')
    .get(auth , otherController.truth)

route
    .route('/dare')
    .get(auth , otherController.dare)    

route
    .route('/number')
    .get(auth , otherController.number)

route
    .route('/uuid')
    .get(auth , otherController.uuid)

route
    .route('/password')
    .get(auth , otherController.password)

route
    .route('/hug')
    .get(auth , otherController.hug)

route
    .route('/kiss')
    .get(auth , otherController.kiss)

module.exports = route;