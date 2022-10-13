/*
    Write a function hasDoubleLetter(str) that accepts a string.
    The function should return a boolean indicating whether the
    string contains two of the same character consecutively.
    If the value passed into the function is not a string,
    return null.
*/
const hasDoubleLetter = (word) => {
  if (typeof word !== "string") return null;
  const doubleLetters = word.match(/([a-z])\1/gi);
  return doubleLetters !== null && doubleLetters.length > 0;
};

/*
    Write a function firstVowel(str) that takes in a string
    and returns the first vowel that appears sequentially in
    the string. If the string does not contain a vowel, return null.
*/
const firstVowel = (word) => {
  const vowels = word.match(/[aeiou]/gi);
  return Array.isArray(vowels) ? vowels[0] : null;
};

/*
    Write a function lastVowel(str) that takes in a string and
    returns the last vowel that appears sequentially in the string.
    Note that the string may contain capitalization.

    Hint: You may find the String.toLowerCase() or
    String.toUpperCase() methods useful.
*/
const lastVowel = (word) => {
  const vowels = word.match(/[aeiou]/gi);
  return Array.isArray(vowels) ? vowels[vowels.length - 1] : null;
};

/*
    Write a function minValue(nums) that takes in an array of
    numbers as an arg. The function should return the smallest
    number of the array. If the array is empty, the function should
    return null.
*/
const minValue = (nums) =>
  nums.length !== 0
    ? nums.reduce((min, next) => (next < min ? next : min))
    : null;

/*
    Write a function avgVal(arr) that accepts an array as an arg.
    The function should return the average of all values in the array.
    If the array is empty, it should return null.
*/
const avgVal = (arr) => {
  if (arr.length === 0) return null;

  const sum = arr.reduce((total, next) => total + next);
  const length = arr.length;
  return sum / length;
};

/*
    Write a function maxValue(nums) that takes in an array of
    numbers as an arg. The function should return the largest
    number of the array. If the array is empty, the function
    should return null.
*/
const maxValue = (arr) => (arr.length > 0 ? Math.max(...arr) : null);

/*
    Write a function reverb that accepts a word as an argument.
    The function should return a new word where all letters that
    come after the last vowel (including the vowel itself) are
    repeated at the end of the word. If the value passed in is
    not a string, say someone passes in a number as an argument,
    then return null.
*/
// const lastVowel = (word) => {
//   const vowels = "aeiouAEIOU";
//   for (let i = word.length - 1; i >= 0; i--) {
//     if (vowels.includes(word[i])) {
//       return i;
//     }
//   }
//   return null;
// };
const reverb = (word) => {
  if (typeof word !== "string") return null;

  const last = lastVowel(word);
  return last ? word + word.slice(last) : word;
};

/*
    Write a function prevPrime that accepts a number as an
    argument. The function should return the nearest prime
    number that is smaller than the given argument.
    Since 2 is the smallest prime number, return null if
    no number can be returned.
*/
const isPrime = (num) => {
  for (i = 2; i <= num; i++) {
    if (i !== num && num % i === 0) {
      return false;
    }
  }
  return true;
};
const prevPrime = (num) => {
  if (num <= 2) return null;

  for (let i = num - 1; i > 2; i--) {
    if (isPrime(i)) return i;
  }
  return null;
};

/*
    Write a function additionMutator that accepts an array and a
    number as an arguments.
    The function should mutate the input array such that every
    element has the given number added to it.
*/
const additionMutator = (arr, add) => arr.forEach((x, i) => (arr[i] = x + add));

/*
    Write a function alternatingWords that accepts an array of
    words as an argument. The function should mutate the input
    array such that the words alternate between fully uppercase or
    lowercase. The first word should be uppercase.
*/
const alternatingWords = (arr) =>
  arr.forEach((word, idx) =>
    idx % 2 !== 0
      ? (arr[idx] = word.toLowerCase())
      : (arr[idx] = word.toUpperCase())
  );

/*
    Write a function reverseString(str) that takes in a string.
    The function should return a new string where the order of
    the characters is reversed.
*/
const reverseString = (str) => str.split("").reverse().join("");

/*
    Write a function removeLastVowel(word) that takes in a string
    and returns the string with its last vowel removed.
*/
// const lastVowel = word => {
//     const vowels = 'aeiouAEIOU';
//     for (let i = word.length - 1; i >= 0 ;i--) {
//         if (vowels.includes(word[i])) {
//             return i;
//         }
//     }
//     return null;
// }

const removeLastVowel = (str) => {
  const final = lastVowel(str);
  if (final === null) return str;
  return str.slice(0, final) + str.slice(final + 1);
};

/*
    Write a function removeEWords(sentence) that accepts a
    sentence string as an arg. The function should return a
    new string, containing only the words that don't have the
    letter "e" in them.
*/
const removeEWords = (sentence) =>
  sentence
    .split(" ")
    .filter((word) => hasAnE(word))
    .join(" ");
