const functions = require('../../Src/Utilities/functions')

test('uuid', function(){
    expect(functions.uuid())
    .toMatch(/^[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}$/)
})

test('textToMorse1', function(){
    expect(functions.textToMorse('hello world'))
    .toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
})

test('textToMorse2', function(){
    expect(functions.textToMorse('abcdefhijklmnopqrstuvwxyz0123456789.,:?\'-/)("@= '))
    .toBe('.- -... -.-. -.. . ..-. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .--  -.-- --.. ----- .---- ..--- ...-- ....- ..... -.... --... ---.. ----. .-.-.- --..-- ---... ..--.. .----. -....- -..-. -.--.- -.--. .-..-. .--.-. -...- /')
})

test('stringReverse', function() {
    expect(functions.reverseString('hello world'))
    .toBe('dlrow olleh')
})