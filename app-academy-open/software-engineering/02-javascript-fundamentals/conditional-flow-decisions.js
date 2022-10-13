/*
    Define a function isFive that will return true
    if a number is equal to 5 and false if it is not.
*/
function isFive(num) {
  return num === 5;
}

/*
    Write a function isOdd that takes in a number
    as an argument and returns true if the number
    is odd and returns false otherwise.
*/
function isOdd(num) {
  return !(num % 2 === 0);
}

/*
    So far you've learned how to write your own loops
    but there are some methods that will iterate for
    you. One such method is the String.indexOf() method.

    Write a function isSubstring that takes in two
    strings, searchString and subString. The function
    should return true if subString is a part of
    the searchString, regardless of upper or lower
    case, and false if otherwise.
*/
function isSubstring(searchString, subString) {
  return searchString.toLowerCase().indexOf(subString.toLowerCase()) >= 0;
}

/*
    Write a function threeOrSeven that takes in a
    number and returns true if the number is
    divisible by either 3 or 7 and false otherwise.
*/
function threeOrSeven(num) {
  return num % 3 === 0 || num % 7 === 0;
}

/*
    Write a function named
    eitherStringIncluded(sentence, word1, word2)
    that accepts a sentence and two words as
    arguments. The eitherStringIncluded function
    should return true if either word1 or word2
    is found in the sentence, and false if neither
    is found.

    Hint: the String.includes method will return true
    or false if a given string is included in
    another string.
*/
function eitherStringIncluded(sentence, word1, word2) {
    return sentence.includes(word1) || sentence.includes(word2);
}
