// Classes: they don’t add anything new to the language 
// They just make implementation of prototype inheritance and to create objects based on blueprints (ES5 constructors)

//ES5
//If you want to include a prototype you need to use the prototype method 
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
 }
 
 Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
 }
 
 var john5 = new Person5('John', 1990, 'teacher');
//---------------


//ES6
//class declaration
//If you want to add a method you just include the function inside the class block.
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
   
    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
   
    static greeting() {
        console.log('Hey there!');
    }
 }
 
 const john6 = new Person6('John', 1990, 'teacher');
 
 Person6.greeting();
 



//------------------

// Static methods are methods that are simply attached to the class, but not inherited by the class instances(by objects that we create through that class).

static greeting() {
    console.log('Hey there!');
}


// Is basically a method that is attached to this class definition
// the class definition under the hood is a function definition(so is also a object)
//so in the end is just a function attached to a object
//the classes definitions are not hoisted, so unlike in function constructors we need to first implement a class and only later to use it.
//can only methods to classes, but not properties, because inheriting properties through the object instances is not the best practice






//-------------------------------------------------------------


//ES5
//Superclass
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
 }
 
 Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
 }
 
 
 //Subclass
 var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);//here you use the call method to call the superclass(with the this variable set to this)
    this.olymicGames = olymicGames;
    this.medals = medals;
 }
 //new creates a new empty object and calls function constructor and sets the this keyword to the new created empty object
 //in the execution context the this keyword will point to a new empty object
 // This connects the 2 prototypes
 Athlete5.prototype = Object.create(Person5.prototype);
 
 Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
 }
 var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
 johnAthlete5.calculateAge();
 johnAthlete5.wonMedal();

 //----------------------

//ES6
class Person6 {
   constructor (name, yearOfBirth, job) {
       this.name = name;
       this.yearOfBirth = yearOfBirth;
       this.job = job;
   }

   calculateAge() {
       var age = new Date().getFullYear() - this.yearOfBirth;
       console.log(age);
   }
}
//That's how you create a subclass:
class Athlete6 extends Person6 {
   constructor(name, yearOfBirth, job, olympicGames, medals) {//you need to repeat the Person properties if you also want them on your Athlete
       super(name, yearOfBirth, job);//super calls the superclass(you don't need to set a this variable)
       this.olympicGames = olympicGames;
       this.medals = medals;
   }
  
   wonMedal() {
       this.medals++;
       console.log(this.medals);
   }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();


