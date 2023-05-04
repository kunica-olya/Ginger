const arr = [5, 3, 4, 1, 6, 2];
for (let i = 0; i < arr.length - 1; i++) {
                    for (let j = 0; j < arr.length - 1; j++) {
                                        console.log('check', arr[i], 'with', arr[j], 'i = ', i, 'j = ', j);

                                        if (arr[j] > arr[j + 1]) {
                                                            const temp = arr[j + 1];
                                                            arr[j + 1] = arr[j];
                                                            arr[j] = temp;
                                        }
                    }
}

// [5,3] => [3,5] // if 5 > 3 THEN SWAP, else NOTHING
// [5,4] => [4,5] // if 5 > 4 THEN SWAP, else NOTHING
// [5,1] => [1,5] // if 5 > 1 THEN SWAP, else NOTHING
// [5,6] => [5,6] // if 5 > 6 THEN SWAP, else NOTHING
// [6,2] => [2,6] // if 6 > 2 THEN SWAP, else NOTHING
//
// [3,4,1,5,2,6] // #1
//
// // [3,4] => [3,4] // if 3 > 4 THEN SWAP, else NOTHING
// // [4,1] => [1,4] // if 4 > 1 THEN SWAP, else NOTHING
// // [4,5] => [4,5] // if 4 > 5 THEN SWAP, else NOTHING
// // [5,2] => [2,5] // if 5 > 2 THEN SWAP, else NOTHING
// // [5,6] => [5,6] // if 5 > 6 THEN SWAP, else NOTHING
//
// [3,1,4,2,5,6] // #2
//
// // [3,1] => [1,3] // if 3 > 1 THEN SWAP, else NOTHING
// // [3,4] => [3,4] // if 3 > 4 THEN SWAP, else NOTHING
// // [4,2] => [2,4] // if 4 > 2 THEN SWAP, else NOTHING
// // [4,5] => [4,5] // if 4 > 5 THEN SWAP, else NOTHING
// // [5,6] => [5,6] // if 5 > 6 THEN SWAP, else NOTHING
//
// [1,3,2,4,5,6] // #3
//
// // [1,3] => [1,3] // if 1 > 3 THEN SWAP, else NOTHING
// // [3,2] => [2,3] // if 3 > 2 THEN SWAP, else NOTHING
// // [3,4] => [3,4] // if 3 > 4 THEN SWAP, else NOTHING
// // [4,5] => [4,5] // if 4 > 5 THEN SWAP, else NOTHING
// // [5,6] => [5,6] // if 5 > 6 THEN SWAP, else NOTHING
//
// [1,2,3,4,5,6]; // #4
