//Question 4. What is “closure” in javascript? Can you provide an example?
var globalVar = "abc"; //Global variable

// Parent self-invoking function
(function outerFunction(outerArg) {
  // start of outerFunction's scope

  var outerFuncVar = "x"; // Variable declared in outerFunction's function scope

  // Closure self-invoking function
  (function innerFunction(innerArg) {
    // start of innerFunction's scope

    var innerFuncVar = "y"; // variable declared in innerFunction's function scope
    console.log(
      "outerArg = " +
        outerArg +
        "\n" +
        "outerFuncVar = " +
        outerFuncVar +
        "\n" +
        "innerArg = " +
        innerArg +
        "\n" +
        "innerFuncVar = " +
        innerFuncVar +
        "\n" +
        "globalVar = " +
        globalVar
    );

    // end of innerFunction's scope
  })(5); // Pass 5 as parameter to our Closure

  // end of outerFunction's scope
})(7); // Pass 7 as parameter to the Parent function

// outerArg = 7
// outerFuncVar = x
// innerArg = 5
// innerFuncVar = y
// globalVar = abc

// "/n" breaks the line on console.log

//---------------------------------------------
//Question 5. Write a mul function which will work properly when invoked with following syntax.
console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48

function mul(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

//---------------------------------------------
//Question 6. How to empty an array in JavaScript?
var arrayList = ["a", "b", "c", "d", "e", "f"];

//1.
arrayList = [];
//2.
arrayList.length = 0;
//3.
arrayList.splice(0, arrayList.length); 
//or just
arrayList.splice(0)
//4.
while (arrayList.length) {
  arrayList.pop();
}
//---------------------------------------------

//Question 7. How to check if an object is an array or not?

var arrayList = [1 , 2, 3];
console.log(typeof(arrayList));//'object

console.log(arrayList.constructor);
Array.isArray(arrayList);

//how to determine is something is an array?
console.log(typeof[]);//'object
console.log([].constructor); //Array
console.log === Array; //true//???????
//---------------------------------------------
//Question 8. What will be the output of the following code?
var output = (function(x) {
    delete x;
    return x;
  })(0);
  
  console.log(output);
  //The code above will output 0 as output. //!delete operator is used to delete a property from an object. Here x is not an object it's local variable. delete operator doesn't affect local variables.
//---------------------------------------------
//Question 9. What will be the output of the following code?
var x = 1;
var output = (function() {
  delete x;
  return x;
})();

console.log(output);
//The code above will output 1 as output. delete operator is used to delete a property from an object. Here x is not an object it's global variable of type number.

//---------------------------------------------

//Question 10. What will be the output of the following code?

var x = { foo : 1};
var output = (function() {
  delete x.foo;
  return x.foo;
})();

console.log(output);
//The code above will output undefined as output. delete operator is used to delete a property from an object. Here x is an object which has foo as a property and from a self-invoking function, we are deleting the foo property of object x and after deletion, we are trying to reference deleted property foo which result undefined.
//---------------------------------------------
//!Question 11. What will be the output of the following code?
var Employee = {
    company: 'xyz'
  }
  var emp1 = Object.create(Employee);
  delete emp1.company
  console.log(emp1.company);
//The code above will output `xyz` as output. //!Here `emp1` object got company as **prototype** property. 
//!delete operator doesn't delete prototype property.
//emp1 object doesn't have company as its own property. 
//you can test it console.log(emp1.hasOwnProperty('company')); 
//output : false However, we can delete company property directly from Employee object using delete Employee.company 
//or we can also delete from emp1 object using __proto__ property delete emp1.__proto__.company.
//---------------------------------------------
//Question 12. What is undefined x 1 in JavaScript
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
console.log(trees)
//["redwood", "bay", "cedar", empty, "maple"]
//chrome = empty or undefined x 1
//firefox = undefined
//Chrome has its own way of displaying uninitialized index in arrays. 
//!However when you check trees[3] === undefined in any browser you will get similar output as true.
trees[3] === undefined //true
//---------------------------------------------
// Question 13. What will be the output of the following code?
var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length);//5
//---------------------------------------------
//Question 14. What will be the output of the following code?

