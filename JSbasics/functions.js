function reusableFunction() {
    console.log('Hello World')
}
reusableFunction()

function f1(a, b) {
    console.log(a-b);
}
f1(20, 15)

function addOne(num) {
    return num + 1
}
console.log(addOne(10))

function change(num) {
    return (num + 5) / 3
}
var changed = change(25)