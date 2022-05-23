/* Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist. */

function sumZero(arr) {
  // set the left pointer to the first index in the array
  let left = 0; 
  // set the right pointer to the last index in the array
  let right = arr.length - 1;

  // continue looping as long as the left pointer is less than the right pointer
  while (left < right) {
    let sum = arr[left] + arr[right];
    // if the first number plus the last number equals zero, return a new array with the two values that equal 0
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      // if the sum is greater than 0, move the right pointer down 1 and leave the left pointer where it is and check if the sum equals 0
      right--;
    } else if (sum > 0) {
      // if the sum is less than 0, move the left pointer up 1 and leave the right pointer where it is and check if the sum equals 0
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined

