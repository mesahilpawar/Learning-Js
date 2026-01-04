// class person {
//     constructor (FirstName, LastName, Age, Title){
//         this.FirstName = FirstName;
//         this.LastName = LastName;
//         this.Age = Age;
//         this.Title = Title;
//     }
//     getFullInfo(){
//         const fullInfo = this.FirstName + "" + this.LastName + "" + this.Age + "" + this.Title
//         return fullInfo
//     }
// }
// const person1 = new person ('sahil', 'pawar', 23, 'Soft Engg.');
// const person2 = new person ('sai', 'patil', 25, 'Electric Engg.');
// console.log(person1);
// console.log(person2);



class personInfo {
    constructor (name, marks, ranks, grank ){
        this.name = name ;
        this.marks = marks ;
        this.ranks = ranks ;
        this.grank = grank;
    }
    getFullInfo (){
        const fullInfo = this.name + "" + this.marks + "" + this.ranks + "" + this.grank
        return fullInfo;
    }
}
const Fullinfo = new personInfo('sahil', 340, 15000, 70000);
console.log(Fullinfo);