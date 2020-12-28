//New
// 1. Variable Declarations with let and const -ok
// 2. Blocks and IIFEs - use let and const -ok
// 3. Strings - `` ${ } - ok
// 4. Arrow Functions -ok
// 5. Destructuring -ok
// 6. Arrays ok
// 7. The Spread Operator -ok
// 8. Rest and Default Parameters ok
// 9. Maps ok
// 10. Classes and subclasses ok

// 4. Arrow Functions
// Lexical ‘this’ keyword.
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
person.printNameArrow()//Bob
person.printNameFunction()//does not print out any name
//it defines "this" based on where the function is called, and it is outside the class Person, so it gets the global scope.

person.printName2Function()

//--------------------------------------------------------------------------
// 5. Destructuring


//--------------------------------------------------------------------------
// 5. Arrays
