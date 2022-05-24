function binarySearch(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  // while the left pointer comes before the right pointer
  while (min <= max) {
    // divide the array approximately in half and create a pointer in the middle
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < val) {
      // if the currentElement is less than the val, move the left pointer up
      min = middle + 1; 
    } else if (currentElement > val) {
      // if the currentElement is greater than the target val, move the right pointer down
      max = middle - 1;
    } else {
      // if you find the val you want, return the index
      return middle;
    }
  }
  // if the val is never found in the array, return -1
  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 11)); // -1