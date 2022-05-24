/* Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists.  If the value does not exist in the array, return -1.

Don't use indexOf to implement this function!

*/

function linearSearch(arr, val) {
	// loop through the array
	for (let i = 0; i < arr.length; i++) {
		// check if the current element is equal to the value
		if (arr[i] === val) {
			// if it is, return the index at which the element is found
			return i;
		}
	}
	// if the value is never found, return -1
	return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
console.log(linearSearch([100], 200)); // -1