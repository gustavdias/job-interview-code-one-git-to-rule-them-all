//return [expression]; 
//Interrupt a function: A function immediately stops at the point where return is called.
function counter() {
	for (var count = 1; ; count++) {  // infinite loop
	  console.log(count + 'A'); // until 5
		if (count === 5) {          
		  return;
		}
		console.log(count + 'B');  // until 4
	  }
	console.log(count + 'C');  // never appears
  }
  
  counter();
  
  // Output:
  // 1A
  // 1B
  // 2A
  // 2B
  // 3A
  // 3B
  // 4A
  // 4B
  // 5A



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
//undefined


	function sayHello(){
		var name = "Hi John";
		var fullName = name;

		return fullName
	}
	console.log(sayHello.fullName);//undefined
	console.log(sayHello.name);//sayHello





	function sayHello(){
		var name = "Hi John";
		var fullName = name;

		return fullName
	}
	sayHello()
	console.log(fullName)
	console.log(sayHello.fullName);//
	console.log(sayHello.name);//

//------------------
// 2. What would be the output of following code ?
function getNumber(){
	return (2,4,5);
}

var numb = getNumber();
console.log(numb);
// 5
// undefined
// 2
// (2,4,5)
// Answer
// 5
//------------------

// 3. What would be the output of following code ?
function getNumber(){
	return;
}

var numb = getNumber();
console.log(numb);
// null
// undefined
// ""
// 0
// Answer
// undefined
//----------------------

// 4**. What would be the output of following code ?
function mul(x){
	return function(y){
		return [x*y, function(z){
			return x*y + z;
		}];
	}
}

console.log(mul(2)(3)[0]);
console.log(mul(2)(3)[1](4));

// 6, 10
// undefined undefined
// Reference Error
// 10, 6
// Answer
// 6, 10
//-------------------------
// 5**. What would be the output of following code ?
function mul(x) {
	return function(y) {
		return {
			result: x * y,
			sum: function(z) {
				return x * y + z;
			}
		};
	};
}
console.log(mul(2)(3).result);
console.log(mul(2)(3).sum(4));
// 6, 10
// undefined undefined
// Reference Error
// 10, 6
// Answer
// 6, 10
//--------------------------

// 6. What would be the output of following code ?
function mul(x) {
	return function(y) {
		return function(z) {
			return function(w) {
				return function(p) {
					return x * y * z * w * p;
				};
			};
		};
	};
}
console.log(mul(2)(3)(4)(5)(6));
// 720
// undefined
// Reference Error
// Type Error
// Answer
// 720
//--------------------------------
// 7. What would be the output of following code ?
function getName1(){
	console.log(this.name);
}

Object.prototype.getName2 = () =>{
	console.log(this.name)
}

let personObj = {
	name:"Tony",
	print:getName1
}

personObj.print();
personObj.getName2();
// undefined undefined
// Tony undefined
// undefined Tony
// Tony Tony


// Answer
// Tony undefined


// Explaination: getName1() function works fine because it's being called from personObj, so it has access to this.name property. But when while calling getnName2 which is defined under Object.prototype doesn't have any proprty named this.name. There should be name property under prototype. Following is the code:

function getName1(){
	console.log(this.name);
}

Object.prototype.getName2 = () =>{
  console.log(Object.getPrototypeOf(this).name);
}

let personObj = {
	name:"Tony",
	print:getName1
}

personObj.print();
Object.prototype.name="Steve";
personObj.getName2();