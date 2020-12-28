// 1. What would be the output of following code ?
function passWordMngr() {
  var password = "12345678";
  this.userName = "John";
  return {
    pwd: password,
  };
}
// Block End
var userInfo = passWordMngr();
console.log(userInfo.pwd);
console.log(userInfo.userName);

// 12345678 Window
// 12345678 John
// 12345678 undefined
// undefined undefined
// Answer
// 12345678 undefined

function passWordMngr() {
  var password = "12345678";
  this.userName = "John";
  return {
    pwd: password,
  };
}
// Block End
var userInfo = passWordMngr();
console.log(userInfo.pwd);//12345678
console.log(userInfo.userName);//undefined
console.log(userName);//John

//---------------
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

var employeeId = "global employeeId";
function Employee() {
  var employeeId = "with var";

//   employeeId = "without var";
//   this.employeeId = "this.employeeId ";
  console.log("this: ", this);
  console.log("this.employeeId : ", this.employeeId );

  console.log("employeeId without var: ", employeeId);
  console.log("employeeId with var: ", employeeId);
}
Employee()
Employee().employeeId

console.log('Employee.employeeId outside ',Employee.employeeId);
console.log("employeeId global ",employeeId)

//--
function Employee() {
	var employeeId = "aq123";
	console.log("employeeId with var: ", employeeId);

	function inside(){
		this.employeeId = "bq1uy";
		console.log("this: ", this);
		console.log("this.employeeId : ", this.employeeId );


	}
}
console.log(Employee.inside.employeeId);

//--

//------------
// 3. What would be the output of following code ?
var employeeId = "aq123";

function Employee() {
  this.employeeId = "bq1uy";
}
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

//-----------------------
// 4. What would be the output of following code ?
var employeeId = "aq123";
(function Employee() {
  try {
    throw "foo123";
  } catch (employeeId) {
    console.log(employeeId);
  }
  console.log(employeeId);
})();

// foo123 aq123
// foo123 foo123
// aq123 aq123
// foo123 undefined
// Answer
// foo123 aq123


//--
//try, catch, finally, throw - error handling in JavaScript
//Used most when handling data from other sources or user input (those can be unreliable)
//Common to see see it with Ajax calls and async code
//error handling use the keywords:
//try, catch, finally, throw

//try{} - let's you test a block of code for error
//catch{} - let's you handle the error
//throw{} - let's you create custom errors
//finally{} - let's you execute code after try and catch, regardless of the result.


/* Try, catch, finally */

try {
  console.log('Start of try runs');
  
  unicycle;//this is the error, there is nothing in the program called unicycle

  console.log('End of try runs -- never reached'); //since the error was reached, it never goes to this statement

} catch(err) {

  console.log('Error has occured: ' + err); 
  //err: when a error occurs, JS generates an object containing the details about it.

} finally {
  console.log('This is always run'); 
}

console.log('...Then the execution continues');




let json = '{ "age": 30 }';
 
try {
 
  let user = JSON.parse(json); 
  if (!user.name) {
    throw new SyntaxError("-------------Inside throw - Incomplete data: no name!!!---------");
    //SyntaxError is the name of the error and after is the message
  }
 
  console.log( user.name );
 
} catch(e) {
  console.log( "_______Inside catch - JSON Error: _____" + e ); 
}




var employeeId = "1";
(function Employee() {
  try {
    throw "2";//what you throw here will be passed to catch as the error
  } catch (employeeId) {
    console.log('inside console.log of catch: ', employeeId);
  }
  console.log('outside error handling: ', employeeId);
})();

// inside console.log of catch:  2
// outside error handling:  1