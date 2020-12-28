//1. What would be the output of following code?
var strA = "hi there";
var strB = strA;
strB="bye there!";
console.log (strA)
// Answer
// The output will be 'hi there' because we're dealing with strings here. Strings are passed by value, that is, copied.




//2. What would be the output of following code?
var objA = {prop1: 42};
var objB = objA; 
objB.prop1 = 90;
console.log(objA) 
//The output will be {prop1: 90} because we're dealing with objects here. Objects are passed by reference, that is, objA and objB point to the same object in memory.


// 4. What would be the output of following code?
var arrA = [0,1,2,3,4,5];
var arrB = arrA;
arrB[0]=42;
console.log(arrA)
// Answer
// The output will be [42,1,2,3,4,5]

//-------------------------------------------------
// 7. What would be the output of following code?
var arrA = [{prop1: "value of array A!!"}, {someProp: "also value of array A!"},3,4,5];
var arrB = arrA.slice();
arrB[0].prop1=42;
arrB[3] = 20;
console.log(arrA);
// Answer
// The output will be [{prop1: 42}, {someProp: "also value of array A!"}, 3,4,5].


console.log(arrA);//[{prop1: 42}, {someProp: "also value of array A!"}, 3,20,5].

//slice does a shallow copy of the array - primitive types are copied and relative types are just passed as reference.
// The slice function copies all the elements of the array returning the new array. 
//However, it doesn't do deep copying. Instead it does shallow copying. You can imagine slice implemented like this:
function slice(arr) {
    var result = [];
    for (i = 0; i< arr.length; i++) {
        result.push(arr[i]);
    }
    return result; 
 }

 //Look at the line with result.push(arr[i]). If arr[i] happens to be a number or string, it will be passed by value, in other words, copied. If arr[i] is an object, it will be passed by reference.
// In case of our array arr[0] is an object {prop1: "value of array A!!"}. Only the reference to this object will be copied. This effectively means that arrays arrA and arrB share first two elements.
// This is why changing the property of arrB[0] in arrB will also change the arrA[0].
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
