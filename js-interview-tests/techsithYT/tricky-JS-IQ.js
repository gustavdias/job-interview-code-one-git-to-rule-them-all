console.log(2 + "2"); //22
console.log(2 - "2"); //0
//------
for (let i = 0; i<len; i++)
    for (let i = 0; i<len; ++i)
//both work ++i or i++

//----
//What is the difference between:
let obj = {};
//and
obj = {};

//------

console.log(5 < 6 < 7); //true (true<7) 1<7 is true

console.log(7 > 6 > 5); //false (true>5) 1>5 is false

//------
//arguments keyword
//arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
//The arguments object is not an Array. It is similar, but lacks all Array properties except length.
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);
//--
//function() {} works
let a = function () {
  return arguments;
};
console.log(a("hi"));
//Arguments ["hi", callee: ƒ, Symbol(Symbol.iterator): ƒ]
//arguments does not work with arrow function
let a = () => arguments;
console.log(a("hi"));
//Uncaught ReferenceError: arguments is not defined
//arguments does not bind to the value of

let a = (...n) => n;
console.log(a("hi"));
//["hi"]

//-----------------------------------

let x = function () {
  return;
  {
    message: "hi";
  }
};
console.log(x()); //undefined
//because this:
return;
{
  message: "hi";
}
//is the same as this:
return;
{
  message: "hi";
}
//JS automatically inters a semi-column ";"
//to fix it, change to:
let x = function () {
  return {
    message: "hi",
  };
};
console.log(x());
//-----------------------------------------
Object.freeze() 
Object.seal()
//how to prevent the user to add a new properties.
let profile = {
    name: 'techsith'
}
profile.age = 3;
console.log(profile)

//Object has a method called freeze, that after executed, you can't add more properties
Object.freeze(profile);
//? You can edit, remove or create

//how to prevent the user to add a new properties, but he can edit existent ones.
//instead of freeze use:
Object.seal.apply(profile)
//? you can edit, but not remove or create a new one

//--
//Can edit name, but not age
let profile = {
    name: 'Jack',
}
console.log(profile)

//you create a new property passing its configuration 
Object.defineProperty(profile, 'age', {
    value:3,
    writable: false,
})

profile.name = 'John';
profile.age = '4';

console.log(profile)
//{name: "Jack"}
//{name: "John", age: 3}


//-------
console.log(Math.max(1,234,7673));//7673
console.log(Math.min(1,234,7673));//1
console.log(Math.max());//-Infinity
//as a starting point: max it picks the lowest possible value, so it can compare to it.
console.log(Math.min());//Infinity
//as a starting point: max it picks the highest possible value, so it can compare to it.

//------------------
console.log([]+[]);//empty string, ""+""=""
// + is for numbers or strings, otherwise it has to typecast, 
//it will try to convert a empty array into a string, and you do it, you get a empty string
//
console.log(String([]))//empty string
console.log(String([1,2,4]))//1,2,4


console.log({}+[]);//[object Object]
console.log({}+{});//[object Object][object Object]
//+ converts them into string
//-------
function a(){
    return 'hello';
}

const sentence = a `hi`;// if you add ``, it will be consider a argument to the function
console.log(sentence);

const sentence = a `hi`
//the same as:
const sentence = a(hi)
//--
function a(arg){
    return arg;
}

const sentence = a `hi`;// if you add ``, it will be consider a argument to the function
console.log(sentence);//["hi", raw: Array(1)]


//----------
//Take any webpage and make all editable

<div contentEditable="true">Hello</div>

document.body.contentEditable = true;

//-----------

function y(){
    console.log(this.length);//this is arguments
}

var x = {
    length: ,
    method: function(y){
        arguments[0]();//this means y()
    }
};

x.method(y,1);//2

 //---------------
 const x = new String('constructor')
 console.log(x.constructor)//String() { [native code] }
x[x]==String()
let test = String(01);
console.log(test)//1

 const x = 'constructor'//x[x] = x['constructor'] = x.constructor
 console.log(x[x](01));//1

