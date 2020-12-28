var name = 'Tyler'
var handle = '@tylermcginnis'
function getUser (){
    return {
        name: name,
        handle: handle
    }
}

//----
// Global Execution Context
// Phase: Creation
// window: global object
// this: window
// name: undefined
// handle: undefined
// getUser: fn()// func is put into memory

//--

// Global Execution Context
// Phase: Execution
// window: global object
// this: window
// name: "Tyler"
// handle: "@tylermcginnis"
// getUser: fn()

//---------------
//!Hoisting: the process of assigning a variable declaration a default value of "undefined" during the creation phase
//On the creation phase, any variable declarations are assigned a default value of 'undefined'

//Global execution context
//1. Create a global object.
//2. Create an Object called 'this'.
//3. Set up memory space for variables and functions.
//4. Assign variable declarations a default value of 'undefined' while placing any function declaration in memory.


//function execution context
//1. Create an arguments object.
//2. Create an Object called 'this'.
//3. Set up memory space for variables and functions.
//4. Assign variable declarations a default value of 'undefined' while placing any function declaration in memory.



//
function fn(){
    console.log(arguments)
}
fn(x,y)


//arguments is a array-like object

var name = 'Tyler'
var handle = '@tylermcginnis'
function getUser (){
    return {
        name: name,
        handle: handle
    }
}
getUser()
//{name: "Tyler", handle: "@tylermcginnis"}
//------------------
//Execution stack: any time a function is invoked,
// a new execution execution context is created and 
//added to the execution stack.

//When a function finishes running through 
//the Creation Phase and execution phase, it gets popped off the execution stack

//!Js is single-threaded: only one task can be executed at a time

function a(){
    console.log('In fn a')
    function b(){
        console.log('in fn b')
        function c (){
            console.log('in fn c')
        }
        c()
    }
    b()
}
a()

//-----------------------------

//Local variables
var name = 'Tyler'
var handle = '@tylermcginnis'
function getURL (handle){
    var twitterURL = 'http://twitter.com/'
    return twitterURL+handle
    }

getURL(handle)

//?---------------------------------------
//Scope: the current context of execution

function foo(){
    var bar = 'Declared in foo'
}
foo()
console.log(bar)//by the time this line runs, foo's execution context where bar is define,
//has already been popped off the stack.
//It is like bar never existed, because foo execution context is already gone

//--

function first (){
    var name  = 'Jordyn'
console.log(name)
}

function second(){
    var name = 'Jake'
console.log(name)
}

console.log(name)//undefined
var name = 'Tyler'
first()//Jordyn
second()//Jake
console.log(name)//Tyler

//--------------------------------------------------

//!Closures

var count = 0 

function makeAdder(x){
    //the inner function is going to create a closure over the execution context variable environment
    //of it parent
    return function inner (y){
        return x+ y;
    }
}

var add5 = makeAdder(5);
count += add5(2)