const APIKEYS = require('../../models/apikeys')

function uuid() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    const randomChoice = function(container) {
        return Math.floor(Math.random() * container.length)
    }
    const randomCharacterFrom = function(length) {
        return characters.charAt(randomChoice(characters))
    }

    const makeKeyPart = function(length) {
        return Array(length).fill().map(function() {
            return randomCharacterFrom(length)
        }).join('')
    }

    return `${makeKeyPart(8)}-${makeKeyPart(4)}-${makeKeyPart(4)}-${makeKeyPart(4)}-${makeKeyPart(12)}`
}


exports.newAPIKEY = async(req, res, next) => {
    try{
        let {email} = req.body

        let blockedExtentions = require('../../blocked/extensions').extensions
        let blockedDomains = require('../../blocked/domains').domains

        let domain = email.split('@')[1]

        if(blockedDomains.includes(domain)){
            return res.render('main' , {message : "domain"})
        }

        let extension = domain.split('.')
        extension = extension[extension.length - 1]

        if(blockedExtentions.includes(`.${extension}`)){
            return res.render('main' , {message : "extension"})
        }

        let key = uuid()

        let data = await APIKEYS.create({
            email,
            apikey : key,
        })
        
        res.render('main' , {message : "success" , key})

    }catch(error){
        console.log(error)
        if(error.code === 11000){
            res.render('main' , {message : "duplicate"})
        }else{
            res.status(500).json({
                "error": error
            })
        }
    }
}
