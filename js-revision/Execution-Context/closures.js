//let block scope doesn't need closure
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
console.log("after the loop");
//after the loop
//0
//1
//2

//how the code works
//i=0__f(c:i(0));//c close i
//i=1__f(c:i(1));
//i=2__f(c:i(2));

//--

for (let i = 0; i < 3; i++) {
console.log(i)
}
//--------------------------------
//var scope needs closure

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
console.log("after the loop");

//after the loop
//3x 3

//how the code works
//i=0__f(c:i(3));//c close i
//i=1__f(c:i(3));
//i=2__f(c:i(3));
//------

//with closures
for (var i = 0; i < 3; i++) {
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(i);
}
console.log("after the loop");

//after the loop
//0 1 2
//-------------------------------
//this functions runs when the document is ready, creates var a and sets up the listener
$(document).ready(function(){
  var a = 1;
  $('button').on('click', function(){
    alert(a)
  })
})

//when the function is finished it would destroy a if there was no reference to it in the listener inside a function
//Since there is a reference, since the listener needs a, it stores is value
//!closure is something that retains state and scope, after they execute
// a is storage in a closure

//Memory leak: when you have variable sin memory that you don't need it.

//In JS everything that is not in use and JS knows, it is thrown into the garbage collector