'use strict';

let a = 5;

a = "test";

console.log(a);

// var vs let vs const

function checkScope(){
    
    // if (true){
    //     let b = 5;
    //     var c = 6;
    //     const d = 7;
    //     d = 4;
    // }
    {
        let b = 5;
        var c = 6;
        const d = 7;
    }

    if (true){
        console.log(c);
    }
   
}

checkScope();

