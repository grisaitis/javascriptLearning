// here we go over constructors with js functions, for class-like behavior
// we'll create a function same as in customClass.js but with some constructor-like content
// and the constructor code is called when we create an instance

// define function with some "constructor" code
var classWithConstructor1 = function() {
    console.log("hello world, from classWithConstructor1! constructor code being called...");
};
// create an instance of the function
var instance1 = new classWithConstructor1();
// and the constructor code executes, which can be verified in the console

// define a more interesting function/class...
var classWithConstructor2 = function(someText) {
    this.text = someText;
    console.log(someText);
};

var instance2 = new classWithConstructor2('creating instance2... test!');

// and let's create another function with the other definition syntax:
function classWithConstructor3(someText){
    this.text = someText;
    console.log('created instance of classWithConstructor3');
};

// and make some instances
var instance3 = new classWithConstructor3("let's see how instance3 goes.");
var instance4 = new classWithConstructor3("perhaps instance4 will be better?");

console.log("instance3's text is: " + instance3.text);
console.log("instance4's text is: " + instance4.text);



