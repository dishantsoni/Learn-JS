/**
UNDERSTANDING this KEYWORD

THINGS TO KNOW.
1. this keyword in JavaScript behaves compared to other languages.
2. the value of this is determined by how a function is called.

As a object method
**/

var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // logs 37




var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
        console.log(person.firstName + " " + person.lastName);
    }
}

person.fullName();


var foo = {size: 50};

function getSize() {
  return this.size;
}

foo.getSize = getSize;

console.log(foo.getSize());

console.log(o.f()); // logs 37