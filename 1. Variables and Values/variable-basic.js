/** 
VARIABLE BASICS
Basic example demonstrating how to declare a variable in JavaScript.

THINGS TO KNOW
1. UNDERSTAND WHAT IS 'var' KEYWORD?
2. HOW TO DECLARE AND DEFINE A VARIABLE?
3. LOOSELY TYPED/DYNAMIC TYPED LANGUAGE
4. DATA TYPES AND VALUES - string, number, boolean, null, undefined, object.
**/
    
var vString = "string"; //Use double quotes
var vStringAnother = 'string'; //Use single quotes
var vNumber = 10; //Integer like value
var vNumberAgain = 10.10; //Float like value. No different data types
var vBoolean = true; //boolean - true OR false
var vObject = {  //Object literal {} 
    "name" : "jeo dane",
    "address" : {
        "street" : "1234 javascript lane",
        "zipCode" : 56541
    }
};
var vUndefined; //no value assigned becomes undefined
var vNull = null; //setting null value explicitly