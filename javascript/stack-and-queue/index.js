'use strict';

class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(top = null){
    this.top = top;
  }

  //adds a new node with that value to the top of the stack
  push(value){
    let newNode = new Node(value, this.top);
    this.top = newNode;
  }

  //removes and returns the node from the top of the stack
  pop(){
    if (this.isEmpty()) {throw new Error('cannot remove a node from an empty stack');}
    let temp = this.top;
    this.top = temp.next;
    return temp.value;
  }

  //returns the value of the node located at the top of the stack
  peek(){
    if (this.isEmpty()) {throw new Error('there are no nodes in this stack');}
    return this.top.value;
  }

  isEmpty(){
    return this.top ? false : true;
  }
}

class Queue {
  constructor(node = null){
    this.front = node;
    this.rear = node;
  }

  //adds a new node with that value to the back of the queue
  enqueue(value){
    let newNode = new Node(value, null);
    if (!this.front) this.front = newNode;
    if (!this.rear) this.rear = newNode;
    if (this.rear) {
      this.rear.next = newNode;
      this.rear = this.rear.next;
    }
  }

  //removes and returns the node from the front of the queue
  dequeue(){
    if (this.isEmpty()) {throw new Error('cannot remove a node from an empty queue');}
    let temp = this.front;
    this.front = temp.next;
    if (this.front === null) this.rear = null;
    return temp;
  }

  //returns the value of the node located at the front of the queue
  peek(){
    if (this.isEmpty()) {throw new Error('there are no nodes in this queue');}
    return this.front.value;
  }

  isEmpty(){
    return this.front ? false : true;
  }
}

module.exports = {Node, Stack, Queue};
