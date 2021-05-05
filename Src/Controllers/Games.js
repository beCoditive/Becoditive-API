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