const express = require('express')
const rateLimit = require('express-rate-limit')
const app = express()
const cons = require('consolidate');
const path = require('path');

const animalRouter = require('./Src/Router/Animals')
const otherRouter = require('./Src/Router/Others')
const textRouter = require('./Src/Router/Text')
const memeRouter = require('./Src/Router/Meme')
const viewRouter = require('./Src/Router/View')
const imageRouter = require('./Src/Router/Images')
const gameRouter = require('./Src/Router/Games')

const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 1000,
    message: 'To Many request from this IP, please try again in an hour!'
});
app.use('/v1' , limiter);

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use('/assets', express.static('assets'))

app.use('/' , viewRouter)

app.use('/v1/animals' , animalRouter)
app.use('/v1/others' , otherRouter)
app.use('/v1/text' , textRouter)
app.use('/v1/meme' , memeRouter)
app.use('/v1/images' , imageRouter)
app.use('/v1/games' , gameRouter)

app.use('*' , async(req, res, next) => {
    res.status(404).render('404')
})


app.listen(process.env.PORT || 4000, () => {
    console.log("The API is running...")
})