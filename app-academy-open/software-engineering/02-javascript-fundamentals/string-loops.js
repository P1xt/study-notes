/*
    Write a function hasVowel(str) that takes in a string.
    The function should return a boolean, true if the string
    contains at least one vowel, false otherwise.

    Vowels are the letters a, e, i, o, u.
*/
const hasVowel = (str) => str.match(/[aeiou]/i) !== null;

/*
    Write a function, countVowels(word), that takes in a string
    word and returns the number of vowels in the word.

    Vowels are the letters "a", "e", "i", "o", "u".
*/
function countVowels(word) {
  return word.match(/[aeiou]/gi).length;
}

/*
    Pig Latin is a fun take on the English language where you
    move any consonant cluster from the start of the word to the
    end of the word; when words begin on a vowel, you simply
    add "-yay". Vowels are "aeiou".

    Write a function pigLatinWord that takes in a word string and
    translates the word into Pig Latin. For this problem use the
    String.slice() method. The slice() method extracts a section
    of a string and returns it as a new string, without modifying
    the original string.

    Hint: Remember the String.includes method!
*/
function pigLatinWord(word) {
  const firstVowel = word.match(/[aeiou]/i)["index"];
  const start = word.slice(firstVowel);
  const finish = firstVowel === 0 ? "y" : word.slice(0, firstVowel);

  return start + finish + "ay";
}

/*
    Write a function abbreviate(word) that takes in a string arg.
    The function should return a new string where all of its vowels
    are removed.
*/
const abbreviate = (word) => word.match(/[^aeiou]/gi).join("");

/*
    Write a function uncompress(str) that takes in a "compressed"
    string as an arg. A compressed string consists of a character
    immediately followed by the number of times it appears in the
    "uncompressed" form. The function should return the uncompressed
    version of the string. See the examples.

    Hint: you can use the built-in Number function should convert
    a numeric string into the number type. For example.
    Number("4") // => 4

    You may assume that the number of times will always be an integer between 0 and 9.
*/
const uncompress = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i += 2) {
    const char = str[i];
    const count = +str[i + 1];
    for (j = 1; j <= count; j++) {
      result.push(char);
    }
  }
  return result.join("");
};

/*
    Write a function tripletTrue that accepts a string as an
    argument. The function should return a boolean indicating
    whether or not the the string contains three of the same
    character consecutively.
*/
const tripletTrue = (word) => word.match(/([a-z])\1\1/gi) !== null;

/*
    Write a function sillyString that accepts a word as an
    argument. The functions should return a new word where
    every vowel of the original word is followed by 'b' and
    that same vowel. For example, 'siren' would turn into
    'sibireben'.
*/
const convertVowels = (char) =>
  /[aeiou]/.test(char) ? `${char}b${char}` : char;

const sillyString = (str) =>
  str
    .split("")
    .map((a) => convertVowels(a))
    .join("");

/*
    Write a function moreDotLessDash that accepts a string as
    an argument. The function should return a boolean indicating
    whether or not the string contains more dots (.) than dashes (-).
*/
const count = (str, char) => str.split("").filter((c) => c === char).length;
const moreDotLessDash = (str) => count(str, ".") > count(str, "-");

/*
    Write a function hasThreeVowels that accepts a string as an
    argument. The function should return a boolean indicating whether
    or not the string contains at least three different vowels.
*/
const hasThreeVowels = (str) => {
  const vowelsFound = {};

  for (let i = 0; i < str.length; i++) {
    if (/[aeiou]/.test(str[i])) {
      vowelsFound[str[i]] = true;
    }
  }

  return Object.keys(vowelsFound).length >= 3;
};

/*
    Write a function lastIndex that takes in a string and a
    character. The function should return the last index where
    the character can be found in the string.
*/
function lastIndex(str, char) {
  // your code here
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === char) return i;
  }
  return -1;
}

/*
    Write a function doubleLetterCount that takes in a string and
    returns the number of times that the same letter repeats twice
    in a row.
*/
function doubleLetterCount(string) {
  const doubles = string.match(/([a-z])\1/gi);
  return doubles ? doubles.length : null;
}

/*
    Write a method caesarCipher that takes in a string and a
    number. The function should return a new string where every
    character of the original is shifted num characters in the
    alphabet.
*/
const alphabet = "abcdefghijklmnopqrstuvwxyz";

const caesar = (char, num) => {
  // this warrants a special comment
  // since there are 26 letters in the alphabet
  // you can use index % 26 to wrap around
  // past "z" - think about it, z is the 26th letter
  // so the index of "z" (25 because zero based index)
  // plus, say, 1 would be 26 - and 26 % 26 is zero
  // which is the index of a :D
  const newIdx = (alphabet.indexOf(char) + num) % 26;
  return alphabet[newIdx];
};

function caesarCipher(string, num) {
  return string
    .split("")
    .map((char) => caesar(char, num))
    .join("");
}

/*
    Write a function vowelCipher that takes in a string and
    returns a new string where every vowel becomes the next
    vowel in the alphabet.
*/
const vowels = "aeiou";

const shiftVowel = (vowel) => {
  const newIdx = (vowels.indexOf(vowel) + 1) % 5;
  return vowels[newIdx];
};
const isVowel = (vowel) => vowels.indexOf(vowel) >= 0;

function vowelCipher(string) {
  return string
    .split("")
    .map((char) => (isVowel(char) ? shiftVowel(char) : char))
    .join("");
}
