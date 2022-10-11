/*
  Define a function isFive that will return true if a
  number is equal to 5 and false if it is not.
*/
const isFive = (num) => num === 5;

/*
  Write a function isOdd that takes in a number
  as an argument and returns true if the number
  is odd and returns false otherwise.
*/
const isOdd = (num) => num % 2 !== 0;

/*
  So far you've learned how to write your own loops
  but there are some methods that will iterate for you.
  One such method is the String.indexOf() method.

  Write a function isSubstring that takes in two
  strings, searchString and subString.
  The function should return true if subString is a
  part of thesearchString, regardless of upper or lower case,
  and false if otherwise.
*/
const isSubstring = (haystack, needle) =>
  haystack.toLowerCase().indexOf(needle.toLowerCase()) >= 0;

/*
  Define a function logBetween(lowNum, highNum) that will
  print every number from lowNum to highNum, inclusive.
  Inclusive means that the range includes lowNum and highNum.

  Hint: this function only needs to print using console.log
  it does not need to return.
*/
const logBetween = (low, high) => {
  for (let i = low; i <= high; i++) {
    console.log(i);
  }
};

/*
  Write a function printFives(max) that prints out the
  multiples of 5 that are less than the max.
*/
const printFives = (max) => {
  for (let i = 0; i < max; i += 5) {
    console.log(i);
  }
};

/*
  Write a function logBetweenStepper(min, max, step) that
  takes in 3 numbers as parameters. The function should print
  out numbers between min and max at step intervals.
  See the following examples.

  Hint: this function only needs to print using console.log
  it does not need to return.
*/
const logBetweenStepper = (min, max, step) => {
  for (let i = min; i <= max; i += step) {
    console.log(i);
  }
};

/*
  Define a function fizzBuzz(max) that takes a
  number and prints every number from 0 to max
  (not inclusive) that is divisible by either 3 or 5, but not both.
*/
const fizzBuzz = (max) => {
  for (let i = 0; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 15 === 0)) {
      console.log(i);
    }
  }
};

/*
  Write a function combineArray(array1, array2) that takes
  in two arrays of numbers and returns the two arrays
  combined into a single array.

  Hint: Use the Array.concat method but be aware that calling
  this method won't permanently change, also known as mutate,
  either array.
*/
const combineArray = (first, second) => first.concat(second);

/*
  Write a function doubler(numbers) that takes an array of
  numbers and returns a new array where every element of
  the original array is multiplied by 2.
*/
const doubler = (input) => input.map((next) => next * 2);

/*
  Write a function, countVowels(word), that takes in a string
  word and returns the number of vowels in the word.

  Vowels are the letters "a", "e", "i", "o", "u".
*/
const countVowels = (word) => word.match(/[aeiou]/gi).length;
