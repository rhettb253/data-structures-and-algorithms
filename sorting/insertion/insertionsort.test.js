'use strict';

const {insertionSort, insert} = require('./insertionsort');
let arr = [1, 5, 3, 8, 2];

describe('does this function work', ()=> {
  test('does it actually sort', ()=> {
    console.log(insertionSort(arr));
    expect(insertionSort(arr)).toEqual([1, 2, 3, 5, 8]);
  });
});
