// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// for (let i = 0; i < 6; i++) {
//   console.log(i);
// }

//! decreasing for loop
function reverseStringD(str) {
  let revString = "";
  console.log(str.length);
  for (let i = str.length - 1; i >= 0; i--) {
    // revString =  revString+str[i];
    revString += str[i];
    console.log("i: ", i, "str[i]: ", str[i], "revString: ", revString);
  }
  return revString;
}

//! Incrementing for loop
function reverseStringI(str) {
  let revString = "";
  for (let i = 0; i <= str.length - 1; i++) {
    // revString = str[i] + revString;
    revString = str[i] + revString;
    console.log("i: ", i, "str[i]: ", str[i], "revString: ", revString);
  }
  return revString;
}

//! For/Of Loop
function reverseStringOf(str) {
  let revString = "";
  for (char of str) {
    revString = char + revString;
    console.log("char: ", char, "str: ", str, "revString: ", revString);
  }
  return revString;
}

//! For each loop
function reverseStringForEach(str) {
  let revString = "";
  str.split("").forEach((char) => (revString = char + revString));
  return revString;
}

const output = reverseStringD("hello");
console.log(output);
console.log("reverseStringI: ", reverseStringI("1234"));
console.log("reverseStringI: ", reverseStringOf("56789"));
console.log("reverseStringI: ", reverseStringForEach("hot"));

//*----------------------------------------------------------------------

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

//! split + forEach
function isPalindrome(str) {
  invString = "";
  str.split("").forEach((char) => (invString = char + invString));
  return invString === str;
}
console.log("isPalindrome: ", isPalindrome("mom"));

//! split + reverse + join
function isPalindromeJoin(str) {
  console.log(
    "split(): ",
    str.split(),
    'split(""): ',
    str.split(""),
    'split(" "): ',
    str.split(" ")
  );
  console.log(
    'split("").join(): ',
    str.split("").join(),
    'split("").join(""): ',
    str.split("").join(""),
    'split("").join(" "): ',
    str.split("").join(" ")
  );
  invString = str.split("").reverse().join("");
  return invString === str;
}
console.log("isPalindrome: ", isPalindromeJoin("mom"));

//*----------------------------------------------------------------------

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revInt = int.toString().split("").reverse().join("");
  return parseInt(revInt) * Math.sign(int); //-1
}

// console.log(Math.sign(-3));
// expected output: -1

console.log(
  "reverseInt: ",
  reverseInt(-45678),
  "typeof(reverseInt(45678))",
  typeof reverseInt(-45678)
);

//*----------------------------------------------------------------------

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

//! with map
function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
  //put all to lower case, split it into words, map each element(word) passing it's first letter into upper case and add the rest of the word (- the 1st letter)
}
// var str = "Hello world!";
// console.log(str.substr(1, 4));
//ello

console.log(capitalizeLetters("let's test this shit"));

//! without map method
function capitalizeLetters2(str) {
  const arrStr = str.toLowerCase().split(" ");
  console.log("arrStr: ", arrStr);
  for (let i = 0; i < arrStr.length; i++) {
    arrStr[i] =
      arrStr[i].substring(0, 1).toUpperCase() + arrStr[i].substring(1);
    console.log(
      " arrStr[i]: ",
      arrStr[i],
      "---- arrStr[i].substring(0,1): ",
      arrStr[i].substring(0, 1),
      "+++++++ arrStr[i].substring(1): ",
      arrStr[i].substring(1)
    );
  }
  return arrStr.join(" ");
}

console.log(capitalizeLetters2("let's test this shit"));
//*----------------------------------------------------------------------

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const splitChar = str.split("");
  console.log(splitChar);
}

console.log("maxCharacter", maxCharacter("javascript"));

//*----------------------------------------------------------------------

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100.
//For multiples of 3, instead of the number, print "Fizz",
//for multiples of 5 print "Buzz".
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  // forEach((char) => (invString = char + invString));
  // map((word) => word[0].toUpperCase() + word.substr(1))
  for (let i = 0; i <= 100; ++i) {
    if (i % 15===0) {
      console.log("FizzBuzz")
      // return "FizzBuzz" //will cut all
    } else if (i % 3===0) {
      console.log("Fizz");
    } else if (i % 5===0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
console.log(fizzBuzz())
// Call Function
