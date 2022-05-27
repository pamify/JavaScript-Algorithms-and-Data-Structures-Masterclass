function bubbleSort(arr) {
    // start looping from the end of the array towards the beginning
    for (let i = arr.length; i > 0; i--) {
        // start inner loop from the beginning until i - 1 (each subsequent loop should be shorter by 1)
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            // if arr[j] is greater than arr[j+1], swap those two values to bubble the largest number to the end of the array
            if (arr[j] > arr[j+1]) {
                // SWAP!
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        // console.log('ONE PASS COMPLETE!');
    }

    return arr;
}

// ES2015 solution
// function bubbleSort(arr) {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };

//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j+1]) {
//                 swap(arr, j, j + 1);
//             }
//         }
//     }

//     return arr;
// }


// console.log(bubbleSort([37, 45, 29, 8]));