module.exports = {
    uuid : function(){     
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
    textToMorse : function(str) {

        let arr = str.toLowerCase().split(/(?!$)/u);
    
        let encodedText = ""
    
        for(let i = 0; i < arr.length; i++){
            let char = arr[i].toLowerCase()
            if(char === "a"){
                char = char.replace("a" , ".-")
            }else if(char === "b"){
                char = char.replace("b" , "-...")
            }else if(char === "c"){
                char = char.replace("c" , "-.-.")
            }else if(char === "d"){
                char = char.replace("d" , "-..")
            }else if(char === "e"){
                char = char.replace("e" , ".")
            }else if(char === "f"){
                char = char.replace("f" , "..-.")
            }else if(char === "g"){
                char = char.replace("g" , "--.")
            }else if(char === "h"){
                char = char.replace("h" , "....")
            }else if(char === "i"){
                char = char.replace("i" , "..")
            }else if(char === "j"){
                char = char.replace("j" , ".---")
            }else if(char === "k"){
                char = char.replace("k" , "-.-")
            }else if(char === "l"){
                char = char.replace("l" , ".-..")
            }else if(char === "m"){
                char = char.replace('m' , "--")
            }else if(char === "n"){
                char = char.replace("n" , "-.")
            }else if(char === "o"){
                char = char.replace("o" , "---")
            }else if(char === "p"){
                char = char.replace("p" , ".--.")
            }else if(char === "q"){
                char = char.replace("q" , "--.-")
            }else if(char === "r"){
                char = char.replace("r" , ".-.")
            }else if(char === "s"){
                char = char.replace("s" , "...")
            }else if(char === "t"){
                char = char.replace("t" , "-")
            }else if(char === "u"){
                char = char.replace("u" , "..-")
            }else if(char === "v"){
                char = char.replace("v" , "...-")
            }else if(char === "w"){
                char = char.replace("w" , ".--")
            }else if(char === "x"){
                char = char.replace("x" , "-..-")
            }else if(char === "y"){
                char = char.replace("y" , "-.--")
            }else if(char === "z"){
                char = char.replace("z" , "--..")
            }else if(char === "1"){
                char = char.replace("1" , ".----")
            }else if(char === "2"){
                char = char.replace("2" , "..---")
            }else if(char === "3"){
                char = char.replace("3" , "...--")
            }else if(char === "4"){
                char = char.replace("4" , "....-")
            }else if(char === "5"){
                char = char.replace("5" , ".....")
            }else if(char === "6"){
                char = char.replace("6" , "-....")
            }else if(char === "7"){
                char = char.replace("7" , "--...")
            }else if(char === "8"){
                char = char.replace("8" , "---..")
            }else if(char === "9"){
                char = char.replace("9" , "----.")
            }else if(char === "0"){
                char = char.replace("0" , "-----")
            }else if(char === "."){
                char = char.replace("." , ".-.-.-")
            }else if(char === ","){
                char = char.replace("," , "--..--")
            }else if(char === ":"){
                char = char.replace(":" , "---...")
            }else if(char === "?"){
                char = char.replace("?" , "..--..")
            }else if(char === "\'"){
                char = char.replace("\'" , ".----.")
            }else if(char === "-"){
                char = char.replace("-" , "-....-")
            }else if(char === "/"){
                char = char.replace("/" , "-..-.")
            }else if(char === ")"){
                char = char.replace(")" , "-.--.-")
            }else if(char === "("){
                char = char.replace("(" , "-.--.")
            }else if(char === "\""){
                char = char.replace("\"" , ".-..-.")
            }else if(char === "@"){
                char = char.replace("@" , ".--.-.")
            }else if(char === "="){
                char = char.replace("=" , "-...-")
            }else if(char === " "){
                char = char.replace(" " , "/")
            }
    
            let lastChar = arr[arr.length - 1]
    
            if(arr[i] === lastChar){
                encodedText += `${char}`
            }else{
                encodedText += `${char} `
            }
        }
        
       return encodedText
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