//-----------------

console.log(0.1+0.2); //0.30000000000000004
//decimal are in base 10 and the computer only understand base 2
//------------

console.log(('hi').__proto__.__proto__.__proto__)//null

console.log(('hi').__proto__)
// String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
//String constructor creates the 'hi'

console.log(('hi').__proto__.__proto__)
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//What created String, constructor: ƒ Object()

//there is nothing beyond it 

//---------

// function returns total number of arguments//don't use loops
let x = function(){
    return [].slice.call(arguments).length;
    //call this slice on arguments
}
console.log(x(1,2,3,4,5))

//---------

var A = {

    x: function(){
        console.log('x');
    },
    y: function(){
        console.log('y');
    },
    z: function(){
        console.log('z');
    }
}

A.x().y().z();

//should print z,y,z

var A = {

    x: function(){
        console.log('x');
        return A;
    },
    y: function(){
        console.log('y');
        return A;
    },
    z: function(){
        console.log('z');
        return A;
    }
}

A.x().y().z();

//--

var A = {

    x: function(){
        console.log('x');
        return this;
    },
    y: function(){
        console.log('y');
        return this;
    },
    z: function(){
        console.log('z');
        return this;
    }
}

A.x().y().z();

//------------------------------------
// Top Tricky JavaScript Interview Questions and Answers
const ary = [1,2,15,30,5,45,7]

console.log(ary.sort());
//(7) [1, 15, 2, 30, 45, 5, 7]
//JS takes the numbers as a string

console.log(ary.sort((a,b)=>a - b
));

// because the callback function does not return boolean value!
//  It has to return an Integer value (negative, zero or positive).
// For example, if you want to sort a number's array, you have to write down the callback function something like that :
[2, 3, 43, 467, 56, 8].sort((elt1, elt2) => {return elt1 < elt2 ? -1 : (elt1 === elt2 ? 0 : 1)});  // ascending way
// Output => [2, 3, 8, 43, 56, 467]

[2, 3, 43, 467, 56, 8].sort((elt1, elt2) => {return elt1 < elt2 ? 1 : (elt1 === elt2 ? 0 : -1)});  // ascending way
// Output => [467, 56, 43, 8, 3, 2]


//-------
// let i = ?
let i = Number.MIN_VALUE;;//smallest number in JS, almost like a 0
console.log(i)

console.log(i*i);//0
console.log(i+1);//1
console.log(i-1);//-1
console.log(i/i);//1

let m = Number.MAX_VALUE;;//smallest number in JS, almost like a 0
console.log(m)
//1.7976931348623157e+308

console.log(m*m);//Infinity (anything bigger is infinity())
console.log(m+1);//1.7976931348623157e+308
console.log(m-1);//1.7976931348623157e+308 (adding or subtracting one doesn't make a difference)
console.log(m/m);//1
//----------

let x = [1,2,3] + [4,5,6]
console.log(x)
//1,2,34,5,6 (because it converts it into a string)

//to merge it into a array
let arr = [...[1,2,3],...[4,5,6]]

let str = String(arr);
console.log('array: ', arr)
console.log('string: ',str)

//---------------
console.log(555555555555555555)//555555555555555600
//18x 5
//Number.MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER)//9007199254740991 (16 digits)
//if your number goes beyond the Number.MAX_SAFE_INTEGER,  JS will put 0 after that.
//------------------

(function(){
    let a=b=100;
})();
console.log(b);//100 (since b is not defined using the let keyword, it becomes global)
console.log(a);//Uncaught ReferenceError: a is not defined (let a is a block scope and is behaving correctly)
console.log(b);




(function(){
    let b=100;
    let a = b;
    console.log(b)//100
    console.log(a)//100
})();



(function(){
    let b=100;
    let a = b;
})();
console.log(b)//Uncaught ReferenceError: b is not defined
console.log(a)


//-------

console.log(NaN === NaN)//false, because it is a object

//--------

