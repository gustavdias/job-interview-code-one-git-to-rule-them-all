//scope === variable access // when a piece of code is running, what variables do I have access to

//context === this //?

//scope = var
var a = 1;
window.a; //1
window.a === a; //true

//parent scope
function foo() {
  //child scope
  var b = 2;
  console.log(a)//1
}
foo();
console.log(b); //undefined


//---
var a = 1;

//parent scope
function foo() {
  //child scope
  var a = 2;
  console.log('child scope', a)//2
  console.log('child scope accessing global var: ', window.a)//1

}
foo();
console.log('parent scope: ', a); //1

//------

var a = 1;

//parent scope
function foo() {
  //child scope
  var a =1;
  a = 2; //JS will check, is there a variable a in this scope?
  console.log('child scope', a)//2
  console.log('child scope accessing global var: ', window.a)//1

}
foo();
console.log('parent scope: ', a); //1

//--without var in the child scope
var a = 1;

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

//--If there is no window.a it will create it there
//--without var in the child scope
//! If you forget to put var, you will pollute the root scope 
//! - try to keep the root scope clean!
//! 'use strict' to avoid it!


//parent scope
function foo() {
  //child scope
  a = 2; 
  console.log('child scope', a)//2
  console.log('child scope accessing global var: ', window.a)//2

}
foo();
console.log('parent scope: ', a); //2

//----------------------------
var a = 1;

function foo() {
  var a = 2; 
  console.log('child scope', a)//2
  console.log('child scope accessing global var: ', window.a)//1

}

function bar() {
  a = 3;
  console.log('bar child scope: ', a);//3
}
foo();
bar();
console.log('parent scope: ', a); //3