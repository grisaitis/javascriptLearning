// here we go over constructors with js prototypes
// we'll create a prototype (aka class), same as in prototype.js but with some constructor content

// define prototype with some constructor code
var prototypeWithConstructor1 = function() {
    console.log("whee, constructor code being called...");
};

// create an instance of the prototype
var instance1 = new prototypeWithConstructor1();


// and the constructor code is called when we create an instance