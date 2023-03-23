// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: the method used in the console.log statement will return the length of the string
// b) Verify and explain: pretty self explanatory. Whatever is used with length will return the length of what is before the .length method. used MDN Web Docs to verify. "The push() method adds one or more elements to the end of an array and returns the new length of the array."

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: it will return "o" because that letter is at index 4 of the given variable.
// b) Verify and explain: it did indeed return "o". Stuff is 0 indexed and therefore returned the character at the 4th index starting from 0.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: it will return an error because the variable index is not inside of bracket notation, therefore, the computer does not know that one is looking for the index of referenced index variable.
// b) Verify and explain: the console returned the string indexed at 1 starting from 0, which was "Ruby". I thought that brackets always had to be used when referencing an array, but I was wrong.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: the method .toUpperCase converts the string given into all uppercase letters. Since we are telling it to convert the variable weekendDays to uppercase, it will then convert all characters in referenced variable to uppercase; in this case, the variable contains an array with two strings. It will convert all strings in array to upper case letters.
// b) Verify and explain: I was wrong. The console threw an error. This is because .toUpperCase() cannot be used with an array that contains two values.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: it will return an error because two methods are being used. If we used typeOf with dataTypes, then it would return array. Since length is being used, it will not recognize it.
// b) Verify and explain: The console returned "number". This is because dataTypes is an array. However, because .length was used, this then converted it into a number. Which is what would be returned if we erased typeof; 4 would be returned.
