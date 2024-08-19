/*
  Title case any given string
  "this is a word" > "This Is A Word"
*/

function titleCase(string) {
  //stuff
  //console.log(string.split(" "))
  let splitString = string.split(' ');
  return splitString.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  word[0];
}

/*
  Create a function that performs an even-odd transform to an array, n times.
  Each even-odd transformation:
    Adds two (+2) to each odd integer.
    Subtracts two (-2) to each even integer.
    
    input  = [1, 2, 3, 4, 5]
    output = [3, 0, 5, 2, 7]
*/

function evenOdd(array) {
  let i = 0;
  let res = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      res[i] = array[i] - 2;
    } else {
      res[i] = array[i] + 2;
    }
  }
  return res;
}
