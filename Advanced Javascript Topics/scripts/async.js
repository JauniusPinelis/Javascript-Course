// The javascript runs synchronously by default
function goodbye() {
    console.log("Goodbye");
}

function hello() {
    console.log("Hello");
}

goodbye();
hello();

// We usually calculate javascript and then update the HTML Dom.

function calculate(display) {
    let result = 5 - 3;
    display(result);
}

function displayResult(number){
    document.querySelector("#main-text").innerText = number;
}

calculate(displayResult);

// SetTimeout work asynchrnously

setTimeout(displayHello, 4000);

function displayHello() {
    document.querySelector("#main-text").innerText = "Hello everyone";
}

let a = 5;

// SetInterval gets a functio nexecure for each interval

let index = 1;

setInterval(incrementIndex, 1000);

function incrementIndex() {
    index++;
    document.querySelector("#main-text").innerText = index;
}

// Promises
let promise = new Promise(function(resolved, rejected){
    resolved();
    rejected();
});

promise.then(function(value){
    // Code for success
}, function(error){
    // code for error
    console.log("error");
})

// async await
// Async/ await makes promise easier to create
// async function should return a Promise
// await makes function wait for a promise;

async function asyncFunction(){
    return Promise.reject("Hello");
}

asyncFunction().then(
    function(value){
        console.log("Success");
    },
    function(error){
        console.log("Error");
    }
)




