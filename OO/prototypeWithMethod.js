// here we'll go over the `prototype` attribute, and show that one can use it to create methods to be used by all instances, before and after instantiation. 

// create class/function with some attributes
function exampleClass() {
    this.attritute1 = 'lorem ipsum';
    this.attritute2 = 'dolor sit amet';
};

// define a method with the prototype attribute!
exampleClass.prototype.method1 = function() {console.log(this.attritute1);};

// create an instance and test out the method we just made...
var instance1 = new exampleClass();
instance1.method1();

// add on a new method, and test it out with instances that pre-date the method's definition. 
exampleClass.prototype.method2 = function(){ console.log(this.attritute2);};
instance1.method2();
