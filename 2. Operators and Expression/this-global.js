/**
UNDERSTANDING this KEYWORD

THINGS TO KNOW.
1. this keyword in JavaScript behaves compared to other languages.
2. the value of this is determined by how a function is called.

Global Context
In javascript global execution context(outside any function), 'this' 
refers to 
**/


console.log(this.document === document); // true

// In web browsers, the window object is also the global object:
console.log(this === window);

this.a = 37;
console.log(window.a);