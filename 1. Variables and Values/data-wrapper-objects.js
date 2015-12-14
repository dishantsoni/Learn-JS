/**

WRAPPER OBJECTS - A BAD IDEA

THINGS TO KNOW.
1. JavaScript has wrapper objects just like java 
   for it's primitive data type.
2. Using Wrapper object creates more confusion
3. Avoid using wrapper objects

**/

var oBoolean = new Boolean(false);
var pBoolean = false;

if(oBoolean){
    console.log("Boolean Object with false value is truthy");
}
else{
    console.log("Boolean Object with false value is falsy");
}

if(pBoolean){
    console.log("false is truthy");
}
else{
    console.log("false is falsy");
}


var oString = new String("I am string"); //Using string wrapper object
var pString = "I am string"; //Using primitive

console.log(oString == pString) //Expected result

var oEmpty = new String(""); 
var pEmpty = "";

if(oEmpty){
    console.log("String Object with empty string value is truthy");
}
else{
    console.log("String Object with empty string value is falsy");
}

if(pEmpty){
    console.log("Empty string is truthy");
}
else{
    console.log("Empty string is falsy");
}