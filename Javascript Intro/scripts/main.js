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

// Functions
function showHelloMessage(){
    console.log("Hello everyone");
}
