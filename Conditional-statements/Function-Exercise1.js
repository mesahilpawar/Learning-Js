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
const readline = require ('readline-sync');

function checkSeason (){
    // takes input from the user
    let userInput = readline.question('Enter the month :');
    let Season = userInput.toLowerCase(); // convert them in lower case

    // checking the season with user's entered season 
    if (Season === 'march' || Season === 'april' || Season === 'may'){
        console.log("This season is Spring")
        return "Spring";
    } else if (Season === 'june' || Season === 'july' || Season === 'august'){
        console.log("This season is Summer");
        return "Summer";
    }else if (Season === 'september' || Season === 'october' || Season === 'november'){
        console.log("This season is Autumn");
        return "Autumn";
    }else if (Season === 'december' || Season === 'january' || Season === 'february'){
        console.log("This season is Winter");
        return "Winter";
    }

}

const season = checkSeason();
console.log(season);