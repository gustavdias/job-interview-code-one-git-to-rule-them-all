//Q1. Which is true?

var Person = function(firstName, lastName, dateOfBirth, measurements){
this.firstName = firstName;
this.lastName = lastName;
this.dateOfBirth = dateOfBirth;
this.measurements = measurements;
}


person = new Person("Jim", "Perice", new Date(2013, 2, 12), {weight: "70kg"});
personClone = JSON.parse(JSON.stringify(person));
//1. person.firstName === personClone.firstName //!true

//2. person.dateOfBirth.toDateString() === personClone.dateOfBirth.toDateString()
//!Uncaught TypeError: personClone.dateOfBirth.toDateString is not a function at <anonymous>:1

//3. person === personClone //!false
//4. person.measurements["weight"] === personClone.measurements["weight"] //!true, because the comparison is done with the value inside it.

//explanation

/*
The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.



*/
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj);
// expected output: Object { result: true, count: 42 }

console.log(obj.result);
// expected output: true



console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// expected output: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// expected output: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""

// JSON syntax
// json object
let jsonData = '{ "name": "John", "age": 22 }';

// converting to JavaScript object
let obj = JSON.parse(jsonData);
// JS syntax
//JS obj
{name: "John"; age: 22}

//------------------------------------------

//Q2. After the following JS code is run which of the following is true?

var a = ["apple", "banana", "coconut"]
var b = a
var c = a.slice() // when you push date to a, it isn't the same a that was sliced and assigned to c.
a.push("date")

//1. b= ["apple", "banana", "coconut", "date"] and c= ["apple", "banana", "coconut"] //!true
//2. b= ["apple", "banana", "coconut"] and c= ["apple", "banana", "coconut", "date"] //!false
//3. b = ["apple", "banana", "coconut", "date"] and c = ["apple", "banana", "coconut", "date"] //!false 
//4 b = ["apple", "banana", "coconut"] and c = ["apple", "banana", "coconut"] //!false

//example
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: > Array ["ant", "bison", "camel", "duck", "elephant"]


//------------------
//Q3. Which of the following JS conditions are true?
'1' == 1 //!true
'1' ===1
false == 0 //!true
false === 0
false == ''  //!true
false === ""
"abc" == "abc" //!true
[1,2,3] == [1,2,3] //! false because is not a primal 


//!A------------
//Q4. With the following HTML and JS, the alert isn't shown when you click the button. Why not?

<input type="button" value="Click Me" onclick="handleClick"/>
<script>
    (function setup(){
        function handleClick() {
            alert("Clicked");
        }
    })();
</script>

//1. The setup function never runs //!true I think so
//2. There should be () after handleClick in the onclick attribute //!true
//3. handleClick should be a global function //!maybe, there are alternatives, but in this case yes
//4. The setup function runs before the DOM is ready //!I don't think so

//Example
//To add a listener, we use a method called addEventListener
element.addEventListener(type, functionToCall);
var button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log("SOMEONE CLICKED THE BUTTON!");
});


//--------------

//Q5. What is a "scoping function" useful for?

//1. Creating a shared, private scope for the code and data inside it //!true?
//2. Avoiding creating global variables and functions //!true
//3. Keeping some data and functions private while revealing others //!true
//4. All of the above //!true

//--------------

//!???
//Q6. Assuming the function produces elements on the page based on input from an untrusted source - 
//for example, a query string ?input=... - which of these functions do not create a potential //! XSS vulnerability?

//1.
function innerHTMLStripped(input) {
    var element = document.createElement("div");
    var b = document.createElement("b");

    b.innerHTML = input;

    for (var i = 0; i <b.childNodes.length; i++)) {
        if (b.childNodes[i].nodeType !== Node.TEXT_NODE) {
            BarProp.removeChild(b.childNodes[i])

        }
    }
    element.appendChild(b);

    return element
}

//2.
function innerHTMLEscaped(input) {
    var escaped = input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

var element = document.createElement("div");
element.innerHTML = '<b>' + escaped + '</b>';

return element;


}

