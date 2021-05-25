const functions = require('../../../Src/Utilities/functions')

describe('Utility functions', function () {
  it('returns a random number from a sequence', function () {
    expect(functions.randomNumber(11))
      .toBeLessThan(10)
  })
  it('returns a random character from a string', function () {
    expect(functions.randomCharacter('ABCDE'))
      .toMatch(/^[A-E]$/)
  })
  it('returns a random crafted string from another whole string', function () {
    expect(functions.randomString(10))
      .toMatch(/^[A-Za-z0-9]{10}$/)
  })
  it('returns a random crafted string from another whole string', function () {
    expect(functions.randomString(3, 'ABCDEFGHJIJKWEIWIEIOWIEIOWIOEIOWE'))
      .toMatch(/^[A-Z]{3}$/)
  })
  it('makes uuid', function () {
    expect(functions.uuid())
      .toMatch(/^[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}$/)
  })

  describe('morse code ciphering', function () {
    it('translate hello world', function () {
      expect(functions.textToMorse('hello world'))
        .toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')
    })
    it('translate possible ASCII characters', function () {
      expect(functions.textToMorse('abcdefhijklmnopqrstuvwxyz0123456789.,:?\'-/)("@= '))
        .toBe('.- -... -.-. -.. . ..-. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .--  -.-- --.. ----- .---- ..--- ...-- ....- ..... -.... --... ---.. ----. .-.-.- --..-- ---... ..--.. .----. -....- -..-. -.--.- -.--. .-..-. .--.-. -...- /')
    })
  })

  it('converts a normal string that appears as sarcastic', function () {
    expect(functions.sarcasticConverter('meow'))
      .toMatch(/^\w+$/)
  })
  it('converts text to binary', function () {
    expect(functions.textToBinary('hello world 1 2 3 4 5 6 7 8 9'))
      .toBe('1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100 100000 110001 100000 110010 100000 110011 100000 110100 100000 110101 100000 110110 100000 110111 100000 111000 100000 111001')
  })
  it('reverse the given string', function () {
    expect(functions.reverseString('hello world'))
      .toBe('dlrow olleh')
  })
})
