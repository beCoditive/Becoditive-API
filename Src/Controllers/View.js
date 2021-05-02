exports.home = async(req, res, next) => {
    try{
       
        res.status(200).render('main')
        
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}

