var person = {
    sayHello: function(){
        return "Hello" + this.name;
    },
    name:"X"
};

var male = Object.create(person);
male.name = "Bob";

male.sayHello = function(){
    return "Hello " + this.name + " sir";
};

console.log(male.sayHello());

/*
male.sayHello = function(){
    return person.sayHello() + " sir";
};

console.log(male.sayHello());
*/

/*
male.sayHello = function(){
    return person.sayHello.call(this) + " sir";
};

console.log(male.sayHello());
*/