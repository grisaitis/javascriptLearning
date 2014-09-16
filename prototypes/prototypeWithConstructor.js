// here we go over constructors with js prototypes
// we'll create a prototype (aka class), same as in prototype.js but with some constructor content
// and the constructor code is called when we create an instance

// define prototype with some constructor code
var prototypeWithConstructor1 = function() {
    console.log("hello world, from prototypeWithConstructor1! constructor code being called...");
};
// create an instance of the prototype
var instance1 = new prototypeWithConstructor1();
// and the constructor code execution can be verified in the console

// define a more interesting prototype...
var prototypeWithConstructor2 = function(someText) {
    this.text = someText;
    console.log(someText);
};

var instance2 = new prototypeWithConstructor2('creating instance2... test!');
