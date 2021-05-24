const neverhaveiever = require('../../models/neverhaveiever')
const trivia = require('../../models/trivia')
const wouldyourather = require('../../models/wouldyourather')


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
        const data = await trivia.find()
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            question : randomData.question,
            category : randomData.category,
            options : randomData.option,
            answer : randomData.answer,
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.never = async(req, res, next) => {
    try{
        const data = await neverhaveiever.find()
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            question : randomData.question,
            nsfw : randomData.nsfw
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.would = async(req, res, next) => {
    try{
        const data = await wouldyourather.find()
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            question : randomData.question,
            nsfw : randomData.nsfw
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.rockpaper = async(req, res, next) => {
    try{

        let answerUser = req.query.answer

        if(!answerUser){
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "Your Answer was not specified."
            })
            return next();
        }

        let possibleAnswer = ['rock' , 'paper' , 'scissors']

        if(!possibleAnswer.includes(answerUser.toLowerCase())) {
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "This isn't a valid option. Try rock, paper, or scissors."
            })
            return next();
        }

        let outcomes = ['rock' , 'paper' , 'scissors']

        let answer = Math.floor(Math.random() * outcomes.length)

       let emoji

       if(outcomes[answer].toLowerCase() === 'rock'){
           emoji = '🗿'
       }
       else if(outcomes[answer].toLowerCase() === 'paper'){
           emoji = '📜'
       }
       else if(outcomes[answer].toLowerCase() === 'scissors'){
            emoji = '✂'
       }

       let ans

       if(outcomes[answer].toLowerCase() === "rock" && answerUser.toLowerCase() === "paper"){
          ans = `${emoji} You won`
          console.log('1')
       }else if(outcomes[answer].toLowerCase() === "rock" && answerUser.toLowerCase() === "scissors"){
          ans = `${emoji} You lost`
          console.log('2')
       }else if(outcomes[answer].toLowerCase() === "rock" && answerUser.toLowerCase() === "rock"){
          ans = `${emoji} Tied`
          console.log('3')
       }else if(outcomes[answer].toLowerCase() === "paper" && answerUser.toLowerCase() === "paper"){
          ans = `${emoji} Tied`
          console.log('4')
       }else if(outcomes[answer].toLowerCase() === "paper" && answerUser.toLowerCase() === "scissors"){
          ans = `${emoji} You won`
          console.log('5')
       }else if(outcomes[answer].toLowerCase() === "paper" && answerUser.toLowerCase() === "rock"){
          ans = `${emoji} You lost`
          console.log('6')
       }else if(outcomes[answer].toLowerCase() === "scissors" && answerUser.toLowerCase() === "paper"){
          ans = `${emoji} You lost`
          console.log('7')
       }else if(outcomes[answer].toLowerCase() === "scissors" && answerUser.toLowerCase() === "scissors"){
          ans = `${emoji} Tied`
          console.log('8')
       }else if(outcomes[answer].toLowerCase() === "scissors" && answerUser.toLowerCase() === "rock"){
          ans = `${emoji} You won`
          console.log('9')
       }

       res.status(200).json({
        "output": ans
    })

    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.eightball = async(req, res, next) => {
    try{

       let question = req.query.question
    
       if(!question){
            res.status(500).json({
                "error": "no question was asked!",
                "code" : 500
            })
       }

       let ans = [
           "Yes",
           "No",
           "Never",
           "Of Course",
           "Of Course Not",
           "Once in a Million Years",
           'It is certain',
           'It is decidedly so',
           'Without a doubt',
           'Yes – definitely',
           'You may rely on it',
           'As I see it, yes',
           'Most likely',
           'Outlook good',
           'Signs point to yes',
           'Reply hazy, try again',
           'Ask again later',
           'Better not tell you now',
           'Cannot predict now',
           'Concentrate and ask again',
           'My reply is no',
           'My sources say no',
           'Outlook not so good',
           'Very doubtful',
           "Don't count on it",
       ]

       let randomAnswer = ans[Math.floor(Math.random() * ans.length)]

       res.status(200).json({
         "question": question,
          "answer" : randomAnswer
       })

    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}