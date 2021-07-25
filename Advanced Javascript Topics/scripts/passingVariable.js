// Passed by value
// Primitive values: numbers, string, booleans
let number = 1;

function increment(numParameter){
    numParameter++;
}

increment(number);

console.log(number);

//------------------
// Works with objects and arrays, functions
// Passed by reference
let user = {
    number: 1
};

function incrementUserNumber(userParameter){
    userParameter.number++;
}

incrementUserNumber(user);

console.log(user.number);

// Recommended aproach;

let numberInt = 1;

let user2 = {
    number: 1
}

function incrementRecommended(parameter){
    parameter++;
    return parameter;
}

numberInt = incrementRecommended(numberInt);
user2.number = incrementRecommended(user2.number);

console.log(numberInt);
console.log(user2.number);
