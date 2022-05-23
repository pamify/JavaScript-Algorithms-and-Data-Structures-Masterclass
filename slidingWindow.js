/* Write a function called maxSubarraySum which accepts an array of integers and a number called num. The function should calculate the maximum sun of n consecutive elements in the array. */

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  // if the length of the array is less than num, return null (there are not enough numbers in the array)
  if (arr.length < num) {
    return null;
  }
  // loop through the array to sum up the first set of numbers (if num is 3, the first 3 numbers will be added up and stored in maxSum)
  for (let i = 0; i < num; i++) { // num = 3
    maxSum += arr[i]; // maxSum = arr[0] + arr[1] + arr[2] = 2 + 6 + 9 = 17
  }
  // set tempSum's value to be maxSum
  tempSum = maxSum; // tempSum = 17

  // loop through the array starting at num (the next set of 3, starting at index 3)
  for (let i = num; i < arr.length; i++) {
    // subtract the first number in the first set and add the first number in the next set of 3
    // tempSum = 17 - arr[0] + arr[3] = 17 - 2 + 2 = 17
    tempSum = tempSum - arr[i - num] + arr[i];
    // update maxSum if maxSum is larger than tempSum
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 8 + 5 + 6 = 19
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 2 + 8 = 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 2 + 5 + 2 + 8 = 17
// console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 4 + 2 + 1 + 6 = 13
// console.log(maxSubarraySum([], 4)); // null