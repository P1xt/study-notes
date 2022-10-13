/*
    Write a function goodbye(name) that takes in
    a string name and returns a string saying bye
    to that name. See the examples below.
*/
function goodbye(name) {
  return `Bye ${name}.`;
}

/*
    Write a function plusFive that takes in a
    number as an argument and returns the sum
    of that number and 5.
*/
function plusFive(num) {
  // your code here...
  return num + 5;
}

/*
    We have provided a function named isCool.
    The isCool function will take a string argument
    and console.log and return a sentence saying
    that the given string "is cool!". Call the isCool
    function with the arguments listed below.
*/
function isCool(string) {
  let coolSentence = string + " is cool!";
  console.log(coolSentence);
  return coolSentence;
}
isCool("Music");
isCool("JavaScript");
isCool("The world");

/*
    Write a function averageOfTwo(num1, num2) that
    returns the average of two numbers.
*/
function averageOfTwo(num1, num2) {
  return (num1 + num2) / 2;
}

/*
    Write a function hello that takes in a string
    and prints out "Hello, " followed by the string.

    HINT: this function doesn't need to return
    anything, it should just print using console.log.
*/
function hello(str) {
  // your code here...
  console.log(`Hello, ${str}`);
}

/*
    Write a function divideByThree(num) that returns
    the passed in number argument divided by three.
*/
function divideByThree(num) {
  // your code here...
  return num / 3;
}

/*
    Write a function whisper that takes in a string
    and returns a "whispered" version of that string.

    HINT: try using the .toLowerCase() function on
    a string to see what it does!
*/
function whisper(str) {
  // your code here...
  return `... ${str.toLowerCase()} ...`;
}

/*
    Write a function
    averageOfFour(num1, num2, num3, num4)
    that takes in four numbers.

    The function should return the average of all
    of the numbers.
*/
function averageOfFour(num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4;
}

/*
    Write a function yell that takes in a string and
    returns a "yelled" version of that string.

    HINT: try using the .toUpperCase() function on
    a string to see what it does!
*/
function yell(str) {
  return str.toUpperCase() + "!!!";
}

/*
    Write a function echo that takes in a string
    and console.logs that string "echo-ized".
*/
function echo(string) {
  console.log(
    `${string.toUpperCase()} ... ${string} ... ${string.toLowerCase()}`
  );
}
