// let's create some prototype functions

// this can be done in two ways
// way 1:
var prototypeWay1 = function() {};
// or way 2:
function prototypeWay2() {};

// and then we can create "instances"
var instance1 = new prototypeWay1();
var instance2 = new prototypeWay2();

// these instances have type `obj`, which we can verify with...
Object.prototype.toString(instance1);
Object.prototype.toString(instance2);



