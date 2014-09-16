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

// and let's create another prototype with the other definition syntax:
function prototypeWithConstructor3(someText){
    this.text = someText;
    console.log('created instance of prototypeWithConstructor3');
};

// and make some instances
var instance3 = new prototypeWithConstructor3("let's see how instance3 goes.");
var instance4 = new prototypeWithConstructor3("perhaps instance4 will be better?");

console.log("instance3's text is: " + instance3.text);
console.log("instance4's text is: " + instance4.text);

