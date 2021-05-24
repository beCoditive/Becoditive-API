let reverseString = require('../Utilities/functions').reverseString

let text2Binary = require('../Utilities/functions').text2Binary

let sarcasticConverter = require('../Utilities/functions').sarcasticConverter

let textToMorse = require('../Utilities/functions').textToMorse

exports.shuffle = async(req, res, next) => {
    try{
        let text = req.query.text

        if(!text) {
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "text which is to be reversed wasn't specified."
            })
            return next();
        }

        let shuffledWord = text.split(/\s\b(?!\s)/).sort(function(){return 0.5-Math.random()}).join(' '); 

        res.status(200).json({
            "shuffled Word" : shuffledWord
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }

    
}

exports.reverse = async(req, res, next) => {
    try{
        let text = req.query.text

        if(!text) {
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "text which is to be reversed wasn't specified."
            })
            return next();
        }

        let reversedText = reverseString(text)


        res.status(200).json({
            text : reversedText,
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }

    
}

exports.binary = async(req, res, next) => {
    try{
        let text = req.query.text

        if(!text) {
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "text which is to be converted to binary wasn't specified."
            })
            return next();
        }

        let binary = text2Binary(text)


        res.status(200).json({
            "binary" : binary,
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}


exports.sarcastic = async(req, res, next) => {
    try{
        let text = req.query.text

        if(!text) {
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "text which is to be converted to sarcatic wasn't specified."
            })
            return next();
        }

        let sarcastic = sarcasticConverter(text)


        res.status(200).json({
            "sarcastic text" : sarcastic,
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.morse = async(req, res, next) => {
    try{
        let text = req.query.text

        if(!text) {
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "text which is to be converted to morse wasn't specified."
            })
            return next();
        }

        let morse = textToMorse(text)

        res.status(200).json({
            "morse text" : morse,
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}