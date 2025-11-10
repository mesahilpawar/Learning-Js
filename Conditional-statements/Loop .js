// for loop for print first 5 numbers 
// let sum = 0;

// for (i = 0; i < 5; i++)
// console.log(i);

//for loop for addition of first 10 numbers 
// let sum = 0;

// for (i = 0; i < 11; i++){
//     sum += i;
// }
// console.log(sum)

// for loop for the only first 10 even number addition 
// let sum = 0;
 
// for (i = 0; i < 11; i += 2){
//     sum += i;
// }
// console.log(sum)

// For loop using for the reverse the array
// const sum = [1, 2, 3, 4, 5]

// for (let i = 5; i >= 0; i--){
//     console.log(sum[i])
// }

// While loop to count the numbers in reverse to 0

// const readline = require ('readline-sync');
// let userInput = readline.question('Enter the positive number :');
// let count = Number(userInput);
// while (count > 0){
//     console.log(count)
//     count--
// } 


// While loop
// let count = 11 ;
// do {
//     console.log(count)
//     count++
// }while (count < 11)

//for of loop
// const numbers = [1, 2, 3, 4, 5, 6]
// for (const number of numbers) {
//     console.log(number)
// }

// const countries = ['India', 'America', 'West indies', 'France', 'Indonesia'] 
// for (const country of countries){
//     console.log(country.toUpperCase())
// }

// forEach loop to take the index number of each country in array
// const countries = ['India', 'America', 'West indies', 'France', 'Indonesia'] 
// countries.forEach((country, i, arr) => {
//     console.log(i, country.toUpperCase())
// })

// For In loop
// const user = {
//     FirstName : 'Sahil',
//     LastName : 'Pawar',
//     Age : '22',
//     Country : 'India',
//     Skills : ['Html', 'Css', 'Javascript', 'Java', 'React']
// }
// for (const key in user){
//     console.log(key, user[key])
// }

//Break
// for (i = 0; i < 5; i++){
//     if (i == 3){
//         break
//     }
//     console.log(i)

// }


//continue
for (i = 0; i < 5; i++){
    if (i == 3){
        continue
    }
    console.log(i)

}