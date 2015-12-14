/**

TRUTHY AND FALSY

THINGS TO KNOW.
The following values will evaluate to false:

false
undefined
null
0
NaN
the empty string ("")

All other values, including all objects, evaluate to true when passed to a conditional statement.

**/


//Following way is to convert a value to true of false. 
//Truthy value will be evaluated to true.
//False value will ve evaluated to false.
console.log(!!"string");
console.log(!!false);
console.log(!!true);
console.log(!!0);
console.log(!!{});
console.log(!!null);
console.log(!!undefined);