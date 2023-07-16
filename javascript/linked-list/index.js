'use strict';

//will create obj {value:given, next:given}
class Node {
  constructor(data, next=null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  //adds Node
  insert(data) {
    if(!this.head) this.head = new Node(data);
    //otherwise
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  //indicates w/ boolean whether value exists elsewhere in list
  includes(value){
  }

  //string with all LL values
  toString(){
  }
}

module.exports = LinkedList;
