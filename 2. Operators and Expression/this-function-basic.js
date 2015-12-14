/**
UNDERSTANDING this KEYWORD

THINGS TO KNOW.
1. this keyword in JavaScript behaves compared to other languages.
2. the value of this is determined by how a function is called.

Baseless function call
**/

function f1(){
  return this;
}

f1() === window; // global object


function testThis(){
    this.custom = "Adding some custom property";
}

testThis();
console.log(custom);
console.log(window.custom);