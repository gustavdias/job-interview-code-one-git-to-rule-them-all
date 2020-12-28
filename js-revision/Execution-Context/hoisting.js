//Variable and function declarations are scanned before any code is executed. 
//Function Declaration/statement
function func(i){}

//function declarations: for each function, a property is created in the Variable Object, pointing to the function. 
//variable declarations: for each variable, a property is created in the Variable Object, and set to undefined.

//!Variable declarations with hoisting (just works with var, not with let or const)
// var vs let
//var
console.log(definedLater);
var definedLater;
definedLater = 'I am defined!'
//undefined (chrome fixes to: I am defined!)

//let
console.log(definedLater);
let definedLater;
definedLater = 'I am defined!'
// VM236:1 Uncaught ReferenceError: definedLater is not defined


//---
//variable definition:
console.log(definedLater);
var definedLater;
definedLater = 'I am defined!'
console.log(definedLater)
//undefined (chrome fixes to: I am defined!)
//I am defined!

//---

//to JS they are the same
console.log(definedLater);
var definedLater;
definedLater = 'I am defined!'


var definedLater;
console.log(definedLater);
definedLater = 'I am defined!'

///////////////////////////////////////////////////////
//!Function statement/declaration with hoisting:
//Function Declaration works
function func(i){}


doSomethingElse();
function doSomethingElse(){
  console.log('I did it!');
}
//I did it!

// Hoisting (for functions) only works for //!Function declarations.
// Function declaration:
calculateAge(1965); // You can use the function before you actually declared it.
// It is stored as a variable before the code is executed.



//Function Expression doesn't work
var func = function(i){}

functionVar(); 
var functionVar = function(){
  console.log('I did it!');
}
//You get the error because functionVar has being declared, but it’s undefined

//To the program, the code below is the same:
functionVar(); 
var functionVar = function(){
  console.log('I did it!');
}
// /Uncaught TypeError: functionVar is not a function

var functionVar;
functionVar(); 
var functionVar = function(){
  console.log('I did it!');
}
//Uncaught TypeError: functionVar is not a function

// 1. To make things easier to read, you should declare all your variables at the top of your function scope.
// 2. Define your variables before you need to use them, so it’s clear from each scope your variables are coming from.
// 3. Define your functions at the bottom of the scope, to keep them out of the way.

