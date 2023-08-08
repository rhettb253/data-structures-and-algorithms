'use strict';

const {Stack, Node} = require('../stack-and-queue/index');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack(); // To enqueue
    this.stack2 = new Stack(); // To dequeue
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}
