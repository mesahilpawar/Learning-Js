// exercise of functions 
// function fullName (FirstName ='sahil', lastName ='pawar'){
//     let space = ' '
//     let fullName = FirstName + space + lastName
//     return fullName
// }
// console.log(fullName())
// console.log(fullName ('aniket', 'sharma'))

//exercise no. 2
// function addNumbers (a = 5 , b = 8){
//     let sum = a + b 
//     return sum
// }
// console.log(addNumbers())
// console.log(addNumbers(10,15))

//exercise no.3
// const readline = require ('readline-sync');

// function checkSeason (){
//     // takes input from the user
//     let userInput = readline.question('Enter the month :');
//     let Season = userInput.toLowerCase(); // convert them in lower case

//     // checking the season with user's entered season 
//     if (Season === 'march' || Season === 'april' || Season === 'may'){
//         console.log("This season is Spring")
//         return "Spring";
//     } else if (Season === 'june' || Season === 'july' || Season === 'august'){
//         console.log("This season is Summer");
//         return "Summer";
//     }else if (Season === 'september' || Season === 'october' || Season === 'november'){
//         console.log("This season is Autumn");
//         return "Autumn";
//     }else if (Season === 'december' || Season === 'january' || Season === 'february'){
//         console.log("This season is Winter");
//         return "Winter";
//     }

// }

// const season = checkSeason();
// console.log(season);

// callback function setinterval

// function sayHello(){
//     console.log("hello")
// }
// setInterval(sayHello, 2000)

// const numbers = [1, 2, 3, 4, 5]
// for (const number of numbers){
//     console.log(number)
// }

// Destructuring 
// const name = ["sai", "ram", "sham", "om"]
// const [name0, name1, name2, name3] = name
// console.log(name2)

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'REACT'],
//     ['Node', 'Express', 'MongoDB']
// ]
// const [frontEnd, backEnd] = fullStack
// console.log("frontEnd language used " + frontEnd, "backEnd language used " + backEnd)

// const num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Sahil"]
// const [num1, num2, num3, num4, ...rest] = num
// console.log(num1, num2, num3, num4, rest)

// const Contries = [
//     'India',
//     'America',
//     'Germany',
//     'France',
//     'Iceland',
// ]
// let [Ian, Ame, ...allContries ] = Contries
// console.log(Ian, Ame, allContries)

// const country = [
//     ['India', 'Mumbai'],
//     ['America', 'New York'],
//     ['France', 'Paris']
// ]
// for (const[ countries, city] of country) {
//     console.log(countries, city)
// }

// access the value of an object using destructuring.
const rectangle = {
    width : 30,
    height: 25,
}
let {width, height} = rectangle
console.log(width, height)