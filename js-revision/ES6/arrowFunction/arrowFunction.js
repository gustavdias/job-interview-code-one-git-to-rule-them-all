// Notes for Arrow Function:
// 1. function keyword NOT needed
// 2. let/const variableName = (argument) => {function body}
// 3. short hand: curly braces and return keyword NOT needed, return result directly after =>
// 4. brackets NOT needed in SINGLE parameter function's argument
// 5. do NOT bind "this" (avoid for methods) or "arguments". 
// 6. It can NOT be used as constructors or generators (I don't know what those mean yet...)

// A good suggestion from developer Lars Schöning:
// 1. Use function in the global scope and for Object.prototype properties.
// 2. Use class for object constructors.
// 3. Use => everywhere else.



function sum(a, b) {
  return a + blur;
}

let sum2 = (a, b) => a + blur;
//-------------------------

function isPositive(number) {
  return number >= 0;
}

let isPositive2 = (number) => number >= 0;
//-------------------------

function randomNumber() {
  return Math.radom;
}
let randomNumber2 = () => Math.radom;
//-------------------------

document.addEventListener("click", function () {
  console.log("click");
});


//arrow functions are good for:
// passing a function to another function
// anonymous functions
document.addEventListener("click", () => console.log("click"));

document.addEventListener("click", () => {
  console.log("click");
});

// passing a function to another function
// anonymous functions


//! The most important fact of a arrow function is that they redefine the 'this' keyword inside of them, as opposed to normal functions
//!=> this is in the scope where the function is defined.
//!function this is based on where the function is called.

var name = 'var - global scope'
let name2 = 'let - block scope'

class Person {
    constructor(name){
        this.name = name;
        this.name2 = name;
    }

printNameArrow() {
    setTimeout(()=>{
        console.log('Arrow: '+this.name)//when you use a arrow function 'this' is not redefined
        //so 'this' is going to be the exact same as this in the scope where the function is defined.
    },100)
};
//name
//it defines "this" based on where the function is called
printNameFunction(){
    setTimeout(function(){
        console.log('function: '+this.name)
    },100)
};
//name2
printName2Function(){
    setTimeout(function(){
        console.log('function2: '+this.name2)
    },100)
}
};
let person = new Person('Bob');
// printNameArrow() - Uncaught ReferenceError: printNameArrow is not defined
person.printNameArrow()//Arrow: Bob
person.printNameFunction()//function: var - global scope
//it defines "this" based on where the function is called, and it is outside the class Person, so it gets the global scope.

person.printName2Function()// function2: undefined (because it is block scope because of let)


//----------------
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


//---------------------

//Why to use arrow function in react?

//In react you can have on click handles
//Is not a class method
//It is a class property



class App extends Component{
  state = {
    loggedIn: false
  }
  //loginHandle is a class property
  //In the newer version of react you can define property like that
  //if it is a normal function, a function inside a function, 'this' kw belongs to the function above?
  loginHandle = () => {
    this.setState(prevState => ({
      loggedIN: !prevState.loggedIN
    }))
  }
}
//render(0 is a class method)
render(){
  return (
    <div>

    </div>
  )
}
