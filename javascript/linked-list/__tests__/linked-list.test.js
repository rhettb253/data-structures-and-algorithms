'use strict';

// Require our linked list implementation
'use strict';

const { LinkedList } = require('../index.js');
// '{ a } -> { b } -> { c } -> NULL'
const dummyLL = {
  value: 'a',
  next: {
    value: 'b',
    next: {
      value: 'c',
      next: null,
    },
  },
};

describe('linked list test suite', () => {
  test('toString method returns the node values in the right format', () => {
    const testLL = new LinkedList(dummyLL);
    expect(testLL.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });
  test('includes method returns true if a value exists, else false', () => {
    const testLL = new LinkedList(dummyLL);
    expect(testLL.includes('b')).toEqual(true);
    expect(testLL.includes('z')).toEqual(false);
  });
  test('insert should take a new value and add it to the front of the list', () => {
    const testLL = new LinkedList(dummyLL);
    testLL.insert(1);
    expect(testLL.toString()).toEqual(
      '{ 1 } -> { a } -> { b } -> { c } -> NULL'
    );
  });
  test('can add a node to the end of the linked list', () => {
    const testLL = new LinkedList(dummyLL);
    testLL.append('d');
    expect(testLL.toString()).toBe('{ a } -> { b } -> { c } -> { d } -> NULL');
  });
  test('can insert a node BEFORE a node located somewhere in the middle', () =>{
    const testLL = new LinkedList(dummyLL);
    testLL.insertBefore('b', '1');
    expect(testLL.toString()).toBe('{ a } -> { 1 } -> { b } -> { c } -> { d } -> NULL');
  });
  test('can insert a node AFTER a node located somewhere in the middle', () =>{
    const testLL = new LinkedList(dummyLL);
    testLL.insertAfter('c', '2');
    expect(testLL.toString()).toBe('{ a } -> { 1 } -> { b } -> { c } -> { 2 } -> { d } -> NULL');
  });
  test('can add multiple nodes to the end of the linked list', () => {
    const testLL = new LinkedList(dummyLL);
    testLL.append('e'); testLL.append('f');
    expect(testLL.toString()).toBe('{ a } -> { 1 } -> { b } -> { c } -> { 2 } -> { d } -> { e } -> { f } -> NULL');
  });
  test('can insert a node BEFORE the first node', () => {
    const testLL = new LinkedList(dummyLL);
    testLL.insertBefore('a', 'first');
    expect(testLL.toString()).toBe('{ first } -> { a } -> { 1 } -> { b } -> { c } -> { 2 } -> { d } -> { e } -> { f } -> NULL');
  });
  test('can insert a node AFTER the last node in the list', () => {
    const testLL = new LinkedList(dummyLL);
    testLL.insertAfter('f', 'last');
    expect(testLL.toString()).toBe('{ a } -> { 1 } -> { b } -> { c } -> { 2 } -> { d } -> { e } -> { f } -> { last } -> NULL');
  });
});

//on tests every node added to the middle and the end stays for next text but the things added to beggining do not carry onto the next test. why?
