// let variableWithValue = 10;

// let textQuatationMarks = "some text " + variableWithValue + " after text" ;
// let textApostrophoes = '\'Some\' text ';
// let textBackTick = `Some text: ${variableWithValue}`;

// let yesValue;
// let noValue = false;

// let isGreater = 4 > 5;
// console.log(typeof(0));
// console.log(typeof("text"));
// console.log(typeof(true));
// console.log(typeof(alert));
// console.log(typeof(null));

//alert(6 + 5);
// let result = prompt("This is a prompt");
// console.log(typeof(result));
// //let isAllowed = confirm("Are you allowed");

// let numberValue = Number(result);
// console.log(typeof(numberValue));
// console.log(numberValue * 5);

// let stringValue = String(numberValue);
// console.log(typeof(stringValue));
// console.log(stringValue * 5);

// let boolValue = Boolean(2)
// console.log(boolValue);

// let number1 = 5;
// let number2 = 2;

// let string1 = "baa";
// let string2 = "aaab";

// let string3 = "02";

// let boolValue = true;
// let boolValueNumber = 1;

// // strict equality
// console.log(boolValue === boolValueNumber)
// // non strict quality
// console.log(boolValue == boolValueNumber)

// // If Statement
// let age  = prompt("Please enter your age (in years)");
// if (age >= 18){
//     console.log("You are an adult");
// }
// else {
//     console.log("You are under age");
// }

// if (true){
//     console.log("This will be always executed");
// }

// if (false){
//     console.log("This is unreachable code");
// }

// Several variants of if
// let age = prompt("Please enter your age (in years)");
// if (age > 18){
//     console.log("You are an adult");
// }
// else if (age == 18){
//     console.log("You have just become an adult");
// }
// else if (age > 21){
//     console.log("21 is an age for adult for some countries");
// }
// else {
//     console.log("You are under age");
// }

// // Conditional operators
// let result = (age > 18) ? (true) : false;

// // Horrible Conditional example
// let result2 = (age > 18) ? (age > 21) ? true : false : (age == 18) ? true: false;

// Logical operators
// let enteredAge = "19";

// // && -> and
// if (enteredAge < 18 && enteredAge > 0){
//     console.log("Under 18");
// }

// // || -> or
// if (enteredAge < 18 || enteredAge > 0){
//     console.log("Under 18");
// }

// // ! -> Negates (Not) Not a great example
// if (!(enteredAge < 18) || !(!(enteredAge > 0))){
//     console.log("Under 18");
// }

// 
// if (true || alert("Does not get printed")){
//     console.log("Under 18");
// }

// // ?? coalesce operator
// let a = 1;
// console.log(a ?? 8)

// Loops
// while (true /* while this is true*/) {
//     // Loop body -> execute this
// }

// //While loop
// let i = 0; //iterator;
// while (i <= 100){
//     console.log(i);
//     //i = i + 1;
//     i++;
// }

// // Do while
// let i = 101;
// do {
//     console.log(i);
//     //i = i + 1;
//     i++;
// } while (i <= 100)

// // For loop
// for (let i = 0; i <= 100; i++) {
    
//     if (i == 11){
//         break;
//     }
        
//     console.log(i);
// }

// let age = 0; // this is entered by a user

// if (age == 21){
//     console.log("You're 21");
// } 
// if (age == 18){
//     console.log("You're 18");
// }
// if (age == 30){
//     console.log("You are thirty")
// }

// switch (age) {
//     case 21:
//         console.log("You're 21");
//          break;
//     case 18:
//         console.log("You're 18");
//          break;
//     case 30:
//         console.log("You're 30");
//          break;

//     default:
//         console.log("You have different age");
//         break;
// }

// // This is possible but not recommended
// var scrollleft = 1000;
// switch (true)
// {
//     case (scrollleft > 1000):
//       alert('gt');
//       break;
//     case (scrollleft <= 1000):
//       alert('lt');
//       break; 
// }

// //This is a global variable and it can be seen in any function
// let someName = "Paul";

// // Functions
// function showHelloMessage(name){
//     //Local scope-> only visible in this function
//     let defaultName = "Tom"; 
//     if (name == null){
//         name = defaultName;
//     }
//     console.log("Hello " + name);
// }

// showHelloMessage("Peter");
// showHelloMessage("John");
// showHelloMessage();

// // Function multiple parameters

// function showHelloMessage(forename = "Tom", surname =  "Surname"){
//     //Local scope-> only visible in this function

//     console.log("Hello " + forename + " " + surname);
// }
// let nameJohn = "John";
// showHelloMessage(nameJohn, "Smith");
// showHelloMessage();
// showHelloMessage("Jenny");

// Returns of a function

// function getSum(number1, number2){
//     let sumResult = number1 + number2;
//     return sumResult;
//     sumResult += 10;
// }

// let sumResult = getSum(1,6);
// console.log(sumResult);

// // Function Expression
// var sum2 = function(a, b){
//     return a + b;
// }
// console.log(sum2(1,2));

// Arrow functions
// let sumExpression = function(num1,num2) {
//     return num1+ num2;
// }

// let sumInArrow = (num1, num2) => num1 + num2;

// console.log(sumInArrow(1,2));

