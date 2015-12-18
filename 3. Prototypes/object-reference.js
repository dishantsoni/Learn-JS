/**
OBJECTS - PASS BY REFERENCE

THINGS TO KNOW.
1. Unlike primitive data types, objects in javascript
   are passed by reference.
**/

var object1,object2;

object1 = {
    a : 3.14,
    b : 10
};

console(object1.a,object2.a);

object2 = object1;

object2.a = 42;

console(object1.a,object2.a);


//Delete the property
delete object1.b;
