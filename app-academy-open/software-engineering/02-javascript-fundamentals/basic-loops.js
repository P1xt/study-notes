/*
    Define a function logBetween(lowNum, highNum) that will print
    every number from lowNum to highNum, inclusive. Inclusive means
    that the range includes lowNum and highNum.

    Hint: this function only needs to print using console.log
    it does not need to return.
*/
function logBetween(lowNum, highNum) {
  for (let i = lowNum; i <= highNum; i += 1) {
    console.log(i);
  }
}

/*
    Write a function printFives(max) that prints out the multiples of
    5 that are less than max.
*/
const printFives = (max) => {
  for (let i = 0; i < max; i += 5) {
    console.log(i);
  }
};

/*
    Write a function logBetweenStepper(min, max, step) that takes
    in 3 numbers as parameters. The function should print out
    numbers between min and max at step intervals. See the
    following examples.

    Hint: this function only needs to print using console.log
    it does not need to return.
*/
const logBetweenStepper = (min, max, step) => {
  for (let i = min; i <= max; i += step) {
    console.log(i);
  }
};

/*
    Define a function fizzBuzz(max) that takes a number and
    prints every number from 0 to max (not inclusive) that is
    divisible by either 3 or 5, but not both.
*/
const fizzBuzz = (max) => {
  for (let i = 0; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 15 === 0)) {
      console.log(i);
    }
  }
};

/*
    Write a function dynamicFizzBuzz that accepts three
    arguments (max, num1, and num2). The function should return
    an array containing positive numbers less than max that
    are divisible by num1 or num2, but not both.
*/
function dynamicFizzBuzz(max, num1, num2) {
  const result = [];
  for (let i = 0; i < max; i++) {
    if ((i % num1 === 0 || i % num2 === 0) && !(i % (num1 * num2) === 0)) {
      result.push(i);
    }
  }
  return result;
}

/*
    Write a function leastCommonMultiple(num1, num2) that
    accepts two numbers as arguments. The functions should
    return the smallest number that is divisible by both
    num1 and num2.
*/
const leastCommonMultiple = (num1, num2) => {
  const max = num1 * num2;

  for (let i = num1; i <= max; i += num1) {
    if (i % num2 === 0) return i;
  }
};

/*
    Define a function isPrime(number) that returns true if
    number is prime. Otherwise, false. A number is prime if
    it is only divisible by 1 and itself.
*/
const isPrime = (num) => {
  for (i = 2; i <= num; i++) {
    if (i !== num && num % i === 0) {
      return false;
    }
  }

  return true;
};

/*
    Write a function isPerfectSquare that accepts a number as
    an argument. The method should return a boolean indicating
    whether or not the argument is a perfect square. A perfect
    square is a number that is the product of some number
    multiplied by itself. For example, since 64 = 8 * 8
    and 144 = 12 * 12, 64 and 144 are perfect squares;
    35 is not a perfect square.
*/
const isPerfectSquare = (num) => {
  const root = Math.sqrt(num);
  return num === root * root;
};

/*
    The fibonacci sequence is a sequence of numbers whose
    first and second elements are 1. To generate further elements
    of the sequence we take the sum of the previous two elements.
    For example the first 6 fibonacci numbers are 1, 1, 2, 3, 5, 8.
    Write a function fibonacci that takes in a number length
    and returns the fibonacci sequence up to the given length.
*/
function fibonacci(length) {
    // your code here
    if (length === 0) return [];
    if (length === 1) return [1];
    if (length > 1) {
        const result = [1, 1];
        length -= 2;
        while (length > 0) {
            result.push(result[result.length - 1] + result[result.length - 2]);
            length--;
        }
        return result;
    }
}
