//Quick interview test to know if you know JS enough to start a interview process

//-------------------
let y = 1;
let x = y = 2
console.log(x);//2

//-------------------
for(var i=0; i<10; i++){
    console.log(i);
}
//prints 0 to 9

//-------------------

let obj = {
    "0":1,
    0:2//when you put like this JS converts to "0" and "0" becomes 2
};
console.log(obj["0"])/2
console.log(obj[0])//2
console.log(obj["0"]+obj[0])//4

//-------------------
var apples = 3;
var Apples = 4
console.log(apples)//3
console.log(Apples)//4
//-------------------
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  console.log(text += " The number is " + i+", ");
}
// The number is 0, 
// VM1436:5  The number is 0,  The number is 1, 
// VM1436:5  The number is 0,  The number is 1,  The number is 2, 

//-------------------
//array of elements "a", "b"
let a = [ "a", "b" ]
let a = new Array("a","b")

//!-------------------

let user = {
    sayHi: function() {
        console.log(this);
    }
}
//(user.sayBye = user.sayHi)();//user is not defined
user.sayHi()

//fixed version

//!-------------------
let a = [1,2]
(function() {console.log(a)})()
//VM1981:2 Uncaught TypeError: [1,2] is not a function at <anonymous>:2:1

//-------------------

var sum = 4 - "5" + 0xf - "1e1";
typeof(sum) == typeof(5);//true

//-------------------
console.log(+"infinity")//NaN
alert(+"infinity")//NaN

//----------------------------------------------------------------------------------------------------
    
    