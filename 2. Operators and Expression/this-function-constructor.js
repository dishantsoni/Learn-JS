/**
UNDERSTANDING this KEYWORD

THINGS TO KNOW.
1. this keyword in JavaScript behaves compared to other languages.
2. the value of this is determined by how a function is called.

As a function constructor
**/

function f() {
    this.data = "hello world";
    this.getData = function() {
        return this.data;
    };
}

var a = new f();
console.log(a.getData());

var b = a.getData; //[WEIRD PART]
console.log(b());


function C2(){
  this.a = 37;
  return {a:38};
}

o = new C2();
console.log(o.a); // logs 38