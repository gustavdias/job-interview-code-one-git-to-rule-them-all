//Arrow function is good when inside of a class
//Arrow function doesn't respect the object.
//----
"hello".length % "hi\\".length
//5%3
//2
//----------------------------------------
//how to determine is something is an array?
console.log(typeof[]);//'object
console.log([].constructor); //Array
console.log === Array; //true
typeof(null) //will return object.
arr = [1,2,3]
arr instanceof Array;

//1.
function isArray(value){
   return Object.prototype.toString.call(value) === '[object Array]';
}
//2.
 // Duck typing arrays
 function isArray(value){
   return typeof value.sort === 'function';
}
//3.
function isArray(value) {
	return value.constructor.name === "Array";
}
//4.
function isArray(value) {
	return value instanceof Array;
}
//----------
//instanceof is much more intelligent: it works on the level of prototypes.
//instanceof doesn’t work with primitive types. 
// /instanceof operator checks the current object and returns true if the object is of the specified type
var dog = new Animal();
dog instanceof Animal; // Output : true
//Question 7. How to check if an object is an array or not?

var arrayList = [1 , 2, 3];

console.log(arrayList.constructor);
Array.isArray(arrayList);
//------------------------------------------------------------
null == undefined //true
NaN == NaN           //false
true == "1"          //true
0 == false           //true
[] == false // => true
NaN !== NaN //true
NaN < 2 // false
NaN > 2 // false
NaN === 2 // false
'' == false//true
"" == false //true

//------------------------------------------------------------

var x
//undefined
x +=1 //x = x+1
//NaN

//------------------------------------------------------------
//var functional scope
//let and const block
const c; //undefined //chrome gives you a error right away because it knows that after will be undefined and you can change it, so it is useless
//Uncaught SyntaxError: Missing initializer in const declaration
c=1 // error
//------------------------------------------------------------

//ways of creating a object
//1.
var person = {}
person.age = 21;
person["age"] = 21;
//2. OBJECT LITERALS
var person = {
    firstName: "John",
    lastName: "Smith",
    dateOfBirth: 1985, 
    spokenLanguages: {
        native: "English",
        fluent: "Spanish",
        intermediate: "Chinese"
      },
    getName: function(){
        return "User's name: " + this.firstName + " " + this.lastName;
     }
  };
//3. From Object using new keyword
var person = new Object()
person.age = 21;
person["age"] = 21;


//OBJECT.CREATE() METHOD
var user001 = {
    firstName: "John",
    lastName: "Smith",
    dateOfBirth: 1985,
    getName: function(){
       return "User's name: " + this.firstName + " " + this.lastName;
    }
 };
 
 var user002 = Object.create(user001);
     
 user002.firstName = "Jane";
 user002.lastName = "King";
 user002.dateOfBirth = 1989;

//4.CONSTRUCTOR FUNCTIONS or function based
function User(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
 //here the method is inside the object
    this.getName = function(){
       return "User's name: " + this.firstName + " " + this.lastName;
    }
 }
 //!here the method is added in the prototype property(it is a object too):
 User.prototype.login = function () {
    this.online = true;
    console.log(this.email, "has logged in - user online");
   };
//it is just the constructor function that has a prototype, a object doesn't have

 var user001 = new User("John", "Smith", 1985);

 //!Inheritance
 //to inherit the  prototype methods from User
Admin.prototype = Object.create(User.prototype); //what you want to inherit you pass inside User.prototype
//! I don't think you need to use Admin.prototype, because Object.create(User.prototype), already puts it inside a prototype.
//you create a object and passes the User.prototype inside of it and them passes the object ot the Admin Prototype.

 //5.ECMASCRIPT 6 CLASSES
 class User {
    constructor(firstName, lastName, dateOfBirth) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.dateOfBirth = dateOfBirth;
 
       this.getName = function(){
           return "User's name: " + this.firstName + " " + this.lastName;
       }
    }
 }
 var user001 = new User("John", "Smith", 1985);

 //------------------------------------------------------------
// converting JS to JSON object
let obj = JSON.stringify(jsonData);
// JSON syntax
let jsonData = '{ "name": "John", "age": 22 }';


// converting JSON to JavaScript object
let obj = JSON.parse(jsonData);
// JS syntax
{name: "John"; age: 22}

 //------------------------------------------------------------
//!Functions
//Method: function inside a object
calculateAge: function()
//Regular function: it is outside of the object because of the way it was written.
function innerFunction() 

//Function Declaration/statement
function func(i){}
//Function Expression
var func = function(i)
//Anonymous Function - no name and can't be reused
rollDice.querySelector('.btn-roll').addEventListener('click', function(){
    // Do something
 })
 
 //result - stores the result in a result var
 
 //return
 //returns the value and finishes the function (break)

 //expression piece of code that always produces a value/result.
 //ex.: return

 //statement performs a action - ex.: loops, if, console.log()
//-------------------------

//Closures (is the inner function) and higher-order function (is the one from outside)

 //!closures the function from inside, that uses something from outside function higher-order func
 //A Closure is the combination of a function and the environment in which that function was declared.
 //The environment consists of any local variables that were in scope at the time that closure was created.
 //function that keeps reference to variables from its parent’s scope even after the parent has returned.
//In JS, all functions create closures.


// One way to use a closure, is to use private methods.
// Private methods can only be called by other methods in the same class. Yet JS doesn’t have a native way of doing this.
// It is possible to emulate private methods with closures:
var counter = (function() {
// This will be private
 var privateCounter = 0;
 function changeBy(val) {
   privateCounter += val;
 }
// This will be public because of the return - It is a public method
 return {
   increment: function() {
     changeBy(1);
   },
   decrement: function() {
     changeBy(-1);
   },
   value: function() {
     return privateCounter;
   }
 };  
})();
console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
0
2
1
// This function will run Immediately because of () in the end. It will create a shared environment (scope) and assign it to var counter.
// From outside the counter, you will only be able to access what is returned (the public method).
// The private method and variable can only be accessed by the public method, but never from outside the var counter.


 //------------------------
//!callbacks function passed as argument inside another function - high-order function ()

//!Immediately-Invoked Function Expressions (IIFEs)
//function expression(named or anonymous) that is executed right away after its creation.
(function () {
    console.log("My favorite number is 3");
   })();
   //The first enclosing parentheses makes the function an expression.
//the last two parentheses tell JS to involve or call this anonymous function immediately.

//Named IIFE with arguments
(favNumber = function (num = 3) {
 console.log("My favorite number is " + num);
})();
//Since you passed a name to the function, you can now invoke it:
favNumber(5);
//The most common use for IIFEs is to avoid variable declaration in the Global Scope and to create Closures and consequently data privacy
var a = 2;
(function() {
 var a = 3;
 console.log(a);
})();
console.log(a);
// It gives you:
3
2


//!With ES6 you can accomplish some of the same things as IIFE through:
//let and const use block scope, as long as you place a variable in a block, they will not pollute the Global Scope.
let b = 2;
{
 let b = 3;
 console.log(b);
}
console.log(b);
// It gives you:
3
2
//The example above is no longer a IIFE, but a block.

   
 //------------------------------------------------------------

 //------------------------------------------------------------

 //------------------------------------------------------------

 //------------------------------------------------------------

 //------------------------------------------------------------

 //------------------------------------------------------------

 //------------------------------------------------------------

 //------------------------------------------------------------

 //------------------------------------------------------------

 //------------------------------------------------------------

