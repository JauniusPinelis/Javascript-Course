//Oop principles: Encapsulation and Abstraction

class Person {
    constructor(first_name, last_name){
        var _first_name = first_name;
        var _last_name = last_name;

        this.getName = function() { return _first_name; }
        this.getLastName = function() { return _last_name; }
    }

    getInfo(){
        return `${this.getName()} + ${this.getLastName()}`
    }
}

let person = new Person("John", "Smith");

// console.log(person.getName());

// console.log(person.getInfo());

// Inheritance and polymorphism

class Person2 {

    constructor(first_name, last_name){
        this.first_name = first_name;
        this.last_name = last_name;
    }
}

class StaffMember extends Person2 {
    constructor(first_name, last_name){
        super(first_name, last_name)
    }

    getCompany(){
        return "Microsoft";
    }

    getSalary(){
        return 2000;
    }
}

class StaffManager extends StaffMember {
    constructor(first_name, last_name){
        super(first_name, last_name);
    }

    getSalary(){
        return 3000;
    }

    getInfo(){
        return this.first_name;
    }
}

let staffMember = new StaffMember("Adam", "Smith");
let staffManager = new StaffManager("Monika", "Smith");

console.log(staffMember.getSalary());
console.log(staffManager.getSalary());

// console.log(staffMember.getSalary());
// console.log(staffMember.getCompany());
