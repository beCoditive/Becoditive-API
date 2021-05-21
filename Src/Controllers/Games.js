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