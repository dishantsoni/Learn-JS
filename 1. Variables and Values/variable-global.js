/**
Global Variable
-------------------

THINGS TO KNOW
1. Global variables are in fact properties of the global object. 
2. In web pages the global object is window, so you can set and access global 
   variables using the window.variable syntax.
3. Any variable declared or initialized outside a function is a global variable
4. variable that is assigned a value without being declared is a global variable

**/

var x = 10;

y = "global";

(function(){
    console.log("x in function " + x);
    console.log("z in function " + z); //?? 
    console.log("y in function " + y);
    
    z = true;
    var x = 20;
    y = {};
    
    for(i = 0;i < 100;i++){ //local or global
        //do nothing   
    }
    
    
}());

console.log("x outside " + x);
console.log("y outside " + y);
console.log("z outside " + z);
console.log("z outside " + window.z);
console.log("i outside " + i); //??