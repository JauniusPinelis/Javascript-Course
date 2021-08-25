import { getCipherInfo } from "crypto";

var messageTypescript: string = "Server side application"


// Typescripts types

// string
var messageTypescript: string = "Server side application"
messageTypescript = 3 + messageTypescript.toLowerCase();

// numbers
let price: number = 4;
let doubleNumber: number = 7.25;

// let largeNumber: bigint = 44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444n;

// boolean
let booleanValue: boolean = true;

if (booleanValue){
    // console.log("this is true");
}

// symbol
let symbolValue:symbol =  Symbol("");

// object
let person: object;

person = {
    name: "John"
}

// object property types

let person2:{
    firstName: string,
    lastName: string;
    age: number;
}

person2 = {
    firstName: "Peter",
    lastName: "Pan",
    age: 18,
}

let person3:{
    firstName: string,
    lastName: string;
    age: number;
} = {
    firstName: "Peter",
    lastName: "Pan",
    age: 18,
}

//arrays

let colors: string[]
// colors[0] = "red";
// colors[1] = "blue";

// colors.push("grey");

let numbers: number[] = [1.5,2,2];
numbers.map(n => n * 2);

// multitype array
let scores: (string | number )[];

scores = ["test", 2];

let multitype: (string | number);

multitype = 2;
multitype = "2";

// Tuples

let tupleExample: [string, number, boolean]
tupleExample = ['',0, true];

//enum
enum Color {
    red,
    green,
    blue
}

let carColor: Color;
carColor = Color.blue;

enum Weekday {
    Monday,
    Tuesday,
    Wednesday = 5,
    Thursday =  8,
    Friday
}

let stringWeekday: Weekday = Weekday.Monday;

if (stringWeekday == Weekday.Monday){
    
}

//any

let dontknowtype: any;
dontknowtype = "string";

dontknowtype = 8;

// never

function notReturningAnything(): never{
    throw new Error("");
}

let loop = function forever(): never{
    while(true){

    }
}

// function with optional

function add(number1: number, number2: number, number3?: number): number{
    if (typeof number3 != 'undefined'){
        return number1 * number2 * number3;
    }
    return number1 * number2;
}

let returnedNumber = add(1,2);

// Default parameters

function addDefault(number1: number = 1, number2: number = 2, number3?: number): number{
    if (typeof number3 != 'undefined'){
        return number1 * number2 * number3;
    }
    return number1 * number2;
}

addDefault(3,4);

addDefault();

// Rest parameters

function restParameterFunction(...rest: number[]){
    return rest.length;
}

// function overloading

// function add(a: number, b: number): number{
//     return a + b ;
// }

// function add(a: string, b: string): string{
//     return a + b ;
// }

// Class

class Person{
    private name:string;
    public age: number;
    private readonly address:string = "My address";

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
        this.address = "My address";
    }

    // public UpdateAddress(address: string): void{
    //     this.address = address;
    // }

    private getInfo(): string {
        return `My name is ${this.name} and age is ${this.age}`
    }

    public getInfoPublic(): string{
        return this.getInfo();
    }
}

var personFromClass1 = new Person("Peter", 20);
console.log(personFromClass1.age)

var personFromClass2 = new Person("Bob", 22);
console.log(personFromClass2.getInfoPublic());

// inheritance

class CustomPerson {
    public firstName: string = "";
    public lastName: string = "";
    private age: number = 20;

    public getInfo(): string{
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Employee extends CustomPerson  {
    
    public salary: number = 0;
}

class Customer extends CustomPerson  {
    public buyingHistory: string[] = ["nothinf"];
}

var employee1 = new Employee;
    employee1.salary = 20;
    employee1.firstName = "Bob";

console.log(employee1.getInfo());

// call parent constructor with super()
class Car {
    private _brand: string;

    constructor(brand: string){
        this._brand = brand;
    }

    public getBrand(): string{
        return this._brand;
    }
}

class PeugeotCar extends Car{
    constructor(){
        super("Peugeot")
    }
}

let peugeot = new PeugeotCar();
console.log(peugeot.getBrand());

// Method overwriting

class Fiat extends Car {
    constructor(){
        super("Fiat")
    }

    public getBrand(): string {
        return "this is not " + super.getBrand();
    }
}

let fiatCar = new Fiat();
console.log(fiatCar.getBrand());

// Static methods
class MathFunctions {
    public static Square (number: number) : number {
        return number * number;
    }

    public static SquareRoot(number: number): number {
        return Math.sqrt(number);
    }
}

let squareNumber = MathFunctions.Square(5);
console.log(squareNumber);

let squareRootNumber = MathFunctions.SquareRoot(4);
console.log(squareRootNumber);

// Static properties

class SimpleClass {
    static counter: number = 0;

    constructor(){
        SimpleClass.counter++;
    }
}

let object1 = new SimpleClass();
let object2 = new SimpleClass();
let object3 = new SimpleClass();
console.log(SimpleClass.counter);

//abstract classes and abstract methods

abstract class DoNotCreate{
    abstract GetNumber(): number;

    public PrintNumber(): void{
        console.log(this.GetNumber)
    }
}

class ChildClass extends DoNotCreate {
    GetNumber(): number {
        return 5;
    }
}

let objectCreate = new ChildClass();

// object types

type CarType = {
    brand: string,
    age: number,
}

function PrintCar(car: CarType): void{
    console.log(car.age + " " + car.brand)
};

let carObject: CarType = {
    brand: "Toyota",
    age: 10
};

let cars: CarType[] = [];
cars.push(carObject);

// interfaces
interface CarInterface3 {
    brand: string,
    age: number
}

interface CarInterface {
    price: number
    GetInfo(): string;
}

interface CarBaseInterface {
    Drive():void
}

let carObject2: CarInterface = {
  
    
    price: 20000,

    GetInfo(): string{
        return "";
    },

   
}

// Classes can implement interfaces

class CustomCar implements CarBaseInterface, CarInterface {
    price: number;
    GetInfo(): string {
        throw new Error("Method not implemented.");
    }
    Drive(): void {
        throw new Error("Method not implemented.");
    }

}

//Generics

function identity<T>(arg: T): T {
    return arg;
  }

identity<string>("5");
identity<number>(5);