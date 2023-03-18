// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: 
    /*
    -Need conditional statement
    -output: if the number is below, above, or at boiling point. Returns concatenated string that explains whether the variable is at, above, or below boiling point.
    */

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

const boilingPoint = (temp1) => {
    if(temp1 === 212) {
        return `${temp1} is at boiling point.`
    } else if(temp1 > 212) {
        return `${temp1} is above boiling point.`
    } else if(temp1 < 212) {
        return `${temp1} is below boiling point.`
    } else {
        return "Dang. This is not okay."
    }
}

console.log(boilingPoint(temperature1)) // Answer: 42 is below boiling point.
console.log(boilingPoint(temperature2)) // Answer: 350 is above boiling point.
console.log(boilingPoint(temperature3)) // Answer: 212 is at boiling point.


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: 
    /* 
        -Need array accessor, not mutator
            -use method: concat()
            -use concat for both variables to combine
            -save concatted array to a new variable
        -return: total length of new combined array
            console.log the new array and use .length method
        Reference:
            -MDN Web Docs
        
    */

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

let concattedArray = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

console.log(concattedArray.length) // Answer: 9

// Expected output: 9



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
    /* 
        -strings cannot be reversed. 
        -have to turn string into array, then reverse array, then turn back into string.
        Methods:
            - .split("")
            - .split("").reverse()
            - .split("").reverse().join("")
        Reference:
            -used notes from Sarah Arrays lecture
    */

const currentCohort = "Bravo 2023"

console.log(currentCohort.split("").reverse().join("")) // Answer: 3202 ovarB

// Expected output: "3202 ovarB"



// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
    /*
        -I have to find the index at the value given by the variable
        -use array.lastIndexOf() method
        -plug in variable given into the method to find it at the specified value of the variable
        Referenced: 
        -MDN Web Docs to find method
    */

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
console.log(myNumbers.lastIndexOf(givenValue1)) // Answer: 7
// Expected output: 7

const givenValue2 = 10
console.log(myNumbers.lastIndexOf(givenValue2)) // Answer: 8

// Expected output: 8




// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
    /* 
        -use a method that will place the arrays in order
        -use a method that will reverse the arrays
        -console should display arrays sorted in reverse
        Referenced: 
        -MDN Web Docs
        
    */

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
console.log(sanDiegoSummerTemperatures.sort().reverse()) // Answer: [82, 80, 79, 77, 76, 73, 72]
// Expected output: [82, 80, 79, 77, 76, 73, 72]


const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
console.log(sanDiegoWinterTemperatures.sort().reverse()) // Answer [68, 67, 66, 66, 62, 59, 59]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
