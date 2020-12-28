//how do you add something to the begging and end of a array

var myArray = ["a", "b",  "c"]

myArray.push("end")
myArray.unshift("start")

// mod original Array



ES6

// spread operator
myArray=['start', ...myArray]

myArray=[...myArray, "end"]
myArray=['start', ...myArray, "end"]

//--------------
// How do you create a private variable on js?
//with scoping, create a variable that leaves inside the scope of a function


function secretVariable(){
var private = "super secret code";
return function(){
    return private
}
}
var getPrivateVariable = secretVariable()
console.log(getPrivateVariable())

console.log(secretVariable())//this doenst work



//--------------------
// What is the output?

var num = 4;
console.log(num)

function outer(){
    var num =2
    console.log(num)

    function inner(){
        console.log(num)
        num++;
        console.log('num++ '+num)
        var num =3;
        console.log(num)
    }
    inner();
}
outer();
//3

//--

//What is the output?
console.log(typeof typeof 1);
// the same as:
console.log(typeof (typeof 1));

//string


//--------
//What is the output?
var hero = {
    _name: "John Doe",
    getSecretIdentity: function (){
        return this._name;
    }
}
var stoleSecretIdentity = hero.getSecretIdentity
var stoleSecretIdentity2 = hero.getSecretIdentity.bind(hero)


console.log(stoleSecretIdentity());//undified
console.log(hero.getSecretIdentity());//John Doe
console.log(stoleSecretIdentity2());//John Doe
//-------------

let x = function(){

    if (true) {
        //console.log(v)
        //console.log(l);
        var v = 2;
        let l = 1;
    }

    console.log(v)
    console.log(l);

}

x()
//you get only 2 from v, l is block scope

//---------
let l = 1;
l=2;
console.log(l); //2

const c = 1;
c =2;
console.log(c)//error

const co;
co = 1; //error, because it already assigned a value of undefined

const c = [1,2]

///questionary js

let y =1;
let x=y=2
alert(x)
2

//
a = [1,2,3]
b = [1,2,3]
a == b
//false


///

for(var i=0; i<10; i++){
    console.log(i);
}
// VM1373:2 0
// VM1373:2 1
// VM1373:2 2
// VM1373:2 3
// VM1373:2 4
// VM1373:2 5
// VM1373:2 6
// VM1373:2 7
// VM1373:2 8
// VM1373:2 9


////---------
let obj = {
    "0":1,
    0:2
};
alert(obj["0"]+obj[0]);//4


//

let user = {
    sayHi: function() {
        console.log(this);
    }
};
(user.sayBye = user.sayHi) ();
user.sayHi();
//undefined

let a = [1,2]
(function(){alert(a)})()

//

if(x<=100) {...}
if (!(x>100)) {...}
    x<=100
    !(x>100)
    