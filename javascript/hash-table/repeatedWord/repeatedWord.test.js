'use strict';

const repeatedWord = require('./repeatedWord');
let str = "hello world! how're you doing today.";
let strTwo = "hello world! how're you doing today world.";
let strThree = "hello world! Hello world.";

test('No matching words responds correctly', ()=> {
  expect(repeatedWord(str)).toBe('No repeated words found.');
});

test('matching words are returned', ()=> {
  expect(repeatedWord(strTwo)).toBe('world');
});

test('matching is case sensitive', ()=> {
  expect(repeatedWord(strThree)).toBe('world');
});
