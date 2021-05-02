function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

function sarcasticConverter(text) {
    let output = ""
    
    for (var i = 0; i < text.length; i++) {
        let char = text.charAt(i);

        let possibleOutcomes = ['low' , 'high'];

        let randomOutcomes = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)]

        if(randomOutcomes === 'low'){
            char = char.toLowerCase()
        }else if(randomOutcomes === 'high'){
            char = char.toUpperCase()
        }

        output += char
    }

    return output
}

exports.shuffle = async(req, res, next) => {
    try{
        let text = req.query.text

        if(!text) {
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "text which is to be reversed wasn't specified."
            })
            return next();
        }

        let shuffledWord = text.split(/\s\b(?!\s)/).sort(function(){return 0.5-Math.random()}).join(' '); 

        res.status(200).json({
            "shuffled Word" : shuffledWord
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }

    
}

exports.reverse = async(req, res, next) => {
    try{
        let text = req.query.text

        if(!text) {
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "text which is to be reversed wasn't specified."
            })
            return next();
        }

        let reversedText = reverseString(text)


        res.status(200).json({
            text : reversedText,
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }

    
}

exports.binary = async(req, res, next) => {
    try{
        let text = req.query.text

        if(!text) {
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "text which is to be converted to binary wasn't specified."
            })
            return next();
        }

        let binary = text2Binary(text)


        res.status(200).json({
            "binary" : binary,
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}


exports.sarcastic = async(req, res, next) => {
    try{
        let text = req.query.text

        if(!text) {
            res.status(400).json({
                "error" : true,
                "code": 400,
                "message": "text which is to be converted to binary wasn't specified."
            })
            return next();
        }

        let sarcastic = sarcasticConverter(text)


        res.status(200).json({
            "sarcastic text" : sarcastic,
        })
    }catch(error){
        res.status(500).json({
            "error": error
        })
    }
}