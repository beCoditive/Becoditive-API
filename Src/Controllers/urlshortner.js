const apikeys = require('../../models/apikeys');
const Url = require('../../models/url-shortner')

function shortid() {
    var result1 = '';

    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;

    for ( var i = 0; i < 8; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    let final = `${result1}`

    return final
}

exports.create = async(req, res, next) => {
    try{
       let {title , url , logo , description , domain} = req.body

       if(!title) title = "Url Shortned Using api.becoditive.xyz"
       if(!description) description = "Create simple short urls using becoditive API for free!"
       if(!logo) logo = null

       if(domain === `dscl.xyz` || domain === `dscl`){
          domain = "dscl.xyz"
        } else if(domain === `dsscc.tk` || domain === `dsscc`){
            domain = "dsscc.tk"
        }else {
            domain = "dscl.xyz"
        }

       let validate = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/

       if(validate.test(url)){
           
       let finder = await Url.findOne({url : url})
       if(finder) {
            res.status(200).json({
                "status": "successful",
                data : {
                    "shortUrl" : `https://${finder.domain}/${finder.shortId}`,
                    "id" : `${finder.shortId}`
                }
            })
       }else{
            let Auth = req.headers['authorization'];
            if(!Auth) {
                Auth = req.query.apikey
            }

            let apikey = await apikeys.findOne({apikey : Auth})

            let data = await Url.create({
                title,
                url,
                logo,
                description,
                shortId : shortid(),
                owner : apikey.apikey,
                domain : domain
            })

            res.status(200).json({
                "status": "successful",
                data : {
                    "shortUrl" : `https://${data.domain}/${data.shortId}`,
                    "id" : `${data.shortId}`
                }
            })
       }
       }else {
        res.status(500).json({
            "error": "Invaild Url (Make sure it is a https link.)"
        })
       }
    }catch(error){
        console.log(error)
        res.status(500).json({
            "error": error
        })
    }
}

exports.info = async(req, res, next) => {
    try{
       let id = req.query.id

       if(!id){
        res.status(400).json({
            "error": "No Url Provided in the query parameter."
        })
        return
       }

       let data = await Url.findOne({shortId : id})
       if(!data){
        res.status(400).json({
            "error": "No Url was found with that id."
        })
        return
       }

       res.status(200).json({
        status : "successful",
        data : {
            "createdAt" : data.createdAt,
            "clicks" : data.clicks,
            "title" : data.title,
            "url" : data.url,
            "logo" : data.logo,
            "description" : data.description,
            "shortId" : data.shortId
        }
    })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.update = async(req, res, next) => {
    try{

       let id = req.query.id
       let data = { }

       if(req.body.title) {
           data.title =  req.body.title
       }

       if(req.body.url) {
          data.url =  req.body.url
       }

       if(req.body.description) {
          data.description =  req.body.description
       }

       if(req.body.logo) {
          data.logo =  req.body.logo
       }

       let finder = await Url.findOne({shortId : id})
      
       if(!finder) {
            res.status(404).json({
                "message": "No Short Url Found With That Id.",
                "code" : 404
            })
            return
       }

       let Auth = req.headers['authorization'];
       if(!Auth) {
           Auth = req.query.apikey
       }

       let apikey = await apikeys.findOne({apikey : Auth})

       if(finder.owner != apikey.apikey){
            res.status(401).json({
                "message": "You are not owner of this short url.",
                "code" : 401
            })
            return
       }

       await Url.findOneAndUpdate({shortId : finder.shortId} , data)

       let newData = await Url.findOne({shortId : finder.shortId})
       res.status(200).json({
          "status": "successful",
          data : {
            "createdAt" : newData.createdAt,
            "clicks" : newData.clicks,
            "title" : newData.title,
            "url" : newData.url,
            "logo" : newData.logo,
            "description" : newData.description,
            "shortId" : newData.shortId
          }
       })
       
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}