'use strict';

const {Stack} = require('../stack-and-queue/index');

class PseudoQueue {
  constructor() {
    this.in = new Stack(); // To enqueue
    this.out = new Stack(); // To dequeue
  }

  enqueue(value) {
    this.in.push(value);
  }

  dequeue() {
    if (this.out.isEmpty()) {
      while (!this.in.isEmpty()) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }
}
