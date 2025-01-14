/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let n1=str1.length;
  let n2=str2.length;

  if(n1 != n2 )
  return false;

  let temp1 = str1.split(" ").join("").toLowerCase().split("").sort().join("")
  let temp2 = str2.split(" ").join("").toLowerCase().split("").sort().join("")
  return temp1 === temp2


return true;


}

module.exports = isAnagram;
