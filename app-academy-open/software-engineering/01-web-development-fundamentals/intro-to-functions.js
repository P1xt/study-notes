/* 
  Write a function goodbye(name) that takes in a string name 
  and returns a string saying "bye" to that name. 
*/
const goodbye = (name) => `Bye ${name}.`;

/* 
   Write a function plusFive that takes in a number as an 
   argument and returns the sum of that number and 5.
*/
const plusFive = num => num + 5;

/* 
  Write a method averageOfTwo(num1, num2) that returns 
  the average of two numbers.
*/
const averageOfTwo = (num1, num2) => (num1 + num2) / 2;

/*
  Write a function hello that takes in a string and 
  prints out "Hello, " followed by the string.

  HINT: this function doesn't need to return anything, 
  it should just print using console.log.
*/
const hello = name => console.log(`Hello, ${name}`);

/*
  Write a method divideByThree(num) that returns the 
  passed in number argument divided by three.
*/
const divideByThree = num => num / 3;

/*
  Write a function whisper that takes in a string and 
  returns a "whispered" version of that string.

  HINT: try using the .toLowerCase() method on a string 
  to see what it does! You may also want to look up 
  .toLowerCase() in the MDN documentation.    
*/
const whisper = str => `...${str.toLowerCase()}...`;

/*
  Write a function averageOfFour(num1, num2, num3, num4) 
  that takes in four numbers.

  The function should return the average of all of the numbers.
*/
const averageOfFour = (n1, n2, n3, n4) => (n1 + n2 + n3 + n4) / 4;

/* 
  Write a function yell that takes in a string and returns 
  a "yelled" version of that string.

  HINT: try using the .toUpperCase() function on a string 
  to see what it does!
*/
const yell = str => `${str.toUpperCase()}!!!`;

/*
  Write a function echo that takes in a string and 
  console.logs that string "echo-ized". Analyze the 
  example test cases to see the expected "echo-ized" 
  output of the function.
*/
const echo = str => 
  console.log(
    `${str.toUpperCase()}! ... ${str} ... ${str.toLowerCase()}`
  );