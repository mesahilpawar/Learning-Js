// const Countries = ['India', 'Iceland', 'America', 'French']
// const newCountries = Countries.map(function (country){
//     return country.toLocaleUpperCase()
// })
// console.log(newCountries)

// Example of map methods
// const Names = ['sai', 'ram', 'sham', 'ben', 'lin']
// const newName = Names.map (function (Name){
//     return Name.toLocaleUpperCase()
// })
// console.log(newName)

// Using Arrow function
// const Names = ['sai', 'ram', 'sham', 'lin', 'ben']
// const newNames = Names.map ((name) => name.toLocaleUpperCase())
// console.log(newNames)

// Calculating squares of numbers present in a array using arrow function of map method
// const numbers = [1, 2, 3, 4, 5]
// const squares = numbers.map((n) => n ** 2 )
// console.log(squares)

// Learning Filter method
// const countries = ['Italy', 'India', 'Germany', 'Hungary', 'Norway', 'Paraguay']
// const countryNameWithY = countries.filter((country) =>
//     country.includes("y")
// )
// console.log(countryNameWithY)

// Example for searching how many people names has letter "A"
// const Names = ["sahil", "rahul", "shaam", "sumit", "amit"];
// const namesWithA = Names.filter(Name =>
//     Name.includes("a"));
// console.log(namesWithA)

// Learning the reduce method
// function sumOfNumbers() {
//   const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //   const sum = numbers.reduce((prevSum,next)=> prevSum + next);
// // deep explanation of reduce function is below 
//   const sum = numbers.reduce((acc, cur) => {
//     console.log("Accumulate value ",acc, " Current value :",cur);
//     acc = acc + cur;
//     console.log("Accumulate value ",acc, " Current value :",cur);
//     console.log("");
//     return acc;
//   });
//   console.log(sum);
// }

// sumOfNumbers();

// Printing full name using reduce method
// const Name = ['sahil', 'pawar']
// const FullName = Name.reduce ((First, Last) => First + " " + Last
// )
//     console.log(FullName)

// calculating the multiplication of the array elements 
const num = [1, 2, 3, 4, 5];
const mul = num.reduce((Preval, Newval) => Preval * Newval);
console.log(mul);