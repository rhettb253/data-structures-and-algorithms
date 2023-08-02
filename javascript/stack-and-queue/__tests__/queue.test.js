'use strict';

const {Queue} = require('../index');

const dummyQueue = {
  value: 'a',
  next: null
};

describe('Queue test suite', () => {

  test('we can successfully enqueue into a queue', () => {
    let testQueue = new Queue(dummyQueue);
    testQueue.enqueue('b');
    expect(testQueue.rear.value).toBe('b');
  });

  test('we can successfully enqueue multiple values into a queue', () => {
    let testQueue = new Queue(dummyQueue);
    testQueue.enqueue('b'); testQueue.enqueue('c');
    expect(testQueue.front.value).toBe('a');
    expect(testQueue.rear.value).toBe('c');
  });

  test('we can successfully dequeue out of a queue the front value', () => {
    let testQueue = new Queue(dummyQueue);
    testQueue.enqueue('b'); testQueue.dequeue();
    expect(testQueue.front.value).toBe('b');
    expect(testQueue.rear.value).toBe('b');
  });

  test('we can successfully peek into a queue, seeing the front value', () => {
    let testQueue = new Queue(dummyQueue);
    expect(testQueue.peek()).toBe('a');
  });

  test('we can successfully empty a queue after multiple dequeues', () => {
    let testQueue = new Queue(dummyQueue);
    testQueue.enqueue('b'); testQueue.dequeue(); testQueue.dequeue();
    expect(testQueue.front).toBe(null);
    expect(testQueue.rear).toBe(null);
  });

  test('we can successfully instantiate an empty queue', () => {
    let testQueue = new Queue(dummyQueue);
    testQueue.enqueue('b'); testQueue.dequeue(); testQueue.dequeue();
    expect(testQueue.front).toBe(null);
    expect(testQueue.rear).toBe(null);
  });

  test('calling dequeue or peek on empty queue raises exception', () => {
    let testQueue = new Queue();
    expect(() => {testQueue.dequeue();}).toThrow('cannot remove a node from an empty queue');
    expect(() => {testQueue.peek();}).toThrow('there are no nodes in this queue');
  });

});
