function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  return arr.filter((next, index) => index % 2 === 1);
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  return oddIndices(arr).reverse();
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  const result = [];
  if (arr.length >= 1) {
    result.push(arr[1]);
  }

  for (let i = 2; i < arr.length; i *= 2) {
    result.push(arr[i]);
  }

  return result;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  const result = [];
  if (arr.length >= 1) {
    result.push(arr[1]);
  }

  for (let i = n; i < arr.length; i *= n) {
    result.push(arr[i]);
  }

  return result;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  return arr.slice(0, Math.ceil(arr.length / 2));
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here
  return arr.slice(Math.ceil(arr.length / 2));
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
