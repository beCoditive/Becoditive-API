const functions = require('../../Src/Utilities/functions')

test('uuid', function () {
  expect(functions.uuid())
    .toMatch(/^[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}$/)
})

test('textToMorse1', function () {
  expect(functions.textToMorse('hello world'))
    .toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')
})

test('textToMorse2', function () {
  expect(functions.textToMorse('abcdefhijklmnopqrstuvwxyz0123456789.,:?\'-/)("@= '))
    .toBe('.- -... -.-. -.. . ..-. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .--  -.-- --.. ----- .---- ..--- ...-- ....- ..... -.... --... ---.. ----. .-.-.- --..-- ---... ..--.. .----. -....- -..-. -.--.- -.--. .-..-. .--.-. -...- /')
})

test('sarcasticConverter', function () {
  expect(functions.sarcasticConverter('meow'))
    .toMatch(/^\w+$/)
})

test('textToBinary', function () {
  expect(functions.textToBinary('hello world 1 2 3 4 5 6 7 8 9'))
    .toBe('1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100 100000 110001 100000 110010 100000 110011 100000 110100 100000 110101 100000 110110 100000 110111 100000 111000 100000 111001')
})

test('reverseString', function () {
  expect(functions.reverseString('hello world'))
    .toBe('dlrow olleh')
})
