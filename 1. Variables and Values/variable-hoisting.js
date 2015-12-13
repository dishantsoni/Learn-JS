/**
HOISTING 

In JavaScript you can refer to a variable declared later, without getting an exception. 
This concept is known as hoisting; variables in JavaScript are in a sense "hoisted" or 
lifted to the top of the function or statement.

WHAT TO KNOW?
1. Variable declarations are hoisted.
2. Function declarations are hoisted.
3. Find out more examples.
    
**/


/******************
VARIABLE HOISTING
******************/
var myvar = "my value";

(function () {
    console.log("1. " + myvar);            
    /*
    [TRY 1]. Comment this line to see what happens
    [TRY 2]. Remove var keyword to see what happens
    */
    var myvar = "local variable"; 
    console.log("2. " + myvar);            
}());

console.log("3. " + myvar);


/**********************************************************
FUNCTION HOISTING
-----------------------------------------------------------
WHAT TO KNOW
1. function declarations get hoisted completely
2. function expressions get only the variable declaration 
   hoisted and not the implementation.
**********************************************************/
callMeBefore();

//Function Declaration Syntax : Will be explained in later examples
function callMeBefore(){
    console.log("Called : callMeBefore ");   
}

cannotCallMeBefore(); //Throws TypeError : [TRY 3]. Comment this line to continue

//Function Expression/ Function as values syntax : Will be explained in later examples
var cannotCallMeBefore = function(){
    console.log("Called : canNotCallMeBefore");
}


// ReferenceError: funcName is not defined
funcName(); //[TRY 4]. Comment this line to continue

// TypeError
varName(); //[TRY 5]. Comment this line to continue

var varName = function funcName() {
    console.log("Definition not hoisted!");
};

//[TRY 6] - FIND OUT THE ANSWER/REASONING FOR BELOW CODE.

var f1 = function () {
    console.log("me");
};

function f1() {
    console.log("mine");
}

f1();


//[TRY 7] - FIND OUT ANSWER FOR BELOW CODE.

var user = { name: 'Tomas', age: 25 };
function getUser() {
    console.log(user); //prints undefined
    var user = user || {}; 
    console.log('user: ', user); //[TRY 8] - Can you make object "user" defined inside getUser() 
                                 //          equivalent to (having same values) "user" object 
                                 //          defined outside.
    return user;
}
getUser();
