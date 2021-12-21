function booleanChecker(b) {
    if (b) {
        return 'True!'
    }
    else {
        return 'False!'
    }
}
booleanChecker(true);

function isEven(num) {
    if (num % 2 == 0) {
        return true
    }
    else {
        return false
    }
}
isEven(11);

// Equality Operator (==): Checks whether two values are the same, converts between data types. i.e.: 3 == '3' -> True
// Strict Equality Operator (===): Checks whether values within the same data type are the same. i.e.: 3 === '3' -> False

function compareEquality (a, b) {
    if (a == b) {
        return true
    }
    return false
}

function evalSize(num) {
    if (num < 5) {
        return 'Tiny'
    }
    else if (num < 10) {
        return 'Small'
    }
    else if (num < 15) {
        return 'Medium'
    }
    else if (num < 20) {
        return 'Large'
    }
    else if (num >= 20) {
        return 'Huge'
    }
}
evalSize(14)

// using switch statements
function caseInSwitch(val) {
    var answer = ""
    switch(val) {
        case 1:
            answer = "alpha"
            break
        case 2:
            answer = "beta"
            break
        case 3:
            answer = "gamma"
            break
        case 4:
            answer = "delta"
            break
        default:
            answer = "epsilon"
            break
    }
    return answer
}
console.log(caseInSwitch(9))

function sequentialSizes(val) {
    var answer = ""
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low"
            break
        case 4:
        case 5:
        case 6:
            answer = "Mid"
            break
        case 7:
        case 8:
        case 9:
            answer = "High"
            break
        default:
            answer = "Unknown"
            break
    }
    return answer
}
console.log(sequentialSizes(6))