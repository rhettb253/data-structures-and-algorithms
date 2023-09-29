'use strict';

function mergeSort(arr) {
  let n = arr.length;

  // Base case: if the array has 0 or 1 element, it's already sorted.
  if (n <= 1) {
    return arr;
  }

  let mid = Math.floor(n / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Recursively sort both halves.
  left = mergeSort(left);
  right = mergeSort(right);

  // Merge the sorted halves.
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from both arrays.
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

module.exports = {mergeSort, merge};
