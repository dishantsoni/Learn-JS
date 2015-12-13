/**
VARIABLE SCOPE
-------------------

JavaScript before ECMAScript 6 does not have block statement scope; rather, a variable declared within a block is local to the function (or global scope) that the block resides within.

WHAT TO KNOW?
1. block scope vs function scope
2. using var and let keyword
3. defining variable without using "var" or "let" keyword

**/

//Below line will let you use "let" keyword. ES6 specification
"use strict";

if(true){
    var x = 20;
}
console.log(x);

if(true){
  let l = 20;
}
console.log(l); //throws Reference Error. Comment this to continue

function doSomething(){

    if(true){
        var fscope = 'function scope access';
        let lscope = 'block scope';
    }
  
    console.log(fscope); 
    console.log(lscope); //throws Reference Error. Comment this to continue

    
}

//Calling a function
doSomething();

console.log("Accessing fscope outside function : " + fscope); //throws Reference Error. Comment this to continue.
console.log("Accessing lscope outside function : " + lscope); //throws Reference Error. Comment this to continue.