var bar = true;
console.log(bar + 0);   //1
console.log(bar + "xyz");  //truexyz
console.log(bar + true);  //2
console.log(bar + false);//1
//boolean + number = number
//boolean + boolean = number
//boolean + string = string
//false == 0
//true == 1

//! Number + Number -> Addition
//! Boolean + Number -> Addition
//! Boolean + Boolean -> Addition
//! Number + String -> Concatenation
//! String + Boolean -> Concatenation
//! String + String -> Concatenation

var n = '1';
console.log(n+2)//12

//---------------------------------------------
//!Question 15. What will be the output of the following code?
var z = 1, y = z = typeof y;
console.log(y);//undefined

//associativity rule operator 
// Here associativity of the assignment operator is Right to Left 
//so first typeof y will evaluate first which is string "undefined" and assigned to z and then y would be assigned the value of z. The overall sequence will look like that:
// var z;
// z = 1;
// var y;
// z = typeof y;//undefined
// y = z;
//---------------------------------------------
//Question 16. What will be the output of the following code?
// NFE (Named Function Expression)
var foo = function bar() { return 12; };
typeof bar();
//Uncaught ReferenceError: bar is not defined
//The function definition can have only one reference variable as a function name.

//bar is reference variable which is pointing to anonymous function
var bar = function() { return 12; };
typeof bar();//"number"

//function statement and bar is the function name
function bar() { return 12; };
typeof bar();//"number"

var foo = function bar() {
  return 12
    // foo is visible here
    //! bar is visible here
    console.log(typeof bar()); // Works here :)
  };
  // foo is visible here
  //! bar is undefined here
//---------------------------------------------
//Question 17a. What is the difference between declaring a function in the formats listed below?

//foo is defined at run-time and is called a //!function expression. Hoisting doesn't works
 //expression piece of code that always produces a value/result.
 //ex.: return
var foo = function() {
    // Some code
  }

  functionVar(); 
var functionVar = function(){
  console.log('I did it!');
}
//You get the error because function var has being declared, but it’s undefined
//!-----Arrow Function and hoisting don't go together, because it is a function expression

//--------------

  //bar is defined at parse time and is called a //!function statement/declaration. Hoisting works
  //performs a action - ex.: loops, if, console.log()
  function bar () {
    // Some code
  }

  doSomethingElse();
function doSomethingElse(){
  console.log('I did it!');
}
//I did it!



//---------------------------------------------
//Question 17b. What is the output of the following?
bar();
(function abc(){console.log('something')})();
function bar(){console.log('bar got called')};
//Since the function is called first and defined during parse time the JS engine will try to find any possible parse time definitions and start the execution loop which will mean function is called first even if the definition is post another function.
//bar got called
//something
//---------------------------------------------
//Question 18. In which case the function definition is not hoisted in JavaScript?
//In a function expression

//---------------------------------------------
//Question 19. What will be the output of the following code?
var salary = "1000$";

(function () {
  console.log("Original salary was " + salary);

  var salary = "5000$";

  console.log("My New Salary " + salary);
})();
//The code above will output: undefined, 5000$ because of hoisting. 

//the code from above is the same as:
var salary = "1000$";

(function () {
    //!
  var salary = undefined;
  console.log("Original salary was " + salary);

  salary = "5000$";

  console.log("My New Salary " + salary);
})();

//---------------------------------------------
//Question 21. Calculate the length of the associative array
var counterArray = {
    A : 3,
    B : 4
  };
  counterArray["C"] = 1;

//!1. 
Object.keys(counterArray).length; // Output 3
//2.
function getLength(object) {
    var count = 0;
    for(key in object) {
      // hasOwnProperty method check own property of object
      if(object.hasOwnProperty(key)) count++;
    }
    return count;
  }
  //!3.
  Object.getOwnPropertyNames(counterArray).length; // Output 3
//4.
_.size({one: 1, two: 2, three: 3});
//=> 3
//Underscore and lodash libraries have the method size dedicated to calculate the object length. We don't recommend to include one of these libraries just to use the size method, but if it's already used in your project - why not?

//---------------------------------------------
//Question 22. Difference between Function, Method and Constructor calls in JavaScript.

//functions : The simplest usages of function call:
function helloWorld(name) {
    return "hello world, " + name;
  }
  
  helloWorld("JS Geeks"); // "hello world JS Geeks"

