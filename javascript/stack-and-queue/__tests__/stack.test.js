'use strict';

const {Stack} = require('../index');

const dummyStack = {
  value: 'b',
  next: {
    value: 'c',
    next: {
      value: 'd',
      next: null,
    },
  },
};

describe('Stack test suite', () => {

  test('stack.push method works', () => {
    let testStack = new Stack(dummyStack);
    testStack.push('a');
    expect(testStack.top.value).toBe('a');
  });

  test('stack.push method works when called multiple times', () => {
    let testStack = new Stack(dummyStack);
    testStack.push('1'); testStack.push('2');
    expect(testStack.top.value).toBe('2');
  });

  test('we can successfully pop off the stack', () => {
    let testStack = new Stack(dummyStack);
    testStack.pop();
    expect(testStack.top.value).toBe('c');
  });

  test('we can successfully empty a stack after multiple pops', () => {
    let testStack = new Stack(dummyStack);
    testStack.pop(); testStack.pop(); testStack.pop();
    expect(testStack.top).toBe(null);
    expect(testStack.isEmpty()).toBeTruthy();
  });

  test('we can successfully peek the next item on the stack', () => {
    let testStack = new Stack(dummyStack);
    expect(testStack.peek()).toBe('b');
  });

  test('we can successfully instantiate an empty stack', () => {
    let testStack = new Stack();
    expect(testStack.top).toBe(null);
  });

  test('calling pop or peek on empty stack raises exception', () => {
    let testStack = new Stack();
    expect(() => {testStack.peek();}).toThrow('there are no nodes in this stack');
    expect(() => {testStack.pop();}).toThrow('cannot remove a node from an empty stack');
  });

});
