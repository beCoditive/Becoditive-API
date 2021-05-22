const APIKEYS = require('../../models/apikeys')

function uuid() {
    var result1 = '';
    var result2 = '';
    var result3 = '';
    var result4 = '';
    var result5 = '';

    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;

    for ( var i = 0; i < 8; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    for ( var i = 0; i < 4; i++ ) {
        result2 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    for ( var i = 0; i < 4; i++ ) {
        result3 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    for ( var i = 0; i < 4; i++ ) {
        result4 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    for ( var i = 0; i < 12; i++ ) {
        result5 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    let final = `${result1}-${result2}-${result3}-${result4}-${result5}`

    return final
}


exports.newAPIKEY = async(req, res, next) => {
    try{
        let {email} = req.body

        let blockedExtentions = require('../../blocked/extensions').extensions
        let blockedDomains = require('../../blocked/domains').domains

        let domain = email.split('@')[1]

        if(blockedDomains.includes(`${domain}`)){
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