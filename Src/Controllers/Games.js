exports.guess = async(req, res, next) => {
    try{
        const data = require('../Data/Games/Guess.json')
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            logo : randomData.logo,
            answer: randomData.answer
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.trivia = async(req, res, next) => {
    try{
        const data = require('../Data/Games/trivia.json')
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            question : randomData.question,
            category : randomData.category,
            options : randomData.options,
            answer : randomData.answer,
            difficulty : randomData.difficulty,
            correct_option : randomData.correct_option
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}