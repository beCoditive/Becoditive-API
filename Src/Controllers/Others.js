function randomStr(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

exports.joke = async(req, res, next) => {
    try{
        const data = require('../Data/Joke.json')
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            joke : randomData.joke,
            type: randomData.type
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.insults = async(req, res, next) => {
    try{
        const data = require('../Data/insults.json')
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

exports.truth = async(req, res, next) => {
    try{
        const data = require('../Data/Truth.json')
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            truth : randomData.truth,   
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.dare = async(req, res, next) => {
    try{
        const data = require('../Data/Dare.json')
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            dare : randomData.dare,   
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

exports.uselessweb = async(req, res, next) => {
    try{
        const data = require('../Data/Uselessweb.json')
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            url : randomData.url
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