//3.

function innerHTML(input){
    var element = document.createElement('div');
    element.innerHTML = '<b>' + input + '</b>';
    return element;

}

//4.

function createTextNode(input) {
    var element = document.createElement("div");
    var b = document.createElement("b");

    b.appendChild(document.createTextNode(input));
    element.appendChild(b);

    return element
}

//5. //!ok check again!
function textContent(input) {
    var element = document.createElement("div");
    var b = document.createElement("b");

    b.textContent = input;


    element.appendChild(b);

    return element
}

//-----------------

//Q7. Which of the following would be the correct way to read the "age" property of a "person" object?
//1. person:: age
//2. person[age]
//3. person['age'] //!True
//4. person.age //!True

//Example
//There are 3 ways
person.age
person['age']

//the third way is like the second:
const property = 'name';
const hero = {
  name: 'Batman'
};

// Square brackets property accessor:
hero['name'];   // => 'Batman'
hero[property]; // => 'Batman'

//-------------=--

//Q8. Which of the following techniques can be used to increase performance of JS code?

//1. Avoid using the with keyword //!(false)
//2. Reduce activity in loops //!(true)
//3. Reduce DOM access
//4. Reduce Dom Size 


//-------------
//Q9. What are the values of x and y after the following JS code is run?

var x = 2;
var y =4;

if ((y>x || y++ === 4)&& ++y ===5){
    x=1;

}else {
    x=4;
}

//1. x=1, y=6
//2. x-4, y=4
//3. x=1, y=5 //!true
//4. x=4, y=5


//--------------

//Q10. Which of the following are valid ways to create an object iin JS?

//1. no =
var person = { FirstName = "John", LastName = "Galt"};

//2. no new =
var person = new { FirstName = " John", LastName = "Galt"};

//3. new Object {} ()
var person = new Object { FirstName = " John", LastName = "Galt"};

//4. No
var person = { "FirstName" : " John", "LastName" : "Galt"};

//5. //!ok
var person = new Object();
 person.FirstName = " John";
 person.LastName = "Galt"

 //6. //!ok
 var person = { firstName: "John", LastName: "Galt"};


 //Examples
 var person = new Object();
 person.FirstName = " John";
 person.LastName = "Galt"


 var person = { firstName: "John", LastName: "Galt"};


 //-------------------

 //11 What will this code output?

 console.log(typeof a);
 console.log(typeof b);

 function a() {

 }

 var b = function () {

 };

 //1. undefined, undefined
 //2. function, function
 //3. function, undefined //! ok
 //4. undefined, function
 //5. An error


 //-------------------

 //Q12 Given that this HTML and JS

 <html lang="en">
     <body>
         <div id='1' style='background-color: #bce8fi; padding: 10px'>
             Div1
             <div id='2' style='background-color:#d9edf7; padding:10px'>
                 Div2
                 <div id='3' style='background-color: #3a87ad; padding:10px'>
                     Div3
                 </div>
             </div>
         </div>

     </body>
 </html>


var divs = document.getElementsByTagName('div');

for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', logEvent, false);

}
function logEvent() {
    console.log(this.id);
}

//Will produce the following: Each Div inside the other in blue rectangles

//What values will be logged to the console when a user clicks on Div2?

//1. 2
//2. 2,3
//3 2,1 //! True
//4 None of the above

//Example
//Look for cascade going up from child to parent


//----------------------

//Q13. Which of the following would be correct way to define and invoke a method that will display 
//the "FirstName" property of a "person object"?

//1. 
person.ShowName = function(sender) {alert(sender.FirstName);}
person.ShowName();

//2. 
person.ShowName = function() {alert(sender.FirstName);}
person.ShowName();

//3.
person.ShowName = new function() {alert(FirstName);}
person.ShowName();

//4. 
person.ShowName = function.Create ({alert(sender.FirstName);});
person.ShowName();

