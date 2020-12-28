/*Spread Operator / Rest Operator*/

function declaration(...rest) {} //! closes all into an array
functionCall(...spread) //! opens array

//add the elements of an existing array into a new array

var certsToAdd = ['Algorithms and Data Structures', 'Front End Libraries']; 
var certifications = ['Responsive Web Design', ...certsToAdd, 'Data Visualization', 'APIs and Microservices', 'Quality Assurance and Information Security'];
console.log(certifications);
// ["Responsive Web Design", "Algorithms and Data Structures", "Front End Libraries", "Data Visualization", "APIs and Microservices", "Quality Assurance and Information Security"]


//---------------------------------------------------------------------

//pass elements of an array as argument to a function
function addThreeNumbers(x, y, z) { 
	console.log(x+y+z)
}
var args = [0, 1, 2, 3];
addThreeNumbers(...args);//3
//---------------------------------------------------------------------

//copy arrays
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 
console.log(arr);//[1, 2, 3]
console.log(arr2);//[1, 2, 3, 4]
//if you didn't copy the array, if you 'arr2.push() to the arr2, it will add to arr too.

//---------------------------------------------------------------------

//concatenate arrays, put 2 arrays together
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
//arr1.concat(arr2); Before ES6 with ...spread operator
arr1 = [...arr1, "freeCodeCamp", ...arr2];
console.log(arr1);//[0, 1, 2, "freeCodeCamp", 3, 4, 5]
//---------------------------------------------------------------------

function declaration(...rest) {} //closes all into an array
functionCall(...spread) //opens array



//REST: condense multiple elements into an array (basically tisFullAge6he opposite of spread operator "...")
//!The spread operator is used in a function call
//"..." spread = spreads or expands an array into its elements

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);
//ES6
const sum3 = addFourAges(...ages); // ... means to expand the array into its components
console.log(sum3);
//--

//!The rest operator is used in the function declaration 
//"...rest" = collects multiple elements and condenses into a single array element
//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log( (2016 - cur) >= 18));
 }
 isFullAge6(1990, 1999, 1965, 2016, 1987);
//--
//!...theArgs has a rest operator because the 3 dots "..." are being passed in as an argument into a function
function multiply(multiplier, ...theArgs) {
    return theArgs.map(function(element) {
      return multiplier * element;
    });
  }
  
  var arr = multiply(2, 1, 2, 3); //2 will be the multiplier, and the rest will be condensed into an array called theArgs
  console.log(arr)//[2, 4, 6]
//---------------------------------------------------------------------
// 