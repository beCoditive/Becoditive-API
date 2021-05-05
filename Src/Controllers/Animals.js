exports.cat = async(req, res, next) => {
    try{
        const data = require('../Data/Animals/Cat.json')
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            image : randomData.image,
            fact: randomData.fact
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }

    
}

exports.bird = async(req, res, next) => {
    try{
        const data = require('../Data/Animals/Birds.json')
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            image : randomData.image,
            fact: randomData.fact
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }

    
}

exports.dog = async(req, res, next) => {
    try{
        const data = require('../Data/Animals/Dog.json')
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            image : randomData.image,
            fact: randomData.fact
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
   
}

exports.panda = async(req, res, next) => {
    try{
        const data = require('../Data/Animals/Panda.json')
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            image : randomData.image,
            fact: randomData.fact
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
   
}