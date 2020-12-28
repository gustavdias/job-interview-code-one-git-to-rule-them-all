//higher order functions
// a function returning a function
//can be a function expression//
let x = function () {
  console.log("I am called from inside the function");
};

let y = function (callback) {
  console.log("do something");
  callback();
};

y(x);

//--
//can be a function declaration
function y(callback){
  console.log("do something");
  callback();//! you can call the function here
}

function x(){
  console.log("I am called from inside the function");
}
y(x);
//do something
//I am called from inside the function

//--
function y(callback){
  console.log("do something");
  // callback()//! if you already called the function and use callback(), you will get the error VM7610:3 Uncaught TypeError: callback is not a function
}

function x(){
  console.log("I am called from inside the function");
}
y(x());//! you can call the function here 
//do something
//I am called from inside the function