const randomNumber = function (length) {
  return Math.floor(Math.random() * length)
}
const randomCharacter = function (string) {
  return string.charAt(randomNumber(string.length))
}

const randomString = function (length, from = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
  return Array(length).fill().map(function () {
    return randomCharacter(from)
  }).join('')
}

module.exports = {
  randomNumber,
  randomCharacter,
  randomString,
  uuid: function () {
    const fromString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    const makeUUIDPart = function (length) {
      return randomString(length, fromString)
    }

    return `${makeUUIDPart(8)}-${makeUUIDPart(4)}-${makeUUIDPart(4)}-${makeUUIDPart(4)}-${makeUUIDPart(12)}`
  },
  textToMorse: function (text) {
    const morseCode = {
      a: '.-',
      b: '-...',
      c: '-.-.',
      d: '-..',
      e: '.',
      f: '..-.',
      g: '--.',
      h: '....',
      i: '..',
      j: '.---',
      k: '-.-',
      l: '.-..',
      m: '--',
      n: '-.',
      o: '---',
      p: '.--.',
      q: '--.-',
      r: '.-.',
      s: '...',
      t: '-',
      u: '..-',
      v: '...-',
      w: '.--',
      y: '-.--',
      z: '--..',
      1: '.----',
      2: '..---',
      3: '...--',
      4: '....-',
      5: '.....',
      6: '-....',
      7: '--...',
      8: '---..',
      9: '----.',
      0: '-----',
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
    }

    const splitted = text.toLowerCase().split(/(?!$)/)

    return splitted.map(function (char) {
      return morseCode[char]
    }).join(' ')
  },
  sarcasticConverter: function (text) {
    const possibleOutcomes = ['low', 'high']
    const outcome = function () {
      return possibleOutcomes[
        randomNumber(possibleOutcomes.length)
      ]
    }

    return text.split('').map(function (char) {
      if (outcome() === 'low') {
        return char.toLowerCase()
      }
      return char.toUpperCase()
    }).join('')
  },
  textToBinary: function (string) {
    return string.split('').map(function (char) {
      return char.charCodeAt(0).toString(2)
    }).join(' ')
  },
  reverseString: function (string) {
    return string.split('').reverse().join('')
  }

}
