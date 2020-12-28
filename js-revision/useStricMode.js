
/* Strict Mode for the entire file*/
"use strict"

//to individual functions by putting it in the first line of the function
function myFunction(){
    "use strict";
    y=4.14;//error - var y = 3.14
    console.log(y)
}

//converts bad syntax/mistakes into errors
//mistyping a var makes a global var, in strick mode is a error
y=4.14;// error
delete x; // not allowed

//with and eval changes
//securing JS

var obj = {}
Object.defineProperty(obj, "x",{value:0, writable:false});
obj.x = 3.14;//since you select x as non writable, you get a error
//no error feedback outside strick mode, just on strick mode
//when assign value to:
//non writable properties,
//get only property
//non existence property, variable or object

var obj = {get x() {return 0}};
obj.x = 3.14;//error

delete Object.prototype // error attempting to delete a undetectable property


//in strick mode functions parameter's names should be unique
function sum(a,a,c){//you can't have two a
    'use strict';
    return a+b+c;
}

//the with mode extends the scope chain for a statement //strict mode forbids it
var x = 17;
with (obj) {
    x;//Is this var x  or obj.x?
}
// in strick mode eval does not introduce new variables.
eval("var x;")//x only will exist right in this little section of code
// will introduce var x into the surrounding function or global scope
//in strick mode eval creates variables only for the code being evaluated
//eval can't effect whether a name refers to an outer variable or some local variable.

var x = 17;
var evalX = eval ("'use strict'; var = 42; x;");
console.assert(x ===17);
console.assert(evalX ===42);


//Securing JS
//Easy to write secure JS
//strick mode makes almost impossible to refer to the window object with this (in the browser)
//impossible to easily access the most recently called function and arguments used to run a function


//-------------------

//without 'use strick'
//parent scope
function foo() {
    //child scope
    a = 2; //JS will check, is there a variable a in this scope? 
    //!If no, it will point to the a in the global scope
    console.log('child scope', a)//2
    console.log('child scope accessing global var: ', window.a)//2
  
  }
  foo();
  console.log('parent scope: ', a); //2

//with 'use strick'

"use strict"
function foo() {
    //child scope
    a = 2; //JS will check, is there a variable a in this scope? 
    //!If no, it will point to the a in the global scope
    console.log('child scope', a)
    console.log('child scope accessing global var: ', window.a)
  
  }
  foo();
  console.log('parent scope: ', a); 
  //VM3910:4 Uncaught ReferenceError: a is not defined