// const person ={
//     FirstName : 'Sahil',
//     LastName : 'pawar',
//     Age : 22,
//     Country : 'India',
//     Skills : ['Html', 'Css', 'Python', 'Javascript', 'React', 'C++', 'Nodejs']
// };
// person.Title = 'Teacher'
// person.Skills.push = ('MongoDB')
// console.log(person);

// Object Method
// const person = {
//     FirstName : 'sahil',
//     LastName : 'pawar',
//     Age : 22,
//     Country : 'India',
//     Skills : ['Html', 'Css', 'Javascript', 'Nodejs', 'React'],
//     Title : 'Teacher',
//     Address : {
//         Street : 'HV colony mg road',
//         Pin : 263546,
//         City : 'Chh. sambhajinagar',
//     }
// }
//     const copyPerson = Object.assign({}, person) 
//     console.log(copyPerson)

// exercise of Object 
// const dog = {
//     Name : 'Milo',
//     Legs : 4,
//     Color : 'Brown',
//     Age : 7,
//     Bark : 'woof woof',
//     getDogInfo: function (){
//     return`Dog name is ${this.Name}Dog color is ${this.Color}`
//     },


// }
// console.log(dog.getDogInfo());
// dog.breed = 'cosco';

// console.log(dog);

// Exercise no 2
// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// };
// let maxSkills = 0;
// let personWithMoreSkills = "";

// for (let user in users) {
//     let skillCount = users[user].skills.length;

//     if (skillCount > maxSkills) {
//         maxSkills = skillCount;
//         personWithMoreSkills = user;
//     }
// }

// let maxCount = 0;
// let personWithMorePoints = "";

// for (let user in users){
//     let count = users[user].points;
    

//     if (count > maxCount) {
//         maxCount = count;
//         personWithMorePoints = user;

//     }

    
// }
// console.log(personWithMoreSkills);
// console.log(personWithMorePoints);

//Exercise no 2
// const personAccount ={
//     firstName : "Sahil",
//     lastName : "pawar",
//     incomes : 500000,
//     expenses : [
//         totalIncome = 600000,
//         totalExpense = 400000,
//         accountInfo = 'Business Account',
//         addIncome = 500000 ,
//         addExpense = 450000,
//         accountBalance = 320000,

//     ]


// }
// console.log(personAccount);