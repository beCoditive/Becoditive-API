module.exports = {
    uuid : function(){     
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        
            const randomNumber = function(container) {
                return Math.floor(Math.random() * container.length)
            }
            const randomCharacter = function(length) {
                return characters.charAt(randomNumber(characters))
            }
        
            const makeKeyPart = function(length) {
                return Array(length).fill().map(function() {
                    return randomCharacter(length)
                }).join('')
            }
        
            return `${makeKeyPart(8)}-${makeKeyPart(4)}-${makeKeyPart(4)}-${makeKeyPart(4)}-${makeKeyPart(12)}`
    },
    randomStr : function(length){
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
    },
    textToMorse : function(text){
        const morseCodeDictionary = {
            'a': '.-',
            'b': '-...',
            'c': '-.-.',
            'd': '-..',
            'e': '.',
            'f': '..-.',
            'g': '--.',
            'h': '....',
            'i': '..',
            'j': '.---',
            'k': '-.-',
            'l': '.-..',
            'm': '--',
            'o': '---',
            'p': '.--.',
            'q': '--.-',
            'r': '.-.',
            's': '...',
            't': '-',
            'u': '..-',
            'v': '...-',
            'w': '.--',
            'y': '-.--',
            'z': '--..',
            '1': '.----',
            '2': '..---',
            '3': '...--',
            '4': '....-',
            '5': '.....',
            '6': '-....',
            '7': '--...',
            '8': '---..',
            '9': '----.',
            '0': '-----',
            '.': '.-.-.-',
            ',': '--..--',
            ':': '---...',
            '?': '..--..',
            "'": '.----.',
            '-': '-....-',
            '/': '-..-.',
            ')': '-.--.-',
            '(': '-.--.',
            '"': '.-..-.',
            '@': '.--.-.',
            '=': '-...-',
            ' ': '/'
        };
        
        const splittedText = text.toLowerCase().split(/(?!$)/)
        
        return splittedText.map(function(code){
            return morseCodeDictionary[code]
        }).join(' ')

    },
    sarcasticConverter : function(text) {
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
    },
    text2Binary : function(string) {
        return string.split('').map(function (char) {
            return char.charCodeAt(0).toString(2);
        }).join(' ');
    },
    reverseString : function(str) {
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
    
}