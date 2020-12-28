
//Map vs Object - 4 main differences 

//1. Type of key
//Map: primitive, object or function
//Object: String (even if you type a key as a number, it will be converted into string)

//2. Iterable
//Map is a built in iterable in JS: you can loop over every element using forEach loop.

//Object is no iterable: to loop over every property in the Object, 
//you need to get hold of either entries, keys, or values, which are returned as arrays and them iterate over them.

//3. Size
//Map: has an out of the box size property available which returns the total number of entries in the map.

//Object: there is no direct method or property to get the size of the Object.
//Just like iteration process, we need to get hold of the entries, keys or values in the Object, and then calculate the length. 

//4. JSON string
//Map: since map is a pure hash table, there is no support for JSON directly. 
//You need to provide your own parser to convert a Mao into a JSON string.
//There are performance related issues too

//Object: direct support (in JS) to turn them into JSON string using JSON.stringify().



/* Maps */

let myMap = function() {
	this.collection = {};
	this.count = 0;
	this.size = function() {
		return this.count;
	};
	this.set = function(key, value) {
		this.collection[key] = value;
		this.count++;
	};
	this.has = function(key) {
		return (key in this.collection);
	};
	this.get = function(key) {
		return (key in this.collection) ? this.collection[key] : null;
	};
	this.delete = function(key) {
		if (key in this.collection) {
			delete this.collection[key];
			this.count--;
		}
	};
	this.values = function() {
		let result = new Array();
		for (let key of Object.keys(this.collection)) {
			result.push(this.collection[key]);
		};
		return (result.length > 0) ? result : null;
	};
	this.clear = function() {
		this.collection = {};
		this.count = 0;
	};
};

let map = new myMap();
map.set('arms', 2);
map.set('fingers', 10);
map.set('eyes', 2);
map.set('belley button', 1);

console.log(map.get('fingers'));
console.log(map.size());
console.log(map.values());

let map2 = new Map();
map2.has('hands');
map2.entries();

let keyObj = {},
    keyFunc = function() {};

map2.set('hello', 'string value');
map2.set(keyObj, 'obj value');
map2.set(keyFunc, 'func value');
map2.set(NaN, 'NaN value')

console.log(map2.size);

console.log(map2.get('hello'));
console.log(map2.get(keyObj));
console.log(map2.get(keyFunc));
console.log(map2.get(NaN));