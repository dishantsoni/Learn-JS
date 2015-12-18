/**
UNDERSTANDING this KEYWORD
THINGS TO KNOW.
1. this keyword in JavaScript behaves compared to other languages.
2. the value of this is determined by how a function is called.
As a object method
**/

function myMethod(){
    return this.val;
}

var object1 = {
    get: myMethod,
    val:100
}

var object2 = {
    get: myMethod,
    val:20
}

console.log(object1.get());
console.log(object2.get());
console.log(myMethod());
console.log(myMethod.call(object1));