'use strict';

const zipLists = require('../zipLists');
const { LinkedList } = require('../index.js');

const dummyLLOne = {
  value: 'a',
  next: {
    value: 'b',
    next: {
      value: 'c',
      next: null,
    },
  },
};

const dummyLLTwo = {
  value: 'a',
  next: {
    value: 'b',
    next: {
      value: 'c',
      next: null,
    },
  },
};

const dummyLLThree = {
  value: 'a',
  next: {
    value: 'b',
    next: {
      value: 'c',
      next: {
        value: 'd',
        next: {
          value: 'e',
          next: {
            value: 'f',
            next: null
          }
        }
      }
    }
  }
};

const dummyLLFour = {
  value: 'a',
  next: {
    value: 'b',
    next: {
      value: 'c',
      next: null,
    },
  },
};

const dummyLLFive = {
  value: 'a',
  next: {
    value: 'b',
    next: {
      value: 'c',
      next: null,
    },
  },
};

describe('zipList function performs as it should', () => {
  test('two even length LLs output correctly', () => {
    const testLLOne = new LinkedList(dummyLLOne);
    const testLLTwo = new LinkedList(dummyLLTwo);
    const createdList = zipLists(testLLOne, testLLTwo);
    expect(createdList.toString()).toEqual('{ a } -> { a } -> { b } -> { b } -> { c } -> { c } -> NULL');
  });
  test('two uneven length LLs output correctly', () => {
    const testLLOne = new LinkedList(dummyLLFour);
    const testLLTwo = new LinkedList(dummyLLThree);
    const createdList = zipLists(testLLOne, testLLTwo);
    expect(createdList.toString()).toEqual('{ a } -> { a } -> { b } -> { b } -> { c } -> { c } -> { d } -> { e } -> { f } -> NULL');
  });
  test('when an empty list is entered the other list is returned', () => {
    const testLLOne = new LinkedList(dummyLLFive);
    const testLLTwo = new LinkedList({});
    const createdList = zipLists(testLLOne, testLLTwo);
    expect(createdList.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });
});
