let apikeys =  require('../../models/apikeys')

exports.auth = async(req, res , next ) => {
    let Auth = req.headers['authorization'];
    if(!Auth) {
        Auth = req.query.apikey
    }

    if(!Auth) {
        res.status(401).json({
            "message": "Unauthorized",
            code : 401
        })
        return
    }

    let apikey = await apikeys.findOne({apikey : Auth})
    if(!apikey) {
        res.status(401).json({
            "message": "Invalid API Key Provided.",
            code : 401
        })
        return
    }

    await apikeys.findByIdAndUpdate(apikey , {uses : +apikey.uses + +1})
    next();
}

exports.adminAuth = async(req, res , next ) => {
    let Auth = req.headers['authorization'];
    if(!Auth) {
        Auth = req.query.apikey
    }

    if(!Auth) {
        res.status(401).json({
            "message": "Unauthorized",
            code : 401
        })
        return
    }

    let apikey = await apikeys.findOne({apikey : Auth})
    if(!apikey) {
        res.status(401).json({
            "message": "Invalid API Key Provided.",
            code : 401
        })
        return
    }
    if(apikey.type != 'admin'){
        res.status(401).json({
            "message": "Not Authorized to use this endpoint",
            code : 401
        })
        return
    }

    await apikeys.findByIdAndUpdate(apikey , {uses : +apikey.uses + +1})
    next();
}
