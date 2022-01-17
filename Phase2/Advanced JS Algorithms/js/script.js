// Question 1
// Given an array of numbers, write a function that prints in the console another array which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1:  getOnlyEvens([1, 2, 3, 6, 4, 8]) prints  [ 4]
// ○ Test 2:  getOnlyEvens([0, 1, 2, 3, 4]) prints  [0, 2, 4]

const getEvens = (x) => {
  return x.filter((y) => y % 2 == 0 && x.indexOf(y) % 2 == 0);
};
console.log(getEvens([0, 1, 2, 3, 4]));
console.log("\n");

// Question  2
//  ● Create a function that takes a two-digit number as an parameter and prints "Ok" in the console if the given string is greater than its reversed digit version. If not, the function  will  print  "Not  ok"
//   ○ Test  1:  reverseCompare(72)    prints  "ok"  because    72  >  27
//   ○ reverseCompare(23)  prints    "Not  ok",  because  23  is  not  greater  than  32

const twoDigit = (x) => {
  let st = x.toString();
  if (x.toString().length != 2 || isNaN(x)) return "Check Your Number";
  return parseInt(x.toString().charAt(0)) > parseInt(x.toString().charAt(1))
    ? "ok"
    : "Not ok";
};

console.log(twoDigit(72) + "\n\n");

// Question 3
// ● Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1

const fact = (x) => {
  if (x < 0 || isNaN(x)) return "Enter a number greater Than 0";
  if (x < 2) return 1;
  return x * fact(x - 1);
};
console.log(fact(1) + "\n\n");

// Question 4 (Meera array)
// ● A Meera array is defined to be an array containing only numbers as its elements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
// array of numbered elements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
// 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
// *2 is -6

const meraArray = (x) => {
  return new Set(x.concat(x.map((y) => y * 2))).size !=
    x.concat(x.map((y) => y * 2)).length
    ? "I am NOT a Meera array"
    : "I am a Meera array";
};
console.log(meraArray([1, -6, 4, -3]) + "\n\n");

// Question 5 (Dual array)
// ● Define a Dual array to be an array where every value occurs exactly twice. For example,
// {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// Otherwise it returns 0.

const isDual = (ar) => {
  const count = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  for (let i = 0; i < ar.length; i++) {
    if (count(ar, ar[i]) != 2) return 0;
  }
  return 1;
};

console.log(isDual([1, 2, 1, 3, 3]) + "\n\n");

// Method 2
function dualArrayUsingFilter(arr) {
  for (let i = 0; i < arr.length; i++) {
    let filtered = arr.filter((element) => element === arr[i]);
    if (filtered.length != 2) {
      return 0;
    }
  }
  return 1;
}
console.log(dualArrayUsingFilter([2, 3, 2, 3]) + "\n\n");

// Question 6
// ● Write a function that takes the number of seconds and returns the digital format clock
// time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// secs.
// ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day.

const digitalClock = (sec) => {
  //if (sec > 8)return "The number of seconds in a day is less than "+ sec;
  let [h, m, s] = [
    ("0" + Math.floor(sec / 3600)).slice(-2),
    ("0" + Math.floor((sec % 3600) / 60)).slice(-2),
    ("0" + Math.floor(sec % 60)).slice(-2),
  ];
  if (h == 24) h = "00";
  return [h, m, s];
};
let seconds = 61201;
console.log(
  digitalClock(seconds)[0] + ":",
  digitalClock(seconds)[1] + ":",
  digitalClock(seconds)[2]
);
console.log("\n\n\n\n\n\n\n");

// const detectWord = st =>{
//   return st.filter(ch => ch.isLower())
// }
//  console.log(detectWord("UcIFIJNaAISJNVIJNDtDFN"));

// Bonus

// 1. write a function that named vowelCounter which takes a single word and returns the number of vowels in the word
// vowels are(a, e, i, o, u)
// make sure you also include the capital letters to in your count
// eg animal - returns 3, Angel - returns 2

// a,A e,E i,I o,O u,U

// PSEUDOCODE
// 1. create a function that takes a word as a function
// 2. check if the argument is a string
//      if it is number --> Display "please Enter a String"
//      else filter the vowel letters from the string and return the sze of the filtered string

vowelCounter = (st) => {
  if (!st.match(/^[A-Za-z]+$/)) return "please Enter a Valid word";
  let counter = 0;
  for (let i = 0; i < st.length; i++) {
    if (
      st[i] == "a" ||
      st[i] == "A" ||
      st[i] == "e" ||
      st[i] == "E" ||
      st[i] == "i" ||
      st[i] == "I" ||
      st[i] == "o" ||
      st[i] == "O" ||
      st[i] == "u" ||
      st[i] == "U"
    )
      counter++;
  }
  return counter;
};

console.log(vowelCounter("an1imal"));

// 2. A palindrome is a word that is spells the same front and backwards
// eg.dad, mom, racecar
// write a function called palindrome that takes a single word, and returns true if its a palindrome or false otherwise

// PSEUDOCODE
// 1. create a function that takes a string as a function
// // 2. check if the argument is a string
//      if it is no a word --> Display "please Enter a String"
//      else if it is a word
//         return true if it is equal with its reversed value
//         else return false

plaindrome = (st) => {
  if (!st.match(/^[A-Za-z]+$/)) return "please Enter a valid word";
  return st === st.split("").reverse().join("");
};
console.log(plaindrome("racecar"));
