var disjointSet = require('./disjointSet');

/*
console.log(disjointSet);
console.log(disjointSet.DisjointSet);
console.log(disjointSet.DisjointSet.prototype);
console.log(disjointSet.DisjointSet.prototype.find);
*/

var ds1 = new disjointSet.DisjointSet(20);
console.log(ds1.parentOf);
ds1.union(0,1);
console.log(ds1.parentOf);
console.log(ds1.find(0));
ds1.union(0,2);
console.log(ds1.parentOf);
console.log(ds1.find(0));
ds1.union(1,3);
console.log(ds1.parentOf);
console.log(ds1.find(0));
ds1.union(4,0);
console.log(ds1.parentOf);
console.log(ds1.find(0));

// ds1.find(1);

