// define prototype for disjoint set (aka union-find) of whole numbers {0,1,2,...}
var DisjointSet = function(n) { 
	/* create a set of n items */
	this.n = n; // # of items given
	this.items = new Array(n); // item[i] := parent of i
	for (var i=0;i<n;i++) items[i]=i;
}

DisjointSet.prototype.union = function(item1, item2){
	/* create union between item1 and item2 */
	// find root of item1, and set it's parent to the root of item2
	var rootOfItem1 = this.find(item1);
	this.items[rootOfItem1] = this.find(item2);
}

DisjointSet.prototype.find = function(item){
	/* find root of item */
	if (item == this.items[item]) return item; // root found
	else return this.find(item);
}

/* optimizations
later on we'll add the following two optimizations:
1. path compression
2. weighted unioning
*/

// make stuff "importable" elsewhere
module.exports = {
	DisjointSet: DisjointSet
}


