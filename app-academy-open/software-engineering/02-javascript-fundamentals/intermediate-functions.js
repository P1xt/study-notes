/*
    Define a function isPrime(number) that returns true if number
    is prime. Otherwise, false. A number is prime if it is only
    divisible by 1 and itself.
*/
const isPrime = (num) => {
  if (num < 2) return false;

  for (i = 2; i <= num; i++) {
    if (i !== num && num % i === 0) {
      return false;
    }
  }

  return true;
};

/*
    Write a function choosePrimes(nums) that takes in an array of
    numbers as args. The function should return a new array
    containing the primes from the original array. A prime number
    is a number that is only divisible by 1 and itself.

    Hint: consider creating a helper function to check if a number
    is prime!
*/
const choosePrimes = (arr) => arr.filter((next) => isPrime(next));

/*
    Write a function nextPrime that accepts a number as an argument.
    The function should return the nearest prime number that is
    greater than the given number.
*/
const nextPrime = (num) => {
  let next = num + 1;
  while (!isPrime(next)) {
    next++;
  }
  return next;
};

/*
    Write a function primeFactors that accepts a number as an
    argument. The function should return an array containing all
    of the prime numbers that can divide the given number.
*/
const isFactor = (factor, product) => product % factor === 0;

const primeFactors = (max) => {
  const results = [];
  for (let i = 2; i <= max; i++) {
    if (isFactor(i, max) && isPrime(i)) {
      results.push(i);
    }
  }
  return results;
};

/*
    Write a function isAntiPrime that accepts a number as an
    argument. The method should return true if the given number
    has more divisors than all positive numbers less than the
    given number. For example, 24 is an anti-prime because it
    has more divisors than any positive number less than 24.
*/
const countDivisors = (num) => {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  return count;
};
const isAntiPrime = (num) => {
  const numCount = countDivisors(num);

  for (let i = 0; i < num; i++) {
    if (countDivisors(i) > numCount) {
      return false;
    }
  }

  return true;
};

/*
    Write a function mostVowels that takes in a sentence string
    and returns the word of the sentence that contains the most
    vowels.
*/
const countVowels = (word) => word.match(/[aeiou]/gi).length;

function mostVowels(sentence) {
  return sentence.split(" ").reduce(
    (result, next) => {
      const count = countVowels(next);

      return count > result[1] ? [next, count] : result;
    },
    ["", 0]
  )[0];
}

/*
    Write a function allElseEqual that takes in an array of numbers.
    The function should return the element of the array that is
    equal to half of the sum of all elements of the array.
    If there is no such element, the method should return null.
*/
function allElseEqual(arr) {
  const half = arr.reduce((total, next) => total + next) / 2;
  return arr.some((next) => next === half) ? half : null;
}
