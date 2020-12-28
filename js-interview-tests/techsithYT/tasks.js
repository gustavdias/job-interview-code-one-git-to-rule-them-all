//Remove duplicates from array in Javascript |
let a = [1,2,5,2,1,8]

let b = []

let len = a.length;//like this it checks length, just one time = faster

for(let i=0; i<len; i++){
    if(b.indexOf(a[i])===-1)//if it can't find it, it returns -1{
        b.push(a[i]);
    }

console.log(b)
//------------
//the order of the elements of the array is not important
let a = [1,2,5,2,1,8]

let c = []

let len = a.length;//like this it checks length, just one time = faster

a.sort();// [1,1,2,2,5,8]
let _temp;
for (let i = 0; i<len; i++){
if(a[i] !== _temp){
    c.push(a[i]);
    _temp = a[i];
}
}

console.log(c)
//(4) [1, 2, 5, 8]

//---------
//Objects
//They are ways to loop through objects and arrays

//for... in: loops through properties names of objects
for(variable in object){
    //execute code
    console.log(object[variable])
}
//! It will work with a array, instead of a name property, it will use the index of each value

//for... of: loops through items in a collection, such as an array
for(variable of iterable) {
    //code
    console.log(variable)//you don't need to reference the original array using indices 
}

let a = [1,2,5,2,1,8]

obj = {};
for(let i of a){
    obj[i] = true
}

console.log(obj)//{1: true, 2: true, 5: true, 8: true}
//because the key needs to be unique, it can't store duplicated values.
//!to get a array from the object:

let o = Object.keys(obj);
console.log(o)//(4) ["1", "2", "5", "8"]
//----------
//! One line
let a1 = [1,2,5,2,1,8]
let bSet = new Set(a1) //set only stores unique values by default
console.log(bSet)//Set(4) {1, 2, 5, 8} //you are getting a set, not an array

//to convert to array:
let a = [1,2,5,2,1,8]
aSet = [... new Set(a)];
console.log(aSet);// [1, 2, 5, 8]

//----------



//find duplicates from array in Javascript |
