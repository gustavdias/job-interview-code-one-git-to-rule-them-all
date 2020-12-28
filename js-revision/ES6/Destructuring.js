//ES6
//Extract data from Arrays and Objects into distinct variables

//Assign variables from objects
var voxel = {x:3.6, y:7.4, z:6.54};

//old way:
// var x= voxel.x;// x= 3.6
// var y = voxel.y;//y = 7.4
// var z = voxel.z;//z = 6.54

//Destructuring -quicker and neater way to assign values directly from an object.
const {x,y,z} = voxel;
console.log(x);//3.6
const {x:a,y:b,z:c} = voxel;//means that you copy the value from 'x' into 'a':
console.log(a);//3.6

//-----------------------------------------
//Assign variables from nested objects
const nest = {
    start: {x:5, y:6},
    end: {x:6, y:-9}
};
const {start: {x:startX, y: startY}} = nest;
console.log(startX);//5

//--
const personOne = {
    name: 'Kyle',
    age: 24,
    address:{
        city: 'Somewhere',
        state: 'one of them'
    }
}

const personTwo = {
    name: 'Sally',
    age: 32,
    address: {
        city: 'somewhere else',
        state: 'another one of them'
    }
}

const {name: firstName, age, favoriteFood = 'Rice', address:{city: newCity}} = personTwo;
console.log(firstName);//Sally
console.log(age);//32
console.log(favoriteFood);//Rice
console.log(newCity);//somewhere else




//-----------------------------------------

//Assign Variables from Arrays
const [q,r] = [1,2,3,4,5]
console.log(q,r);//1,2
const [g,,,,h] = [1,2,3,4,5]
console.log(g,h);//1,5

//-----------------------------------------
//Rest Operator to Reassign Array Elements
const [m1,,n3, ...rest] = [1,2,3,4,5]
console.log(m1,n3);//1 3
console.log(rest);//4,5
//the rest element only works correctly as the last variable in the list

console.log(typeof[rest])//object
console.log(rest.constructor)//ƒ Array() { [native code] }
//-----------------------------------------
function sumAndMultiply(a,b){
    return [a+b,a*b]
}
const [sum, multiply, division = 'no division'] = sumAndMultiply(2,3)
console.log(sum);//5
console.log(multiply);//6
console.log(division);//"no division" by default

//-----------------------------------------
//Pass an Object as a Function's Parameters
const profileUpdate = (profileData)=>{
    const {name, age, nationality, location} = profileData;
    //do something with these variables
}

//or

const profileUpdate2 = ({name, age, nationality, location})=>{
    //do something with these variables
}
//you are still passing in the same profile data object, but right on the parameter, you are already destructuring that object into different variables (its parameters)

//if you just want the name and age variables, you can do like this:
const profileUpdate2 = ({name, age})=>{
    //do something with these variables
}
//----------------------------------------




//----------------------------------------------
//spread operator
