//!I don't know


// 1. What would be the output of following code ?
function funcA(){
	console.log("funcA ", this);//funcA  Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
	(function innerFuncA1(){
		console.log("innerFunc1", this);//innerFunc1 Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
		(function innerFunA11(){
			console.log("innerFunA11", this);//innerFunA11 Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
		})();
	})();
}
	
console.log(funcA());//undefined

// funcA  Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// VM5813:5 innerFunc1 Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// VM5813:7 innerFunA11 Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// VM5813:12 undefined

//-------------
undefined == true// false
undefined === true// false

"Hello" == true// false
"Hello" === true// false
!("Hello" === true)// true

var obj = {
	message: "Hello",
	innerMessage: `inside: ${this.message}`
	}
    console.log(obj.innerMessage)//inside: undefined

//2. What would be the output of following code ?
var obj = {
	message: "Hello",
	innerMessage: !(function() {
		console.log("inside: ",this.message);
	})()
};
	
console.log("outside: ", obj.innerMessage);
// inside:  undefined
// outside:  true

//-------------------

//3. What would be the output of following code ?
var obj = {
	message: "Hello",
	innerMessage: function() {
		return "inside: " + this.message
	}
};
	
console.log(obj.innerMessage());//inside: Hello
//--

var obj = {
	message: "Hello",
	innerMessage: function() {
		console.log("inside: ",this.message);//inside:  Hello
	}
};
obj.innerMessage()
//------------------------

// 4. What would be the output of following code ?
var obj = {
  message: 'Hello',
  innerMessage: function () {
    (function () {
      console.log(this.message);
    }());
  }
};
console.log(obj.innerMessage());

//undefined