// objects
// numbers, booleans, string, date

// let car = {
//     brand: "Audi",
//     color: "Black",
//     price: 20000
// }

// let shopItem = {
//     name: "Ice cream",
//     Price: 2
// }

// car.used = true;
// car.brand = null;

// car.getInfo = function(){
//     let info = "";
//     info += "Brand is " + this.brand + "\n";
//     info += "Color is " + this.color + "\n";
//     info += "Price is " + this.price + "\n";
//     info += "Is used? " + this.used; 
//     return info;
// }

// console.log(car.getInfo());

// arrays

// let car1 = "Volvo";
// let car2 = "Audi";
// let car3 = "Peugeot";

// let cars = ["Volvo","Audi","Peugeot"]

// let firstCar = cars[0];
// let secondCar = cars[1];
// let thirdCar = cars[2];

// console.log(firstCar);
// console.log(secondCar);
// console.log(thirdCar);

// cars[0] = "Mercedes";

// console.log(cars.toString());

// // Array's properties

// let arrayLength = cars.length;

// console.log(arrayLength);

// // getting last array element
// let lastCar = cars[cars.length - 1];

// console.log(lastCar);

// loop through each array element

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i];
//     console.log(car);
// }

// foreach loop in array element

// cars.forEach(car => {
//     console.log(car);
// });

// We can push new values into the array

// cars.push("Saab");

// cars.pop();

// avoid this to add new items, only modify existing ones.
// cars[10] = "BMW";

// console.log(cars.length);

// // Array can have methods
// cars.sort();

// cars.forEach(car => {
//     console.log(car);
// });

// Arrays continued

// let arrayVariable = ["test",2,true];

// arrayVariable.forEach(e => {
//     console.log(e);
// });

// for (let i = 0; i < arrayVariable.length; i++) {
//     const element = arrayVariable[i];
//     console.log(element);
// }

// console.log(arrayVariable[0]);
// console.log(arrayVariable[1]);
// console.log(arrayVariable[2]);
// console.log(arrayVariable[3]);

// empty array
// let newArray = ["string1", "string2"];

// let newSyntaxArray = new Array("string1", "string2");

// for (let i = 0; i < newArray.length; i++) {
//     const element = newArray[i];
//     console.log(element);
// }

// let eightyUndefinedArray = new Array(80);
// eightyUndefinedArray[0] = "First";
// eightyUndefinedArray[79] = "Last";

// for (let i = 0; i < eightyUndefinedArray.length; i++) {
//     const element = eightyUndefinedArray[i];
//     console.log(element);
// }

// Two dimensional array // multidimensional arrays // jagged array
// let twoDimensionalArray = [
//     ["Paul", "Sarah", "Ann"],
//     ["John", "Tom"],
//     ["Iain"],
//     []
// ];

// twoDimensionalArray.forEach(innerArray => {
//     innerArray.forEach(element => {
//         console.log(element);
//     });
// });
// console.log(twoDimensionalArray[0][2]);

// let arrayToModify = ["Apple", "Orange", "Lemon"];
// let strawberry = "Strawberry";

// arrayToModify[10] = strawberry;
// arrayToModify.push(strawberry);
// arrayToModify.unshift(strawberry);

//  arrayToModify.splice(3, 4, "Banana");

// arrayToModify.pop();
// arrayToModify.pop();
// arrayToModify.pop();

// for (let i = 0; i < arrayToModify.length; i++) {
//     const element = arrayToModify[i];
//     console.log(i + ": " + element);
// }

// Array functions 

// function subtract(a, b){
//     return a - b
// };

// let subtract2 = (a, b) => a - b;

// Array filter

// let arrayToModify = ["Apple", "Orange", "Lemon", "Lime"];

//  let filteredFruits = arrayToModify.filter(f => f.length > 0);

//  // map function
//  filteredFruits = filteredFruits.map(f => f.toUpperCase());

//  // foreach
//  filteredFruits.forEach(f => f = f.toLowerCase());

// for (let i = 0; i < filteredFruits.length; i++) {
//     const element = filteredFruits[i];
//     console.log(i + ": " + element);
// }

// Arrays of object

let sampleCar = {
    brand: "Peugeot",
    color: "Red",
    year: 2020
};

let cars = [
    {
        brand: "Peugeot",
        color: "Red",
        year: 2020
    },
    {
        brand: "Audi",
        color: "Grey",
        year: 2010
    },
    {
        brand: "Toyota",
        color: "Blue",
        year: 2015
    },
    {
        brand: "Toyota",
        color: "Blue",
        year: 2000
    },
    {
        brand: "Saab",
        color: "Grey",
        year: 2005
    }
];

let allGreyCars = cars.filter(c => c.color === "Grey");
let newCars = cars.filter(c => c.year >= 2012);
console.log(newCars);

allCarColors = cars.map(c => c.color);

let distinctCarColors = [...new Set(allCarColors)];
console.log(distinctCarColors);

// cars.forEach(c => c.year = 2021)
console.log(cars);

// We can mix map, foreach, filter
// all Toyota cars to be update to 2021

cars.filter(c => c.brand == "Toyota").forEach(c => c.year = 2021);

console.log(cars);

// DOM
