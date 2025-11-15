// function printFullName () {
//     let FirstName = 'sahil'
//     let LastName = 'pawar'
//     let space = " "
//     let fullName = FirstName+ space +LastName
//     return fullName

// }
// console.log(printFullName());

// Adding the 2 number in function 
// function addTwoNumber() {
//     let num1 = 12
//     let num2 = 4
//     let total = num1 + num2
//     return total
// }
// console.log(addTwoNumber())

// Function with 1 arguments 
// function areaOfCircle(r) {
//     let area = Math.PI*r*r
//     return area
// }
// console.log(areaOfCircle(10))

// Function with 2 arguments 
// function sumTwoNum (num1, num2) {
//     let sum = num1 + num2
//     return sum 
// }
// console.log(sumTwoNum(10, 20))

// Function with 2 arguments 
// function printFullName (firstName, lastName) {
//     let fullName = firstName + lastName
//     return `${firstName} ${lastName}`
// }
// console.log(printFullName('sahil', 'pawar'))

// Function with multiple parameters 
// function AddingFourValue (num1, num2, num3, num4) {
//     let total = num1 + num2 + num3 + num4
//     return total
// }
// console.log(AddingFourValue(5, 10, 15, 30))

// Function with many arguments 
function sumArrayValue (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5, 6];

console.log(sumArrayValue(numbers))