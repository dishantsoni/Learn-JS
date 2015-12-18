/**
Functions as Objects

THINGS TO KNOW.
1. Functions are objects and they have properties
**/

function myFunction(a, b){
    return 10;
}

console.log(myFunction.name);
console.log(myFunction.prototype);

myFunction.foo = "bar";

var function2 = myFunction;

console.log(myFunction.foo, function2.name, function2.foo);