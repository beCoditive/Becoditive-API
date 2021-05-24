exports.home = async(req, res, next) => {
    try{
       
        res.status(200).render('main' ,  {message : "none" , token : process.env.ADMINSECRET})
        
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.v2 = async(req, res, next) => {
    try{
        res.status(200).render('vtwo')
        
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

exports.tos = async(req, res, next) => {
    try{
        res.status(200).render('termsofservice')
        
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}
