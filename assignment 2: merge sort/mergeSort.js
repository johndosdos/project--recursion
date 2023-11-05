/* 
Merge sort algorithm.

sort in ascending order.
*/

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const { leftHalf, rightHalf } = splitArray(array);

  const mergeLeft = mergeSort(leftHalf);
  const mergeRight = mergeSort(rightHalf);

  return mergeArray(mergeLeft, mergeRight, array);
}

function splitArray(array) {
  const midpoint = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, midpoint);
  const rightHalf = array.slice(midpoint);

  return {
    leftHalf,
    rightHalf,
  };
}

function mergeArray(mergeLeft, mergeRight, array) {
  const mergedArray = [];
  let i = 0; //index of left half
  let j = 0; //index of right half
  let k = 0; //index of merged array

  while (i < mergeLeft.length && j < mergeRight.length) {
    if (mergeLeft[i] <= mergeRight[j]) {
      mergedArray[k] = mergeLeft[i];
      i += 1;
      k += 1;
    } else {
      mergedArray[k] = mergeRight[j];
      j += 1;
      k += 1;
    }
  }
  // push remaining left-side values to the merged array
  while (i < mergeLeft.length) {
    mergedArray[k] = mergeLeft[i];
    i += 1;
    k += 1;
  }

  // push remaining right-side values to the merged array
  while (j < mergeRight.length) {
    mergedArray[k] = mergeRight[j];
    j += 1;
    k += 1;
  }
  return mergedArray;
}

console.log(mergeSort([6, 12, 7, 16, 3, 10, 13, 11, 4, 18]));