//Methods in JavaScript are nothing more than object properties that are functions.
var obj = {
    helloWorld : function() {
      return "hello world, " + this.name;
    },
    name: 'John Carter'
  }
  obj.helloWorld(); // // "hello world John Carter"

  //
  var obj2 = {
    helloWorld : obj.helloWorld,
    name: 'John Doe'
  }
  obj2.helloWorld(); // "hello world John Doe"


//The third use of functions is as constructors. Like function and method, constructors are defined with function.
function Employee(name, age) {
    this.name = name;
    this.age = age;
  }
  
  var emp1 = new Employee('John Doe', 28);
  emp1.name; // "John Doe"
  emp1.age; // 28
// creates a brand new object and passes it as the value of this, and implicitly returns the new object as its result.

//---------------------------------------------
//!Question 23. What would be the output of the following code?

function User(name) {
    this.name = name || "JsGeeks";
  }
  
  var person = new User("xyz")["location"] = "USA";
  console.log(person);//USA

//---------------------------------------------
//Question 29. Write a function called deepClone which takes an object and creates a object copy of it
var personalDetail = {
	name : 'Nishant',
	address : {
	  location: 'xyz',
	  zip : '123456',
	  phoneNumber : {
	    homePhone: 8797912345,
	    workPhone : 1234509876
	  }
	}
}


//answer
function deepClone(object){
	var newObject = {};
	for(var key in object){
		if(typeof object[key] === 'object'  && object[key] !== null ){
		 newObject[key] = deepClone(object[key]);
		}else{
		 newObject[key] = object[key];
		}
	}
	return newObject;
}
//So Here deep copy means we have to copy all the property of personalDetail object including nested object.


//------------------------
 var newObject = function deepClone(obj) {
    return Object.create(obj)
}
//---------------------------------------------
//Question 31. Write a function called Clone which takes an object and creates a object copy of it but not copy deep property of object.
var objectLit = {foo : 'Bar'}; 
var cloneObj = Clone(obj); // Clone is the function which you have to write 
console.log(cloneObj === Clone(objectLit)); // this should return false
console.log(cloneObj == Clone(objectLit)); // this should return true

//answer
function Clone(object){
    var newObject = {};
    for(var key in object){
        newObject[key] = object[key];
    }
    return newObject;
  }
//---------------------------------------------
//!Question 33. How to check whether a key exist in a JavaScript object or not.
var person = {
	name: 'Nishant',
	age: 24
}

//1.
console.log('name' in person); // checking own property print true 
console.log('salary' in person); // checking undefined property print false

//2.
console.log(person.hasOwnProperty('toString')); // print false
console.log(person.hasOwnProperty('name')); // print true
console.log(person.hasOwnProperty('salary')); // print false

//---------------------------------------------
// /Question 34. What is NaN, why do we need it, and when can it break the page?
//it can break your table of numbers when it has an arithmetic operation that is not allowed. Here are some examples of how you can get NaN:
Math.sqrt(-5);
Math.log(-1);
parseFloat("foo"); /* this is common: you get JSON from the server, convert some strings from JSON to a number and end up with NaN in your UI. */

// /NaN is not equal to any number, it’s not less or more than any number, also it's not equal to itself:
NaN !== NaN //true
NaN < 2 // false
NaN > 2 // false
NaN === 2 // false

//!To check if the current value of the variable is NaN, you have to use the isNaN function.
//---------------------------------------------
//Question 35. Fix the bug using ES5 only
var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
//For ES6, you can just replace var i with let i.

// For ES5, you need to create a function scope like here:
var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function(j) {
    return function () {
      console.log('The index of this number is: ' + j)
    };
  }(i), 3000);
}
//This can also achieve by forEach (allows you to keep that variable within the forEach’s scope)
var arr = [10, 32, 65, 2];
arr.forEach(function(ele, i) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
})


//---------------------------------------------

//---------------------------------------------

//---------------------------------------------

//---------------------------------------------

//---------------------------------------------

//---------------------------------------------

//---------------------------------------------

//---------------------------------------------

//---------------------------------------------

//---------------------------------------------

//---------------------------------------------

//---------------------------------------------
