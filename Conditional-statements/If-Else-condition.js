

const readline = require ('readline-sync');

// function evenOddChecker(){
    
//     let userInput = readline.question('Enter the value :');
    
//     let value = Number(userInput);
//     if (value / 2 === 0) {
//         console.log(value,' is even value')
//     } else {
//         console.log(value,' is odd value')
//     }
// }
// evenOddChecker();


// Grade to student based of marks


// function gradeChecker(){

//     let userInput =  readline.question('enter yours marks :')
//     let grade = Number(userInput);
    
//     if (grade >= 80 && grade <= 100){
//         console.log('Your grade is A')
//     } else if (grade >= 70 && grade <= 79){
//         console.log('Your grade is B')
//     } else if (grade >= 60 && grade <= 69){
//         console.log('Your grade is C')
//     }else if (grade >= 50 && grade <= 59) {
//         console.log('Your grade is D')
//     }else if (grade >= 0 && grade <= 49 ){
//         console.log('Your are Fail')
//     } else {
//         console.log('Please enter valid marks')
//     }
// };
// gradeChecker();

// Season checker depends on the months

// let userInput = readline.question('Enter the month :');
// let Season = userInput.toLowerCase();

// if (userInput === 'September' ||userInput=== 'October' ||userInput=== 'November'){
//     console.log('The season is Autumn')
// } else if (userInput === 'December' ||userInput=== 'January' ||userInput=== 'February'){
//     console.log('The season is Winter')
// } else if (userInput === 'March' ||userInput=== 'April' ||userInput=== 'May'){
//     console.log('The season is Spring')
// } else if (userInput === 'June' ||userInput=== 'July' ||userInput=== 'August'){
//     console.log('The season is Summer')
// } else {
//     console.log('Please enter valid month')
// }

//Day is weekend day of Working day


function workingOrWeekendDay(){

    const userInput = readline.question('Enter the day: ');
    let day = userInput.toLowerCase();
    
    (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday')
    ?console.log("This is working day")
    :console.log('This is weekend day')
}

workingOrWeekendDay();