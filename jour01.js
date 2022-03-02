// Hello World! //

var sentence = "Hello World!"
console.log("Hello World!")

// String //

var test = "My name is kévin"
console.log(test)

// Concatenation //
var firstName = "kévin"
console.log("Nice to meet you "+ firstName)

// String Length //
var testLength = "I'm very long !"
console.log(testLength.length)

// Replace //
var food = "croissant is meh"
food = food.replace("meh","so good")
console.log(food)

// Up and Down //
var basic = "This is Cool"
var basicUp = basic.toUpperCase()
var basicDown = basic.toLowerCase()
console.log(basic)
console.log(basicUp)
console.log(basicDown)

// Split //
var word = "banana"
var letters = word.split("")
console.log(letters)

// Template //
var age = "33"
var template = `I'm ${age} years old` 
console.log(template)
