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
    this.isEmpty() && new Error('cannot remove a node from an empty list');
    let temp = this.top;
    this.top = temp.next;
    return temp.value;
  }

  //returns the value of the node located at the top of the stack
  peek(){
    return this.top.value;
  }

  isEmpty(){
    return this.top ? false : true;
  }
}

class Queue {
  constructor(front = null, rear = null){
    this.front = front;
    this.rear = rear;
  }

  //adds a new node with that value to the back of the queue
  enqueue(value){

  }

  //removes and returns the node from the front of the queue
  dequeue(){

  }

  //returns the value of the node located at the front of the queue
  peek(){

  }

  isEmpty(){

  }
}
