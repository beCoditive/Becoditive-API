exports.meirl = async(req, res, next) => {
    try{
        const data = require('../Data/Memes/meirl.json')
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            title: randomData.title,
            url: randomData.url,
            category: randomData.category
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.minion = async(req, res, next) => {
    try{
        const data = require('../Data/Memes/minion.json')
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            title: randomData.title,
            url: randomData.url,
            category: randomData.category
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}


exports.dank = async(req, res, next) => {
    try{
        const data = require('../Data/Memes/dank.json')
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            title: randomData.title,
            url: randomData.url,
            category: randomData.category
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}


exports.allmeme = async(req, res, next) => {
    try{
        const data1 = require('../Data/Memes/minion.json')
        const data2 = require('../Data/Memes/meirl.json')
        const data3 = require('../Data/Memes/dank.json')

        let randomData1 = data1[Math.floor(Math.random() * data1.length)]
       
        let randomData2 = data2[Math.floor(Math.random() * data2.length)]

        let randomData3 = data3[Math.floor(Math.random() * data3.length)]

        let possible = ['data1' , 'data2' , 'data3']

        let resultPossible = possible[Math.floor(Math.random() * possible.length)]

        let output

        if(resultPossible === 'data1'){
            output = randomData1
        }else if(resultPossible === 'data2'){
            output = randomData2
        }else if(resultPossible === 'data3'){
            output = randomData3
        }

        res.status(200).json({
            title: output.title,
            url: output.url,
            category: output.category
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}