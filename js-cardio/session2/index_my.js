// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  //!created filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  console.log("wordArr: ", wordArr);
  //! Sort by length
  const sorted = wordArr.sort(function (a, b) {
    return b.length - a.length;
  });
  //const sorted = wordArr.sort((a, b) => b.length - a.length); // it will compare the length from before and now
  console.log("sorted: ", sorted);
  //return sorted[0]//returns the first longest word that it finds

  //? SOLUTION 2 - Return an array and include multiple words if they have the same length
  //!if multiple words, put it into array
  //ES5
  const longestWordArr2 = sorted.filter(function (word) {
    //return true is it is the same length of the first longest word
    return word.length === sorted[0].length;
  });

  //ES6
  const longestWordArr = sorted.filter(
    (word) => word.length === sorted[0].length
  );
  // console.log("longestWordArr: ",longestWordArr);
  // console.log("longestWordArr: ",longestWordArr, "longestWordArr2: ",longestWordArr2);

  //? SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  //! Check if more than one array val
  if (longestWordArr.length === 1) {
    // Return the word
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}
//*-------------------------------------------------------------

//? CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  //! SOLUTION 1

  // Init chunked arr
  const chunkedArr = [];
  // Set index
  let i = 0;

  // Loop while index is less than the array length
  while (i < arr.length) {
    // Slice out from the index to the index + the chunk length nd push on to the chunked array
    chunkedArr.push(arr.slice(i, i + len));
    // Increment by chunk length
    i += len;
  }

  return chunkedArr;
}

console.log("chunkArray: ", chunkArray([1, 2, 3, 4, 5, 6, 7], 3));


//! SOLUTION 2
function chunkArrayS2(arr, len) {

  // Init chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach(val => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
}
console.log("chunkArrayS2: ", chunkArrayS2([1, 2, 3, 4, 5, 6, 7, 8], 2));

//! SOLUTION 3 - map()

//*-------------------------------------------------------------
//? CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]


function flattenArray(arrays) {
  // SOLUTION 1
  // return arrays.reduce((a, b) => a.concat(b));
//?reduce()

  // SOLUTION 2
    // return [].concat(arrays);

  // return [].concat.apply([], arrays);
//? apply() will unravel one level of the array

  // SOLUTION 3
  // return [].concat(...arrays);
  
  // SOLUTION 4
  return arrays.flat(Infinity);
}

//____________________________@missx7________________________

function  flattenArray2(arr){
    newArr = []
    for( let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr[i].length ; j++){
            newArr.push(arr[i][j])
        }
    }
    return newArr
}
console.log("flatenArray: ", flattenArray([[1, 2], [3, 4], [5, 6], [7]]))

console.log("flatenArray1: ", flattenArray2([[1, 2], [3, 4], [5, 6], [7]]))

//*-------------------------------------------------------------

//? CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'
// option 1
function isAnagram1(str1, str2) {
const arr1 = str1.split('').sort()
const arr2 = str2.split('').sort()
return arr1.every((value,index)=> value === arr2[index])
}
console.log("isAnagram1", isAnagram1("elbow", "below"))



//option 2
const isAnagramX2 = (str1,str2) => str1.split('').sort().every((value,index) => value ===  str2.split('').sort()[index])
console.log("isAnagramX2", isAnagramX2("Dormitory","dirty room##"))

//! The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log("every() method ",array1.every(isBelowThreshold));
// expected output: true


// option 3

function isAnagram3(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}
console.log("isAnagram3: ", isAnagram3('Dormitory','dirty room##'));


//*-------------------------------------------------------------

//? CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
const output = longestWord("Helloo there, my name is Hall");

console.log(output);
