'use strict';
const leftJoin = require('./leftJoin');

const myObject = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const myObject2 = {
  name: 'Paul',
  age: 32,
  town: 'LA'
};

const myObject3 = {};

test('function works as planned', () => {
  expect(leftJoin(myObject, myObject2)).toEqual({ name: [ 'John', 'Paul' ], age: [ 30, 32 ], city: 'New York' });
});

test('function works with empty object', () => {
  expect(leftJoin(myObject3, myObject2)).toEqual({});
});
