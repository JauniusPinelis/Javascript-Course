// plain object

let person =  {

    first_name: "Tom",
    last_name: "Edisson",

    address: {
        street: "Gallover street",
        country: "USA"
    },

    getInfo: function(){
        return `name: ${this.first_name} ${this.last_name}, address: ${this.address.street} ${this.address.country} `
    }
}

// console.log(person.getInfo())

// Factory pattern

let createPerson = function(first_name, last_name){
    return {
        first_name,
        last_name,
        getInfo: function(){
            return `name: ${this.first_name} ${this.last_name} `
        }
    }
}

let person1 = createPerson("Testname", "TestSurname");
// console.log(person1.getInfo());

// More class oriented approach
// Constructor

function personClass(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;

    this.getInfo = function(){
        return `name: ${this.first_name} ${this.last_name} `
    }
}

let tomEdisonPerson = new personClass("Tom", "Edisson");
// console.log(tomEdisonPerson.getInfo());

let charlesDarwinPerson = new personClass("Charles", "Darwin");
// console.log(charlesDarwinPerson.getInfo());

// Using ES6 classes

class PersonNew {

    constructor(first_name, last_name){
        this.first_name = first_name;
        this.last_name = last_name;
    }

    getInfo() {
        return `name: ${this.first_name} ${this.last_name}`
    }
}

let tomEdisonPerson2 = new PersonNew("Tom", "Edisson");
// console.log(tomEdisonPerson2.getInfo());

