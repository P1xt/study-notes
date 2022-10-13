/*
    So far you've learned how to write your own loops but there
    are some methods that will iterate for you. One such method
    is the Array.indexOf() method. The indexOf() method
    returns the first index that it finds for the element
    given, or -1 if the element is not found.

    Write a function named wordWithinArray(array,word) using
    Array.indexOf. The function takes in both a word and an
    array of words as arguments and returns a boolean that
    returns true if that string is located inside of the array,
    or false if it does not.
*/
function wordWithinArray(array, word) {
  return array.indexOf(word) !== -1;
}

/*
    Write a function firstAndLast that takes in an array of
    numbers and returns the sum of the first and last element
    if there is an even number of elements in the array.
    If there is an odd number of elements in the array,
    then the function should return the difference between
    the first and last elements of the array.
*/
const firstAndLast = (arr) => {
  const length = arr.length;
  const first = arr[0];
  const last = arr[length - 1];
  if (length % 2 === 0) {
    return first + last;
  }
  return first - last;
};

/*
    Write a function combineArray(array1, array2) that takes in
    two arrays of numbers and returns the two arrays combined
    into a single array.

    Hint: Use the Array.concat method but be aware that calling
    this method won't permanently change, also known as mutate,
    either array.
*/
function combineArray(array1, array2) {
  return array1.concat(array2);
}

/*
    Write a function threeIncreasing that accepts an array of
    numbers as an argument. The function should return a boolean
    indicating whether or not the array contains three consecutive
    numbers in consecutive increasing order, like 7, 8, 9.
*/
const threeIncreasing = (arr) => {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] + 1 === arr[i + 1] && arr[i + 1] + 1 === arr[i + 2]) {
      return true;
    }
  }
  return false;
};

/*
    Write a function myIncludes(arr, target) that accepts an array
    and a target value as args. The function should return a boolean
    indicating whether the target is found in the array.

    Solve this without Array.includes or Array.indexOf.
*/
const myIncludes = (arr, target) => arr.some((a) => a === target);

/*
    Write a function myIndexOf(arr, target) that takes in an array
    and target value as args. The function should return the first
    index where the target is found in the array. If the target is
    not found, it should return -1. Solve this without using
    Array.indexOf.
*/
const myIndexOf = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

/*
    Write a function sumArray(array) that takes in an array of
    numbers and returns the total sum of all the numbers.
*/
const sumArray = (arr) => arr.reduce((sum, next) => sum + next, 0);

/*
    Write a function productWithReduce(nums) that takes in an array
    of numbers. The function should return the total product of
    multiplying all numbers of the array together.

    You can assume that nums will not be an empty array.
*/
const productWithReduce = (arr) =>
  arr.reduce((product, next) => product * next, 1);

/*
    Write a function doubler(numbers) that takes an array of numbers
    and returns a new array where every element of the original
    array is multiplied by 2.
*/
const doubler = (nums) => nums.map((num) => num * 2);