//5.
person.ShowName = function() {alert(this.FirstName);}
person.ShowName();

//You cannot define a method for the object in JS

//-------------------------
//Q14. Which of the following can be used to handle the user clicking on a node?

//1. 
node.onclick(myFunction)//no

//2. 
node.addEventListener("onclick", myFunction, false)//no!!

//3. 
node.addEventListener("click", myFunction, false) //! yes!!! I think this one, but I need to do a revision of event listener

//4. 
node.attachEvent("onclick", myFunction)//no

//Examples
/*
1. You use onclick inside the input tag
<input type="button" value="Button 2" onclick="handleClick()" />
      <!-- button 3 -->
2. you use onclick if you already extracted the element with:       var button3 = document.querySelector("#bt3");
             button3.onclick = function () {
3.       button.addEventListener("click", function () {

/*
//-----------------------

//Q15. After the following JS code is run which of the following are true?

function foo(a,b,c){
    a++;
    b="new string";
    c["key"] = "new value"; //! Can you do that?
}

var a= 1,
b = "old string",
c = {"key": "old value"};

foo(a,b,c);

//1. a is 1 //!true
//2. a is 2 
//3. b is "old string" //! true
//4. b is "new string"
//5. c is {'key': "old value"}


//example //! I need to figure out the order!!!
// c is {key: "new value"}

//-------------------------------

//Q16. The following code is intended to add five identical boxes containing links to the document, 
//but it does not work properly. Why not?

//Copies the contents of one box into another
function copyContents(from, to){
    for (var i = 0; i <from.childNodes.length; i++) {
            to.appendChild(from.childNodes[i])
        }
    }

    //Create a box to copy
var referenceBox = document.createElement("a");

var link = document.createElement('a');
link.href = 'https://www.example.com/';
link.textContent = 'A link';

referenceBox.appendChild(link);

//Add box copies to the document
for (var i=0; i<5; i++){
    var newBox = document.createElement('div');
    copyContents(referenceBox, newBox);
    document.body.appendChild(newBox);
}

//1. A link's href has to be set using setAttribute(); setting the property link.href won't do anything. So none of the links in the boxes will point anywhere.

//2. document.createElement() reuses existing elements with the same tag. So only one box is added to the document.

//3. The same link element can't have multiple parents, so only one box ends up with a link in it.

//4. to.appendChild() expects HTML, but from.childNodes[i] is a node object, so all the boxes will contain the text [Object Node].

//------

//Q17. Which of the following statements are true?

//1. JS can read and write HTML elements. //!true

//2. JS can create cookies. //! true

//3. JS can react to events //!true

//------------

//Q18. What values will the following JS code log to the console?

var counter = (function() {
    var myCounter = 0;

    function changeBy(val){
        myCounter += val;
    }
    return {
        increment: function () {
            changeBy(+1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return myCounter;
        }

    };
})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
counter.changeBy(2);
console.log(counter.value());

//1. 0,2,1,3 //!

//2. 0,2,1 //!
//3. 0,0,0,2
//4 0,0,0

//---------------

//Q19.

function f(x){
    x += 1;
}
// function f(x) {
//     x.value *=5;
// }
function g(x) {
    x.value *=5;
}

var a;
var b = 1;
var c = {value: 2};
var d = c;

f(a);
f(b);
g(d);
console.log(a,b,c.value, d.value);

//1. NaN 2 2 10
//2. undefined 122
//3 undefined 1 10 10 //! true
//4. 1 2 2 10

//------------

//Q20. What values will the following JS code output to the console?

var x = 1;
function foo(){
    var x =3;
} 
foo();
console.log(x);
function bar(){
    x=4;
}
bar(0);
    console.log(x);

//1. 1.1
//2 1.4 //! true
//3. 3,3
//4. 3,4 //!
//5. 4,4


var x = 3;
function foo(){
    var x =7;
} 
foo();
console.log(x);// it can't read the x =7 inside the function (private variable)
function bar(){
    y=6;
}
bar(0);
    console.log(y);

