/**
UNDERSTANDING prototype and basic inheritence

THINGS TO KNOW
1.All objects in JavaScript are descended from Object; all objects inherit methods and properties from Object.prototype.
2.Each object has an internal link to another object called its prototype.
3.When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

**/


var parent = {
    get: function fn() {
        return this.val;
    },
    val:42
};

var child = Object.create(parent);
child.val = 10;

var grandchild = Object.create(child);

parent.get();
child.get();
grandchild.get();