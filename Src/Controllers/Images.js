const { Canvas } = require('canvas-constructor')
const canvas = require('canvas')

exports.delete = async(req, res, next) => {
    try{
        const bg = await canvas.loadImage("https://cdn.becoditive.xyz/assets/api/delete.png")

        if(!req.query.image){
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "no image was provide."
            })
            return next();
        }

        let pngChecker = req.query.image.endsWith('.png')
        let jpgChecker = req.query.image.endsWith('.jpg')

        if(req.query.image.endsWith('.png') === true){
            let logo = await canvas.loadImage(req.query.image)

            let image = new Canvas(550, 267)
            .printImage(bg, 0, 0, 550, 267)
            .printImage(logo, 95 , 105 , 135 , 135)
            .toBuffer();
    
            res.set({'Content-Type': 'image/png'})
            res.send(image)
        }else if(req.query.image.endsWith('.jpg') === true){
            let logo = await canvas.loadImage(req.query.image)

            let image = new Canvas(550, 267)
            .printImage(bg, 0, 0, 550, 267)
            .printImage(logo, 95 , 105 , 135 , 135)
            .toBuffer();
    
            res.set({'Content-Type': 'image/png'})
            res.send(image)
        }else{
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "only jpg or png type of images are allowed."
            })
            return next();
        }
    }catch(error){
        console.log(error)
        res.status(500).json({
            "error": error
        })
    }
}

exports.ad = async(req, res, next) => {
    try{
        const bg = await canvas.loadImage('https://cdn.becoditive.xyz/assets/api/ad.png')

        if(!req.query.image){
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "no image was provide."
            })
            return next();
        }

        let pngChecker = req.query.image.endsWith('.png')
        let jpgChecker = req.query.image.endsWith('.jpg')

        if(req.query.image.endsWith('.png') === true){
            let logo = await canvas.loadImage(req.query.image)

            let image = new Canvas(550, 474)
            .printImage(logo, 150 , 75 , 230 , 230)
            .printImage(bg, 0, 0, 550, 474)
            .toBuffer();
    
            res.set({'Content-Type': 'image/png'})
            res.send(image)
        }else if(req.query.image.endsWith('.jpg') === true){
            let logo = await canvas.loadImage(req.query.image)

            let image = new Canvas(550, 474)
            .printImage(logo, 150 , 75 , 230 , 230)
            .printImage(bg, 0, 0, 550, 474)
            .toBuffer();
    
            res.set({'Content-Type': 'image/png'})
            res.send(image)
        }else{
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "only jpg or png type of images are allowed."
            })
            return next();
        }
    }catch(error){
        console.log(error)
        res.status(500).json({
            "error": error
        })
    }
}