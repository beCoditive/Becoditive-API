const functions = require('../../Src/Utilities/functions')

test('uuid', function(){
    expect(functions.uuid())
    .toMatch(/^[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}$/)
})

test('textToMorse', function(){
    expect(functions.textToMorse("hello world"))
    .toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
})

test('stringReverse', function() {
    expect(functions.reverseString("hello world"))
    .toBe("dlrow olleh")
})