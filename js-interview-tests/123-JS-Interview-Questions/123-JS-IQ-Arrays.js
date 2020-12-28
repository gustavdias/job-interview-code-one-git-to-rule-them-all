//! Arrays - ok

//1. What would be the output of following code?
(function() {
	var array = new Array('100');//here "100" creates a array with one element = 100
	console.log(array);
	console.log(array.length);
}());


// undefined undefined
// [undefined × 100] 100
// ["100"] 1
// ReferenceError: array is not defined
// Answer
// ["100"] 1

// _______
//2. What would be the output of following code?
(function() {
	var array1 = [];
	var array2 = new Array(100);//100 creates a array with 100 empty slots elements
	var array3 = new Array(['1',2,'3',4,5.6]);
	console.log(array1);
	console.log(array2);
	console.log(array3);
	console.log(array3.length);
}());

// Answer
// [] [] [Array[5]] 1


//chrome
// []
// VM16707:6 (100) [empty × 100]
// VM16707:7 [Array(5)]
// VM16707:8 1
// ______


var array3 = new Array(['1',2,'3',4,5.6],[23,44]);
console.log(array3)
//Brave (chrome)
//(2) [Array(5), Array(2)]

//Firefox
// Array [ (5) […], (2) […] ]
//A array of 2 arrays
//0: Array(5) [ "1", 2, "3", … ]
​// 1: Array [ 23, 44 ]​
// length: 2

//----------------------------
(function () {
    var array = new Array('a', 'b', 'c', 'd', 'e');
    array[10] = 'f';//puts until 10th element (0-10) and adds f to index 10
    delete array[10];//deletes the element, but not the position/index
    console.log(array.length);
  }());
  //--------------------------
//indexOf() compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator).
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
//arr.indexOf(searchElement[, fromIndex])

//!   6. What would be the output of following code?
(function(){
	var array = [1,2,3,4,5];
	console.log(array.indexOf(2));//1
	console.log([{name: 'John'},{name : 'John'}].indexOf({name:'John'}));//-1
	console.log([[1],[2],[3],[4]].indexOf([3]));//-1
	console.log("abcdefgh".indexOf('e'));//4
})();
// 1 -1 -1 4
//second and third is -1 because the index does not use for object and arrays. 
//! If you want to find and element in array use map and then check the index.
//you get -1 when there is no index
//-------
// 7. What would be the output of following code?

(function(){
	var array = [1,2,3,4,5,1,2,3,4,5,6];
	console.log(array.indexOf(2));//1
	console.log(array.indexOf(2,3));//6
	console.log(array.indexOf(2,10));//-1
})();

// Answer
// 1 6 -1

//-----------------------------------------
//8. What would be the output of following code?
(function(){
	var numbers = [2,3,4,8,9,11,13,12,16];
	var even = numbers.filter(function(element, index){
		return element % 2 === 0; 
	});
	console.log(even);

	var containsDivisibleby3 = numbers.some(function(element, index){
		return element % 3 === 0;
	});

	console.log(containsDivisibleby3);	
})();

//[ 2, 4, 8, 12, 16 ] true
//-------------------------
//9. What would be the output of following code?
// .filter()
	//let newArray = arr.filter(callback(currentValue[, index[, array]]) {
  // return element for newArray, if true
}[, thisArg]);)
(function(){
	var containers = [2,0,false,"", '12', true];
	var containers = containers.filter(Boolean);
	console.log(containers);
	var containers = containers.filter(Number);
	console.log(containers);[2,0]
	var containers = containers.filter(String);
	console.log(containers);["", "12"]
	var containers = containers.filter(Object);
	console.log(containers);		
})();
// [ 2, '12', true ] [ 2, '12', true ] [ 2, '12', true ] [ 2, '12', true ]
//---------------

const number = [1,-1,2,3];
cont filtered = numbers.filter(function(value){
	return value >=0;
})

console.log(filtered);

const negFilter = numbers.filter(n=>n >= 0);
console.log(negFilter);

//---------------------

// 10. What would be the output of following code?


(function(){
	var list = ['foo','bar','john','ritz'];
	    console.log(list.slice(1));	
	    console.log(list.slice(1,3));//starts at 1 and stops before 3
	    console.log(list.slice());//all elements
	    console.log(list.slice(2,2));//creates a array without elements
	    console.log(list);//all elements				
})();

//-------------------
//!-----------------splice() method--------------------
//! The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//! let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
months.splice(4, 1, 'May');
// replaces 1 element at index 4
months.splice(1, 0, 'Feb');
// inserts at index 1

let myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
let removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"] 
// removed is ["angel", "clown"]

// Remove all elements from index 2
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2)
// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]


// Remove 2 elements from index 2
let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
let removed = myFish.splice(2, 2)
// myFish is ["parrot", "anemone", "sturgeon"] 
// removed is ["blue", "trumpet"]

//? Remove all elements from index -2
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(-2)
console.log(myFish)//(2) ["angel", "clown"]
console.log(removed)//(2) ["mandarin", "sturgeon"]

// Remove 1 element from index -2
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(-2, 1)
// myFish is ["angel", "clown", "sturgeon"] 
// removed is ["mandarin"]



	var list = ['foo','bar','john'];
var sliced = list.splice(1,2)
console.log(list)// ["foo"]
console.log(sliced)// (2) ["bar", "john"]


// 11. What would be the output of following code?
(function(){
	var list = ['foo','bar','john'];
	    console.log(list.splice(1));//extract on 1 ['bar','john']]
	    console.log(list.splice(1,2));//after 1 extract 2 elements []
		console.log(list);		//['foo','bar','john'];	['foo']


})();

//[ 'bar', 'john' ] [] [ 'foo' ]


//---------------------
//!---------------------------Array.prototype.sort()-------------

// 12. What would be the output of following code?
(function(){
	var arrayNumb = [2, 8, 15, 16, 23, 42];
	arrayNumb.sort();
	console.log(arrayNumb);
})();


//[ 15, 16, 2, 23, 42, 8 ]
//------
//!To compare numbers instead of strings, the compare function can simply subtract b from a. The following function will sort the array in ascending order (if it doesn't contain Infinity and NaN):
function compareNumbers(a, b) {
	return a - b;
  }


  (function(){
	var arrayNumb = [2, 8, 15, 16, 23, 42];
	arrayNumb.sort(function(a, b) {
		return a - b;
	  });
	console.log(arrayNumb);
})();

//[2, 8, 15, 16, 23, 42]


//!Objects can be sorted, given the value of one of their properties.

var items = [
	{ name: 'Edward', value: 21 },
	{ name: 'Sharpe', value: 37 },
	{ name: 'And', value: 45 },
	{ name: 'The', value: -12 },
	{ name: 'Magnetic', value: 13 },
	{ name: 'Zeros', value: 37 }
  ];
  
  // sort by value
  items.sort(function (a, b) {
	return a.value - b.value;
  });
  
  // sort by name
  items.sort(function(a, b) {
	var nameA = a.name.toUpperCase(); // ignore upper and lowercase
	var nameB = b.name.toUpperCase(); // ignore upper and lowercase
	if (nameA < nameB) {
	  return -1;
	}
	if (nameA > nameB) {
	  return 1;
	}
  
	// names must be equal
	return 0;
  });
  