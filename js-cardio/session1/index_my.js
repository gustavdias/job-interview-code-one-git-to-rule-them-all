// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// function reverseString(str) {
// //split the string into an array
// const strArr = str.split('');//' ' if you give space, you separate by word
// strArr.reverse();
// console.log(strArr);
// return strArr.join('');
// }

//!clean version
function reverseString(str) {
  //!return str.split('').reverse().join('');

  //! decreasing for loop
  // let revString = '';
  // //if you don't add -1, you get undefined
  // for(let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;

  //! Incrementing for loop
  //   let revString = '';
  // for(let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;

  ///////////////////
  //Show that you know modern JS
  //!
  //   let revString = '';
  // for(let char of str) {
  //   revString = char + revString;
  // }
  // return revString;

  //! for each
  // let revString = "";
  // str.split("").forEach(function(char) {revString = char + revString});
  // return revString;

  // let revString = "";
  // str.split("").forEach((char) => (revString = char + revString));
  // return revString;

  ////////////////////
  //! reduce

  // let arr = [...str];
  // let newArr = arr.map((_, i, arr) => {
  //     return arr[arr.length - 1 - i];
  //   });
  // return newArr.join("");

  //!high order methods generally return a new array
  // return str.split('').reduce(function(revString, char){
  //   return char + revString;
  // })
  //clean
  return str.split("").reduce((revString, char) => char + revString, "");
}
//--------------------

// CHALLENGE 2: VALIDATE A PALINDROME (a word or phrase that is the same if inverted)
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false


function isPalindrome(str) {
  const revString = str.split('').reverse().join('');

  return revString === str;
}



const palindrome = isPalindrome('racecar');
console.log('is it palindrome? ', palindrome)

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');

  return parseInt(revString) * Math.sign(int);//? how it works?
}

const int = reverseInt('-9867221')
console.log('reverse int: ', int)

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
   const strArr = str.toLowerCase().split(' ');

  for(let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
//The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
// var str = "Hello world!";
// var res = str.substring(1, 4);//ell
  return strArr.join(' ');


      // return str
    //   .toLowerCase()
    //   .split(' ')
    //   .map(word => word[0].toUpperCase() + word.substr(1))
    //   .join(' ');

    //!regular expression - replace takes a regular expression
    //g for global, i for case insensitive 
    return str.replace(/\b[a-z]/gi, function(char) {
      return char.toUpperCase();
    });

}
console.log('first letter of every word capitalized',capitalizeLetters("i love javascript"))

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charMap = {};//create a map
  let maxNum = 0;//will be 2
  let maxChar = '';//will be a

  str.split('').forEach(function(char) {
    if(charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
console.log(charMap)

  for(let char in charMap) {
    debugger;
    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;


  // Here is my version of the algorithm.
  // I put the string into an array and I sort it.
  // Then I loop through the array keeping track of the count for each character.
  // I keep track of the "current character" and the "max character" with objects.

  // const sortedStr = str.split('').sort();
  // const maxChar = {char: '', count: 0};
  // const currentChar = {char: '', count: 0};

  // sortedStr.forEach(char => {
  //   if(currentChar.char === char){
  //     currentChar.count++;
  //   } else {
  //     if(maxChar.count < currentChar.count){
  //       maxChar.char = currentChar.char;
  //       maxChar.count = currentChar.count;
  //     }
  //     currentChar.char = char;
  //     currentChar.count = 0;
  //   }
  // });

  // return maxChar.char;
}
console.log('maxCharacter - Return the character that is most common in a string: ',maxCharacter('javascript'))


//*-------------------------------------
// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. 
//For multiples of 3, instead of the number, print "Fizz", 
//for multiples of 5 print "Buzz". 
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
      //(i % 15 === 0) or (i % 3 === 0) && (i % 5 === 0)  
      if(i % 15 === 0) {
        console.log('FizzBuzz');
      } else if(i % 3 === 0) {
        console.log('Fizz');
      } else if(i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }

}

console.log('FizzBuzz count: ', fizzBuzz() )

// Call Function
const output = reverseString("hello");

console.log(output);

//*-------------------------------------