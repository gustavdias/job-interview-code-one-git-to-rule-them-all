//closures
//this functions runs when the document is ready, creates var a and sets up the listener
$(document).ready(function(){
	var a = 1;
	$('button').on('click', function(){
	  alert(a)
	})
  })
  
  //when the function is finished it would destroy a if there was no reference to it in the listener //!inside a function
  //Since there is a reference, since the listener needs a, it stores is value
  //!closure is something that retains state and scope, after they execute
  // a is storage in a closure
  for (var i = 0; i < 3; i++) {
	setTimeout(() => {
	  console.log(i);
	}, 1000);
  }

  //Can you read it step by step?

//--------------------------
//! 2. What would be the output of following code ?
var employeeId = "aq123";
function Employee() {
  this.employeeId = "bq1uy";
}
console.log(Employee.employeeId);

// Reference Error
// aq123
// bq1uy
// undefined
// Answer
// undefined

//---------------------------

var employeeId = "aq123";

function Employee() {
  this.employeeId = "bq1uy";
}
//Is this treating a function as a object? Is it because all in JS that is not a primitive type, is a object?
console.log(new Employee().employeeId);
Employee.prototype.employeeId = "kj182";
Employee.prototype.JobId = "1BJKSJ";
console.log(new Employee().JobId);
console.log(new Employee().employeeId);

// bq1uy 1BJKSJ bq1uy undefined
// bq1uy 1BJKSJ bq1uy
// bq1uy 1BJKSJ kj182
// undefined 1BJKSJ kj182
// Answer
// bq1uy 1BJKSJ bq1uy

//--------------------------------------------------------

function x(){
    console.log('function declaration')
}

x = function (){
    console.log('function expression')
}

//--
const f = function(){
}

//--
//!Here you can't add anything directly
f = function(){ console.log('test')}
//Uncaught TypeError: Assignment to constant variable.
//--

//but you can add things to the prototype
f.prototype.add = function(){
}
console.log('f = ', f)
// f =  ƒ (){

// }
console.dir(f)//you can't use multiple arguments
// ƒ f()
// arguments: null
// caller: null
// length: 0
// name: "f"
// prototype: {add: ƒ, constructor: ƒ}
// __proto__: ƒ ()
// [[FunctionLocation]]: VM530:1
// [[Scopes]]: Scopes[2]

//---------------------------------------------------------------------
//! How can I access a var inside a function
// 1. What would be the output of following code ?
(function(){
	function sayHello(){
		var name = "Hi John";
		return //returns undefined
		{
			fullName: name
		}
	}
	console.log(sayHello().fullName);
})();
// Hi John
// undefined
// Reference Error
// Uncaught TypeError: Cannot read property 'fullName' of undefined
// Answer
// Uncaught TypeError: Cannot read property 'fullName' of undefined

//--
(function(){
	function sayHello(){
		var name = "Hi John";
		var fullName = name;

		return fullName
	}
	console.log(sayHello().fullName);
	console.log(sayHello().name);

})();
//undefined
//--
(function(){
	function sayHello(){
		var name = "Hi John";
		var fullName = name;
		return fullName
	}
    console.log(sayHello());
    return sayHello()//! can I return it so the console.log from outside works????
})();
console.log(sayHello());

//--
(function(){
	function sayHello(){
		var name = "Hi John";
		var fullName = name;
		return fullName
	}
    console.log(sayHello());
    return sayHello()//! can I return it so the console.log from outside works????
})(console.log(sayHello()));
//----
//! how to use callback here???!! to take the func outside IIFEs?
(function(){
	function sayHello(){
		var name = "Hi John";
		var fullName = name;
		return fullName
	}
    console.log(sayHello());
    return sayHello()
})();
console.log(sayHello());
//--
(function(){
	return function sayHello(){//! one idea!
		var name = "Hi John";
		var fullName = name;
		return fullName
	}
})();
console.log(sayHello());

//--
//!private var
function sayHello(){
    var name = "Hi John";
    var fullName = name;
    return fullName
}
sayHello()
console.log(sayHello())
//!Hi John

//--
	function sayHello(){
		var name = "Hi John";
		var fullName = name;

		return fullName
	}
	console.log(sayHello.fullName);//undefined
    console.log(sayHello.name);//sayHello  //because it is an object???
//--

	function sayHello(){
		var name = "Hi John";
		var fullName = name;
console.log('from inside func: ' , name, fullName)
		return fullName
	}
	// sayHello()
	console.log(fullName)
	console.log(sayHello.fullName);//
	console.log(sayHello.name);//

//--



