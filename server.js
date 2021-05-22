require('dotenv').config()
const express = require('express')
const rateLimit = require('express-rate-limit')
const app = express()
const cons = require('consolidate');
const bodyParser = require('body-parser')
const path = require('path');
const morgan = require('morgan')
const mongoose = require('mongoose')

// Rate Limiter
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 1000,
    message: 'To Many request from this IP, please try again in an hour!'
});

app.use('/v2' , limiter);

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'))

// Routers
const animalRouter = require('./Src/Router/Animals')
const otherRouter = require('./Src/Router/Others')
const textRouter = require('./Src/Router/Text')
const memeRouter = require('./Src/Router/Meme')
const viewRouter = require('./Src/Router/View')
const imageRouter = require('./Src/Router/Images')
const gameRouter = require('./Src/Router/Games')
const adminRouter = require('./Src/Router/admin')
const urlRouter = require('./Src/Router/urlshort')
const fakeRouter = require('./Src/Router/fake')

app.use('/' , viewRouter)
app.use('/v2/animals' , animalRouter)
app.use('/v2/others' , otherRouter)
app.use('/v2/text' , textRouter)
app.use('/v2/meme' , memeRouter)
app.use('/v2/images' , imageRouter)
app.use('/v2/games' , gameRouter)
app.use('/v2/admin' , adminRouter)
app.use('/v2/shorturl' , urlRouter)
app.use('/v2/fake' , fakeRouter)

// v1 not supported error
app.use('/v1*' , async(req, res, next) => {
    res.status(404).render('v1Dep')
})

// 404 error
app.use('*' , async(req, res, next) => {
    res.status(404).render('404')
})

// Connection to server and mongoDB
app.listen(process.env.PORT || 4000, async() => {
    console.log(`===> The API is running on Port ${process.env.PORT || 4000}...`)
    await mongoose.connect(process.env.MONGOSRV, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(async() => {
        console.log(`===> Connected to MongoDB (Data)`)
    }).catch((err) => {console.log(err)})
})