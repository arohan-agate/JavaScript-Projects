// while loops
var arr = []
var i = 0
while (i < 5) {
    arr.push(i)
    i++
}

// for loops
var arr2 = []
for (var i = 0; i < 5; i++) {
    arr2.push(i)
}
console.log(arr2)

// iterating through an array with a loop
var arr3 = [1, 2, 3, 4, 5]
var total = 0
for (var i = 0; i < arr3.length; i++) {
    total += arr3[i]
}
console.log(total)

// nested for loops
var output = ''
var arr2D = [[1, 2], [3, 4, 5], [7], [8, 9, 10]]
for (var r = 0; r < arr2D.length; r++) {
    for (var l = 0; l < arr2D[r].length; l++) {
        output += (arr2D[r][l] + ' ')
    }
}
console.log(output);

// iterating with Do-While loops -- executes the code in the while-loop once, then checks the condition]
var num = 0
do {
    console.log(num)
    num++
} while (num < 10)
