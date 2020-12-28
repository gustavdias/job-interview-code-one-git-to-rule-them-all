//8 Must Know JavaScript Array Methods
const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

//1.filter() - get all items that are 100 or less
//! It does not change the original array
const filteredItems = items.filter((item)=> {
    return item.price <= 100
});
console.log(items);
console.log(filteredItems);
//---------------
//2.map() - take one array and convert it into a new modified one
//Convenient when you want to take a object for example and just get the names or a single key, 
//or one array to convert into another
//! It does not change the original array
const itemNames = items.map((item)=> {
    return item.name
});
console.log(items);
console.log(itemNames);
//---------------
//3.find() - allows to find a single object in an array (the first that appears)
const findName = items.find((item)=> {
    return item.name === 'Computer'
    //you have a true or false statement and it is going to return the item for the first one that is true
});
console.log(items);
console.log(findName);
//---------------
//4.forEach - unlike these other methods does not actually return anything. No return statement const findName =
//similar to for loop
items.forEach((item)=> {
    console.log(item.name)
    //for every single item it will what is inside of the function.
});
//---------------
//5.some()
//! It does not return a brand new array, it just returns true or false
const hasInexpensiveItems = items.some((item)=> {
    return item.price <= 100;
    //as soon as a single item returns true, it is going to return true
});
console.log(items);
console.log(hasInexpensiveItems);

//---------------
//6.every() - checks to see if every single item falls into the condition that you check for
//returns true or false
const allItemsLessThan1000 = items.every((item)=> {
    return item.price <= 1000;
    //as soon as a single item returns true, it is going to return true
});
console.log(items);
console.log(allItemsLessThan1000);
//---------------
//!7.reduce() - different from all other methods
//since it is doing some operations on the array and returning a combination of all those different operations
//to get the total price of all the different prices in this array

//Instead of taking a item, it takes a item and a property for what we want ot reduce everything into to.
//In this case is the current total (the total after each interaction of the array)
const total = items.reduce((currentTotal, item)=> {
    return item.price + currentTotal;
},0);
//2nd parameter is which is going to be your starting point (in this case zero)
console.log(items);
console.log(total);

//---------------
//8.includes() - it does not take a function, it just takes a single argument
//! to check is a array has a value

const items2 = [1,2,3,4,5,6,7,8]
const includesTwo = items.includes(2)
//It will check if what we past in the includes method is inside the array.
console.log(items2);
console.log(includesTwo);//true

//----------------------------------------------------------------------------------
//Convert JavaScript Arrays to Objects using reduce() (higher order function)
//array containing multiple objects:
let realEstate = [
  {
    id: "3c5f4c26-f048-11e9-81b4-2a2ae2dbcce4",
    name: "Vancouver Luxury Apartments",
    price: 450000,
  },
  {
    id: "3c5f4e9c-f048-11e9-81b4-2a2ae2dbcce4",
    name: "Calgary Housing",
    price: 330000,
  },
  {
    id: "3c5f52d4-f048-11e9-81b4-2a2ae2dbcce4",
    name: "AGM Apartments",
    price: 300000,
  },
];

//Goal: convert realEstate to Object and look up by id

//two arguments, the accumulator and the current element in the array
//this reducer function will be executed on every element of the array,
// and we would like to return every element as new object where key is the id and the value is the object itself.
function reducer(acc, cur) {
  return { ...acc, [cur.id]: cur };
  //the spread operator in front of the accumulator just opens up and expands all the data that is inside it,
  //and we add to this accumulator a new entry at every iteration where the key is the id of the current element,
  //and the value is the current element itself.
}
let newRealEstate = realEstate.reduce(reducer, {}); //the second argument is the initial value (starting with empty object)
console.log(newRealEstate);

//----------------------------------------------------

// How to transform the list into to a Array: you do a prototype attached to the Array object that slices and than calls the const boxes.
// Than you pass the array into a loop to change the color
const boxes = document.querySelectorAll(".box");
//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
  cur.style.backgroundColor = "dodgerblue";
});

//------------------
// How to transform the list into to a Array:
// You just use: Array.from(boxes);
const boxes = document.querySelectorAll(".box");
//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach((cur) => (cur.style.backgroundColor = "dodgerblue"));

//--------------------
// You can not use break in a forEach or map loop

//ES5
for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === "box blue") {
    continue;
  }

  boxesArr5[i].textContent = "I changed to blue!";
}
// So you formed a Array with all classes starting with ‘box’,
// now you can check if inside the array there is a ‘box blue’ with .className
//----------------

//ES6 (forof loop)
for (const cur of boxesArr6) {
  if (cur.className.includes("blue")) {
    continue;
  }
  cur.textContent = "I changed to blue!";
}

//  includes('blue')
// If the string has blue on it = true
//-------------------------
//Arrays methods
var ages = [12, 17, 8, 21, 14, 11];
//ES5
var full = ages.map(function (cur) {
  return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);
// (6) [false, false, false, true, false, false]
// 3
// 21

//-------
//ES6
console.log(ages.findIndex((cur) => cur >= 18));
console.log(ages.find((cur) => cur >= 18));
//3
//21

//-----------
//.reduce( ) method - Array
// The reduce( ) method executes a reducer function (that you provide) on each member of the array resulting in a single output value.

// The reducer function takes four arguments:

// Accumulator (acc)
// Current Value (cur)
// Current Index (idx)
// Source Array (src)
// Your reducer function's returned value is assigned to the accumulator,
// whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.
