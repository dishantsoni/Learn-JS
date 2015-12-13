/** EVALUATING VARIABLE 
A variable declared using the var or let statement with no initial value specified has the value undefined.

THINGS TO KNOW
1. When a variable is "undefined"?
2. null vs undefined
3. WEIRD PART : undefined and null used in numeric context
4. Accessing non-declared variable throws an exception

**/
var a;
var n = null;
console.log("The value of a is " + a);

if (a === undefined) {
    console.log("a is declared but not defined");
}

//Undefined with Numbers evaluates to NaN
console.log(a + 2);

//null behaves as 0 in numeric contexts
console.log(n + 2);

console.log("The value of x is " + x); // throws ReferenceError exception