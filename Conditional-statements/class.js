class person {
    constructor (FirstName, LastName, Age, Title){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Age = Age;
        this.Title = Title;
    }
    getFullInfo(){
        const fullInfo = this.FirstName + "" + this.LastName + "" + this.Age + "" + this.Title
        return fullInfo
    }
}
const person1 = new person ('sahil', 'pawar', "23", 'Soft Engg.')
console.log(person1)