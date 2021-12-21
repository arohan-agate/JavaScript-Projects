// generates some random number n, such that 0 <= n < 1
console.log(Math.random())

// get a random whole number
var randomNumberBetween0and10 = Math.floor(Math.random() * 11)
console.log(randomNumberBetween0and10)

// generate a random number within a range
function randomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMax + 1)) + ourMin
}
console.log(randomRange(1, 5))


// Ternary Operator
function checkEqual(a, b) {
    return a === b ? true : false;
}

// Multiple Ternary Operators
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}