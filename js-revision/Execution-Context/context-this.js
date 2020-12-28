// context === this
// context is the value of this is for the code that is running.
//? https://ui.dev/javascript-visualizer/
var a = 1;
console.log(this === window)
console.log(this.a, window.a, a)

//--

function foo(){
    console.log(this);
    //the scope change (child scope), but the context is still this (the same)
}
foo();//because by default a function runs within the scope of the object that it sits in:
window.foo()

//Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}


//--

var obj = {
    foo: function(one, two, three){
        console.log('context of this: ',this);
        console.log('this is equal to obj? ',this===obj);
        console.log('this is equal to window? ',this===window);
    }
}

obj.foo();//by default, it runs with a context of the this value is the object that it sit in.
// context of this:  {foo: ƒ}foo: ƒ ()__proto__: Object
// VM915:4 this is equal to obj?  true
// VM915:5 this is equal to window?  false

//The value of this can change:
//Depending on how you call the function, on who runs it and how they are running it

//---- 3 JS methods of changing context
//call, apply and bind

//call
obj.foo.call(window, 1,2,3);//context of this is window
// context of this:  Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// VM915:4 this is equal to obj?  false
// VM915:5 this is equal to window?  true


//apply only take two arguments (new context, array of arguments)
obj.foo.apply(window, [1,2,3]);//context of this is window
// context of this:  Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// VM915:4 this is equal to obj?  false
// VM915:5 this is equal to window?  true


//bind takes one argument
//It returns a bound function
obj.foo.bind(window);//context of this is window
var myBoundFoo = obj.foo.bind(window)
myBoundFoo()
//myBoundFoo is a function that always executes foo with the context of window

$('body').on('click', obj.foo)

//----------------------------------------------------------------------------------------------------------------------


// Global Context
// Object/Implicit - Object/implicit: when the keyword ‘this’ is inside of a declared object
// Explicit Binding - Explicit Binding: choose what we want the context of ‘this’ to be using call, apply or bind

// “New” Keyword



// 2- Object/implicit: when the keyword ‘this’ is inside of a declared object

//3- Explicit Binding: choose what we want the context of ‘this’ to be using call, apply or bind

var colt = {
    firstName: "Colt",
    sayHi: function() {
        return "Hi " + this.firstName
    },
    addNumbers: function(a,b,c,d){
        return this.firstName + "just calculated" + (a+b+c+d);
    }
}
 
var elie = {
    firstName: "Elie"
}
 
colt.sayHi() // Hi Colt
colt.sayHi.call(elie) // Hi Elie // call


//bind
var colt = {
    firstName: "Colt",
    sayHi: function() {
        return "Hi " + this.firstName
    },
    addNumbers: function(a,b,c,d){
        return this.firstName + "just calculated" + (a+b+c+d);
    }
}
 
var elie = {
    firstName: "Elie"
}
 
var elieCalc = colt.addNumbers.bind(elie, 1,2,3,4) // function {} {} ...
elieCalc() // Elie just calculated 10
 
var elieCalc2 = colt.addNumbers.bind(elie, 1,2) // function {} {} ...
elieCalc2(3,4) // Elie just calculated 10

//-------------------------

//"this" in arrow functions =>
//Arrow functions do not bind their own this, instead, 
//they inherit the one from the parent scope, 
//which is called "lexical scoping". 

//a good use for arrow function

class App extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        state = {
        loggedIn:false
    }
    loginHandle = () => {
        this.setState(prevState => ({
            loggedIn: !prevState.loggedIn
        }))
    }
    render() {
        return(
            <Route>
                <div className="App">
                    <ul>
                        <li>
                            <NavLink/>bv
                        </li>
                    </ul>
                </div>
            </Route>
        )
    }
}
//-----------------------------------------------
console.log(this.document === document); //true
console.log(this === window); //true
this.a = 37;//true
console.log(window.a);//37

//In a function, if the value of this is not set by the call, it will default to the global object:
function f1() {
    return this;
}
console.log(f1() === window);//true


//On strict mode the value of this remains whatever was set to when entering the execution context. 
function f1() {
    return this;
}
console.log(f1() === window);//false

//!call and apply methods
//When a function uses the this kw in its body, its value can be bound to a particular object in the call using the call or apply methods
function add(c,d){
    return this.a +this.b +c+d;
}
var o = {a:1,b:3};
//the first parameter of call is the object to use as this and the other parameters are 
//so you set this to o
console.log(add.call(o, 5, 7));//16
console.log(add.apply(o,[10,20]));//34


//!bind method
//When you call the bind method on a function, and passes in a object, it creates a new function with the same body in scope as the original function
//But where this occurs in the original function, in the new function it is permanently bound to the first argument of bind.


function f(){
    return this.a;
}

var g = f.bind({a: 'unicycle'});
console.log(g());

var h = g.bind({a: 'cereal'}); // won't work a second time) You can't call bind again in something that you have already treated with bind.
console.log(h());

var o = {a:8, f: f, g:g, h:h};
console.log(o.f(),o.g(), o.h());
//o.f() is 8
//o.g() is unicycle
//o.h() is unicycle

//---

//Arrow functions - this is bound to the enclosing scope at creation time and cannot be changed
// operator apply, call and bind don't have any effect.

var o ={
    traditionalFunc: function () {
        console.log('traditionalFunc this === o?', this === o);//true
    },
    arrowFunc: () => {
        console.log('arrowFunc this === o?', this === o);//false
        console.log('arrowFunc this === window?', this === window);//!true
    }
};
o.traditionalFunc();
o.arrowFunc();//created on the scope of window and ran on the scope of o
//so the arrow function is forever bound to window, the scope where it was created.


//-----
//
//When a function is called as a method of an object,
//"This" is set to the object the method is called on:

var o = {
    prop: 37,
    f: function() {
        return this.prop;
    }
};
console.log(o.f());//logs 37

//This behavior is not at all affected by how or where the function was defined:
var o = {props:23};
function independent() {
    return this.props;
}
o.f = independent;//putting the function inside o
console.log(o.f());
//It doesn't matter where the function was defined, It just matters as being called from within the object, so it's gonna refer to the proper within object.

//------------------------------------------------------------




