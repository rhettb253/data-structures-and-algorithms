'use strict';

function insert (sortedArr, integer) {
  let i = 0;
  while (integer > sortedArr[i]) {
    i++;
  }
  while (i < sortedArr.length) {
    let temp = sortedArr[i];
    sortedArr[i] = integer;
    integer = temp;
    i++;
  }
  sortedArr.push(integer);
}

function insertionSort (inputArr) {
  let sorted = [];
  sorted[0] = inputArr[0];
  for (let i = 1; i < inputArr.length; i++) {
    insert(sorted, inputArr[i]);
  }
  return sorted;
}

module.exports = { insertionSort, insert };
