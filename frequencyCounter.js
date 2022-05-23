/* Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. 

Note: You may assume the string contains only lowercase alphabets 
*/

function validAnagram(str1, str2) {
  // if the length of the two strings do not match, return false (we do not have an anagram)
  if (str1.length !== str2.length) {
    return false;
  }

  // create an object for each string to store the number of times each character appears
  let str1Count = {};
  let str2Count = {};

  // loop over the first string
  for (let i = 0; i < str1.length; i++) {
    // if the key exists, add one to the count
    if (str1Count[str1[i]]) { //
      str1Count[str1[i]]++;
    } else {
      // if the key does not exist, add the character as the key and set the count to 1
      str1Count[str1[i]] = 1;
    }
  }
  
  // loop over the second string
  for (let j = 0; j < str2.length; j++) {
    // if the key exists, add one to the count
    if (str2Count[str2[j]]) {
      str2Count[str2[j]]++;
    } else {
      // if the key does not exist, add the character as the key and set the count to 1
      str2Count[str2[j]] = 1;
    }
  }

  // loop over either object
  for (let key in str1Count) {
    // if the value does not match the value in the second object, stop the loop and return false
    if ((str1Count[key] !== str2Count[key])) {
      return false;
    }
  }
 
  // continue looping if the value in the first object matches the value in the second object 
  // at the end of the loop, if all keys and values match, return true (we have an anagram)
  return true;
}

// validAnagram('', ''); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
console.log(validAnagram('racecar', 'acerrac')); // true