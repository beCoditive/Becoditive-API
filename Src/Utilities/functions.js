const randomNumber = function (length) {
  return Math.floor(Math.random() * length)
}
const randomChoice = function (list) {
  return list[randomNumber(list.length)]
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
  randomChoice,
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

    return splitted.map(function (character) {
      return morseCode[character]
    }).join(' ')
  },
  sarcasticConverter: function (string) {
    const possibleOutcomes = ['low', 'high']
    const outcome = function () {
      return randomChoice(possibleOutcomes)
    }

    return string.split('').map(function (character) {
      if (outcome() === 'low') {
        return character.toLowerCase()
      }
      return character.toUpperCase()
    }).join('')
  },
  textToBinary: function (string) {
    return string.split('').map(function (character) {
      return character.charCodeAt(0).toString(2)
    }).join(' ')
  },
  reverseString: function (string) {
    return string.split('').reverse().join('')
  }

}
