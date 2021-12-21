var arr0 = ['Arohan', 16] // the elements can be of any datatype

// multidimensional arrays
var arr1 = [['Trailblazers', 0], ['Seahawks', 3]]

// accessing elements
var arr2 = [10, 20, 30]
console.log(arr2[1]) // prints the second value

// arrays are mutable
var arr3 = [1, 2, 3]
arr3[0] = 4

// accessing elements in multidimensional arrays
var arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10], [11, 12, 13]], [14, 15]]
arr3[0][0] // if you want to access the first value
console.log(arr3[2][3][0]) // if you want to access 11

// manipulating arrays using push() -- adds an item to the end
var arr4 = [1, 2, 3, 4]
arr4.push(5, 6)

// manipulating an array with pop() -- removes the last item
var arr5 = [5, 4, 3, 2, 1]
var removed = arr5.pop() // .pop() returns the removed value

// manipulating an array with shift() -- removes the first item
var arr6 = [1, 2, 3]
var removed = arr6.shift()

// manipulating an array with unshift() -- adds a value to the beginning
var arr7 = ['Hi', 'Howdy', 'Hola']
arr7.unshift('Hello')

