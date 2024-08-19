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

/*
  Create a function that reverses the words in a string that are greater than 5
  
  input = "The violent cow is eating"
  output = "The tneloiv cow is gnitae"
  
*/

function reverse(str) {
  reverse = (str) => {
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= 5) {
        arr[i] = arr[i].split('').reverse().join('');
      }
    }
    return arr.join(' ');
  };

  console.log(reverse(string));
}

/*
  Write a function that will take a string as an input and check whether or not that string is a palindrome
  It should return true if it is one, and false if it is't.
  
  
*/

const isPalindrome = (str) => {
  return str === str.split('').reverse().join('') ? true : false;
};


// // From class
// const isPalindromeFor = (str) => {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   return str === reversed ? true : false;
// };

// // From class
// const isPalindrome = (word) => {
//   let wordArr = word.split('');
//   let isPalindrome = true;

//   for (let i = 0; i < Math.ceil(wordArr.length / 2); i++) {
//     if (wordArr[i] !== wordArr[wordArr.length - 1 - i]) {
//       isPalindrome = false;
//       break;
//     }
//   }

//   return isPalindrome;
// };

