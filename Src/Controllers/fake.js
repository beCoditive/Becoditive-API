let cards = require('../../models/FakeCredit')

exports.credit = async(req, res, next) => {
    try{
        const data = await cards.find()
        let randomData = data[Math.floor(Math.random() * data.length)]
        res.status(200).json({
            type : randomData.type,
            number: randomData.number,
            expiration : randomData.expiration,
            owner : randomData.owner
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            "error": error
        })
    }
}