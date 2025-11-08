const readline = require ('readline-sync');

// License age checker
function licenseChecker(){
    // taking user input
    let userInput = readline.question('Enter your age ');
    
    // parsing the number in integer format
    let age = Number(userInput);

    switch (true) {
        case (age >= 18):
            console.log('Your age is valid for driving');
            break
        case (age < 18):
            let gap = 18 - age;
            console.log('your age is not valid for the driving after ', gap, ' years later you are eligible for the driving')
            break
        case (age == 0):
            console.log('You can not add zero as age')
            break
        default:
            console.log('Please enter valid number')
    }
}