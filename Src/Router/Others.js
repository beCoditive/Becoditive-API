const express = require('express')
const route = express.Router()

const otherController = require('../Controllers/Others')

route
    .route('/joke')
    .get(otherController.joke)

route
    .route('/insults')
    .get(otherController.insults)

route
    .route('/firt')
    .get(otherController.firt)

route
    .route('/quote')
    .get(otherController.quotes)

route
    .route('/uselessweb')
    .get(otherController.uselessweb)

route
    .route('/truth')
    .get(otherController.truth)

route
    .route('/dare')
    .get(otherController.dare)    

route
    .route('/number')
    .get(otherController.number)

route
    .route('/password')
    .get(otherController.password)

module.exports = route;