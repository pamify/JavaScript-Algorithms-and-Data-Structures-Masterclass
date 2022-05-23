function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  // keep looping until min > max
  while (min <= max) {
    // divide the array approximately in half
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < val) {
      min = middle + 1; 
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

// console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
// console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1