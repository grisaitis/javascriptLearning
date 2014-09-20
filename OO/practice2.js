// make object constructor
var Person = function(name) {
    this.name = name;
}

// add methods to "class"
Person.prototype.changeName = function(name) {
    this.name = name;
}

// declare instance and play around
var person = new Person('william');
console.log(person.name); // should print 'william', and it does
person.changeName('william grisaitis');
console.log(person.name); // success again

/* Notes...
The common mistake I am still making is forgetting 
the `new` modifier when creating an instance of 
a class.

On a side note, I still don't know if it's 
accurate to be referring to these things as 
"classes", given that it's just a function with 
a `prototype` attribute. 

*/


