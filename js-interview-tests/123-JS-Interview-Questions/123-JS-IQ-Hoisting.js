// 4. What would be the output of following code?
var employeeId = '1234abe';
(function() {
	console.log(employeeId);
	var employeeId = '122345';
	(function() {
		var employeeId = 'abc1234';
	}());
}());

//undefined 


//-----------------------------------
// 5. What would be the output of following code?
(function() {
	console.log(typeof displayFunc);
	var displayFunc = function(){
		console.log("Hi I am inside displayFunc");
	}
}());

// undefined
// function
// 'Hi I am inside displayFunc'
// ReferenceError: displayFunc is not defined
// Answer
// undefined
//-----------------------------------
// 6. What would be the output of following code?
var employeeId = 'abc123';
function foo(){
	employeeId = '123bcd';
	return;
}
foo();
console.log(employeeId);

// Answer
// '123bcd'
//-----------------------------------
// 6. What would be the output of following code?
var employeeId = 'abc123';
function foo(){
	employeeId = '123bcd';
	return;
}
foo();
console.log(employeeId);

// Answer
// '123bcd'
//-----------------------------------
//! 7. What would be the output of following code?
var employeeId = 'abc123';

function foo() {
	employeeId = '123bcd';
	return;

	function employeeId() {}
}
foo();
console.log(employeeId);

//'abc123'
//the function employeeId(){} within the function foo(). When the code executes and you are in the function foo, 
//the function employeeId will be defined/hoisted. 
//You can think it like you are creating a variable employeeId and that you assigned a function there. 
//Because of that, when the code actually executes, it will use this function employeeId that got defined/hoisted 
//and it will override it with the value '123bcd'. In this way, the employeeId of the outer scope remains untouched.
//-----------------------------------
//8. What would be the output of following code?
var employeeId = 'abc123';

function foo() {
	employeeId();
	return;

	function employeeId() {
		console.log(typeof employeeId);
	}
}
foo();

//like 7
//Answer
//'function'
//-----------------------------------
//9. What would be the output of following code?
function foo() {
	employeeId();
	var product = 'Car'; 
	return;

	function employeeId() {
		console.log(product);
	}
}
foo();
//undefined
//-----------------------------------
//10. What would be the output of following code?
(function foo() {
	bar();

	function bar() {
		abc();
		console.log(typeof abc);
	}

	function abc() {
		console.log(typeof bar);
	}
}());
//function function
//-----------------------------------
//-----------------------------------

//-----------------------------------

//-----------------------------------
//-----------------------------------
//-----------------------------------
//-----------------------------------
//-----------------------------------

//-----------------------------------

