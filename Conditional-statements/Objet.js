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
const person = {
    FirstName : 'sahil',
    LastName : 'pawar',
    Age : 22,
    Country : 'India',
    Skills : ['Html', 'Css', 'Javascript', 'Nodejs', 'React'],
    Title : 'Teacher',
    Address : {
        Street : 'HV colony mg road',
        Pin : 263546,
        City : 'Chh. sambhajinagar',
    }
}
    const copyPerson = Object.assign({}, person) 
    console.log(copyPerson)
