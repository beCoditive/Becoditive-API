const canvas = require('canvas')
const { Canvas } = require('canvas-constructor')
const Jokes = require('../../models/jokes')
const Insults = require('../../models/insults')
const Flirts = require('../../models/flirt')
const Uselessweb = require('../../models/Uselessweb')
const stories = require('../../models/letsnotmeet')
const truthAndDare = require('../../models/truthordare')

const {randomStr, uuid} = require('../Utilities/functions')

exports.joke = async(req, res, next) => {
    try{
        let data = await Jokes.find()
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            joke : randomData.joke,
            category: randomData.category
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.letsnotmeet = async(req, res, next) => {
    try{
        let data = await stories.find()
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            title : randomData.title,
            story: randomData.story,
            author : randomData.author,
            url : randomData.url
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}


exports.puns = async(req, res, next) => {
    try{
        let data = await Jokes.find({category : "puns"})
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            joke : randomData.joke,
            category: randomData.category
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.uuid = async(req, res, next) => {
    try{
        res.status(200).json({
            uuid : uuid()
        }) 
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.insults = async(req, res, next) => {
    try{
        const data = await Insults.find()
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            insult : randomData.insult,
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.flirt = async(req, res, next) => {
    try{
        const data = await Flirts.find()
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            "flirt" : randomData.flirt,
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.uselessweb = async(req, res, next) => {
    try{
        const data = await Uselessweb.find()
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            url : randomData.link
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.number = async(req, res, next) => {
    try{
        let randomNumber = Math.floor(Math.random() * 9999999)
        res.status(200).json({
            "number" : randomNumber
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.password = async(req, res, next) => {
    try{
        if(!req.query.length){
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "length of the password wasn't specified."
            })
            return next();
        }

        var regExp = /[a-zA-Z]/g;
        var string = req.query.length
                    
        if(regExp.test(string)){
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "length query must be a number."
            })
            return next();
        } else {
            let password =  randomStr(req.query.length)
            res.status(200).json({
                "password" : password,
                "length": req.query.length,
                "note" : "These passwords are never stored and are generated randomly"
            })
        }
    }catch(error){
        console.log(error)
        res.status(500).json({
            "error": error
        })
    }
}

//Left + nicknames

exports.hug = async(req, res, next) => {
    try{
      
        let hugGifs = [
            "https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif",
            "https://media1.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
            "https://i.imgur.com/b8i6SNI.gif",
            "https://i.gifer.com/2QEa.gif",
            "https://33.media.tumblr.com/680b69563aceba3df48b4483d007bce3/tumblr_mxre7hEX4h1sc1kfto1_500.gif",
            "https://i.pinimg.com/originals/6d/b5/4c/6db54c4d6dad5f1f2863d878cfb2d8df.gif",
            "https://i.imgur.com/3OzmqMS.gif",
            "https://media.giphy.com/media/xT1R9yzqpvhPETYoV2/giphy.gif",
            "https://media2.giphy.com/media/VGACXbkf0AeGs/giphy.gif",
            "https://i1.wp.com/nileease.com/wp-content/uploads/2020/08/bbc2e163748ac6b3f2220ac273a3f384.gif?fit=498%2C278&ssl=1",
            "https://1.bp.blogspot.com/-JUqgHJmjyDs/YG76cI82URI/AAAAAAAAD_w/0QtzGkpiel0OlTVEdRCDLmK5Ot46rEq8QCLcBGAsYHQ/w380/romantic%2Banime%2Bhug%2Bgif1.gif",
            "https://cutewallpaper.org/21/hugs-anime/Hugs-for-everyone-3-image-Anime-Fans-of-DBolical-Indie-DB.gif",
            "https://thumbs.gfycat.com/SnappyLonelyCrocodile-max-1mb.gif",
            "https://media1.giphy.com/media/y7RTd6xCeiDzq/giphy.gif",
            "https://i0.wp.com/media.giphy.com/media/49mdjsMrH7oze/giphy.gif"
        ]

        let randomGif = hugGifs[Math.floor(Math.random() * hugGifs.length)]

        res.status(200).json({
            "hug-gif": randomGif
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.kiss = async(req, res, next) => {
    try{
      
        let kissGifs = [
            "https://media1.tenor.com/images/34ecc943dd11f0c55689e25f1bacddfb/tenor.gif",
            "https://i.pinimg.com/originals/e3/4e/31/e34e31123f8f35d5c771a2d6a70bef52.gif",
            "https://media1.tenor.com/images/57e94f8aecfa6a7ee7e00b7ceb6d9df1/tenor.gif",
            "https://media1.tenor.com/images/8aee6aeaad684419d23e1dc7f9c82004/tenor.gif",
            "https://media1.tenor.com/images/7e28715f3c114dc720688f1a03abc5f5/tenor.gif",
            "https://media1.tenor.com/images/b088ccf8075a4113efcbc5bc31fa46c2/tenor.gif",
            "https://media1.tenor.com/images/ccd552765795d8791d6bc458547e9fe9/tenor.gif",
            "https://pa1.narvii.com/6248/e2058cba6ab27061e62a6c94a6ee6ba61198ad23_hq.gif",
            "https://data.whicdn.com/images/224412655/original.gif",
            "https://monophy.com/media/vUrwEOLtBUnJe/monophy.gif",
            "https://pa1.narvii.com/5746/28adf462fa4a2391fb044405655c67b8f5f1c7b9_hq.gif",
            "https://media4.giphy.com/media/12VXIxKaIEarL2/giphy.gif"
          ]
      
          let randomGif = kissGifs[Math.floor(Math.random() * kissGifs.length)]

        res.status(200).json({
            "kiss-gif": randomGif
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.word = async(req, res, next) => {
    try{
        const data = require('../Data/words').arr
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            "word" : randomData,
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.doesnotexists = async(req, res, next) => {
    try{
        let randomNumber = Math.floor(Math.random() * 30) + 1
        const url = `https://cdn.becoditive.xyz/doesnotexists/doesnotexist-${randomNumber}.png`
        
        let img = await canvas.loadImage(url)

        let image = new Canvas(1200 , 1200)
        .printImage(img , 0 , 0 ,1200 , 1200)
        .toBuffer()

        res.set({'Content-Type': 'image/png'})
        res.status(200).send(image)
    }catch(error){
        console.log(error)
        res.status(500).json({
            "error": error
        })
    }
}

exports.truth = async(req, res, next) => {
    try{
        const data = await truthAndDare.find({category : "truth"})
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            truth : randomData.question,   
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.dare = async(req, res, next) => {
    try{
        const data = await truthAndDare.find({category : "dare"})
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            dare : randomData.question,   
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.quotes = async(req, res, next) => {
    try{
        const data = require('../Data/Quote.json')
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            quote : randomData.quote,
            type: randomData.type,
            author: randomData.author
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}


