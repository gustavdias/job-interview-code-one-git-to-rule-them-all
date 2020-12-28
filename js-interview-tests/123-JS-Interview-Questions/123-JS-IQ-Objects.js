// 1. What would be the output of following code ?
(function() {
	'use strict';

	var person = {
		name: 'John'
	};
	person.salary = '10000$';
	person['country'] = 'USA';

	Object.defineProperty(person, 'phoneNo', {
		value: '8888888888',
		enumerable: true
	})

	console.log(Object.keys(person)); 
})();

//["name", "salary", "country", "phoneNo"]


// Objects

// 2. What would be the output of following code ?
(function() {
	'use strict';

	var person = {
		name: 'John'
	};
	person.salary = '10000$';
	person['country'] = 'USA';

	Object.defineProperty(person, 'phoneNo', {
		value: '8888888888',
		enumerable: false
	})

	console.log(Object.keys(person)); 
})();

// Answer
// ["name", "salary", "country"]

________

// 6. What would be the output of following code ?
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = Object.create(objA);
	console.log(objA == objB);
	console.log(objA === objB);
}());

// Answer
// false false

________

// What would be the output of following code ?
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = Object.create(objA);
	console.log(objA.toString() == objB.toString());
	console.log(objA.toString() === objB.toString());
}());

// Answer
// true true

_________

// What would be the output of following code ?
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
	console.log(objA == objB);
	console.log(objA === objB);
	console.log(objA.toString() == objB.toString());
	console.log(objA.toString() === objB.toString());
}());

// Answer
// true true true true
____________

// ????
// 10. What would be the output of following code ?
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
	objB.foo = 'bar';

	delete objA.foo;
	console.log(objA.foo);
	console.log(objB.foo);
}());

// Answer
// foo foo


// If you check documentation of delete operator
If you check documentation of delete operator

// If a property with the same name exists on the object's prototype chain, then, after deletion, the object will use the property from the prototype chain (in other words, delete only has an effect on own properties).

// The method Object.create() create object with prototype properties

// The Object.create() method creates a new object with the specified prototype object and properties.

// So delete objA.foo; does not delete proto property of object
// ___________

// 11. What would be the output of following code ?
// If a property with the same name exists on the object's prototype chain, then, after deletion, the object will use the property from the prototype chain (in other words, delete only has an effect on own properties).

// The method Object.create() create object with prototype properties

// The Object.create() method creates a new object with the specified prototype object and properties.

// So delete objA.foo; does not delete proto property of object
// ___________

// 11. What would be the output of following code ?
(function() {
	var objA = {
		foo: 'foo'
	};
	var objB = objA;
	objB.foo = 'bar';

	delete objA.foo;
	console.log(objA.foo);
	console.log(objB.foo);
}());

// Answer
// undefined undefined

______

