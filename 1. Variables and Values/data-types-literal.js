/***
DATA TYPES & LITERALS

THINGS TO KNOW.
JavaScript has below primitives

1. Boolean. true and false.
2. null. A special keyword denoting a null value.
3. undefined. A top-level property whose value is undefined.
4. Number. 42 or 3.14159.
5. String. "Howdy"

and 
6. Object

LITERALS

You use literals to represent values in JavaScript. 
These are fixed values, not variables, that you literally provide in your script.

1. Array literals
2. Boolean literals
3. Floating-point literals
4. Integers
5. Object literals
6. String literals

**/

//1. Array Literal
var list = ['Orange', 'Apple', 'Banana'];
console.log(list);
console.log(list.length);

//empty list
list.length = 0;
console.log(list);

//Adding elements to list
list.push("Mango");

//[TRY 1] - Try other Array API methods


//2. Boolean Literal
var vBool = true;

//3. Floating-point literals
var vFloat = -3.1E+12;


//4. Intergers
var vInt = 10;


function getEmployeeStatus() {
    return true;
}

//5. Object literal
var vPerson = {
    name : "Jane Doe",
    "address" : {
        "street-name" : "thinking lane",  //Example of unusual property name
        aptNo : 1254,
        zipCode : 7534
    },
    isEmployee: getEmployeeStatus() //Example of property invoking function
};


//Accessing Properties
console.log("Name : " + vPerson.name/*vPerson["name"] */);
console.log("Address " + vPerson["address"]/*vPerson.address*/);
console.log("Street Address " + vPerson["address"]["street-name"]); //cannot accessed with vPerson.street-name 
                                                        // as it is not a valid variable name.
console.log("IsEmployee " + vPerson.isEmployee);

//6. String literal
var vString = "one line \n another line"; //Allows special characters.
console.log("String : " + vString);