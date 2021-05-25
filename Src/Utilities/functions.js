module.exports = {
  uuid: function () {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    const randomNumber = function (container) {
      return Math.floor(Math.random() * container.length)
    }
    const randomCharacter = function (length) {
      return characters.charAt(randomNumber(characters))
    }

    const makeKeyPart = function (length) {
      return Array(length).fill().map(function () {
        return randomCharacter(length)
      }).join('')
    }

    return `${makeKeyPart(8)}-${makeKeyPart(4)}-${makeKeyPart(4)}-${makeKeyPart(4)}-${makeKeyPart(12)}`
  },
  randomStr: function (length) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  },
  textToMorse: function (text) {
    const morseCodeDictionary = {
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

    const splittedText = text.toLowerCase().split(/(?!$)/)

    return splittedText.map(function (char) {
      return morseCodeDictionary[char]
    }).join(' ')
  },
  sarcasticConverter: function (text) {
    const possibleOutcomes = ['low', 'high']
    const outcome = function () {
      return possibleOutcomes[
        Math.floor(Math.random() * possibleOutcomes.length)
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
