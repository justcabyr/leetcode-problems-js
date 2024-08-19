/*
  Title case any given string
  "this is a word" > "This Is A Word"
*/

function titleCase(string){
    //stuff
    //console.log(string.split(" "))
    let splitString = string.split(" ");
    return splitString.map((word)=> word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
     word[0]
}