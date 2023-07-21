'use strict';

//will create obj {value:given, next:given}
class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head=null){
    this.head = head;
  }

  traversal() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }

  altTraversal() {
    /// return the last node of the list
    let current = this.head;
    if (!current) return;
    while (current.next) {
      // conditional chaining
      current = current.next;
    }
    return current;
  }

  //adds Node
  insert(value) {
    if(!this.head) this.head = new Node(value);
    //otherwise
    const newNode = new Node(value);
    // console.log(newNode);
    newNode.next = this.head;
    this.head = newNode;
    // console.log(this.head);
  }

  //indicates w/ boolean whether value exists elsewhere in list
  includes(value){
    let current = this.head;
    while (current) {
      if(current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  //string with all LL values
  toString(){
    // if (!this.head) return 'NULL';
    let current = this.head;
    let returnStr = '';
    while (current) {
      // look at the node.value "{ a } -> "
      returnStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    // once we exit the loop we need to tack NULL on to the end
    returnStr += 'NULL';
    return returnStr;
  }

  //adds a new node with the given value to the end of the list
  append(newVal){
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(newVal);
  }

  //adds a new node with the given new value immediately before the first node that has the value specified
  insertBefore(val, newVal){
    if (!this.head) {this.head = new Node(newVal);} //optional, for saftey, could be on insert after too
    let current = this.head;
    if (current.value === val) {
      this.head = new Node(newVal, current);
    }
    while (current.next) {
      if (current.next.value === val) {
        let temp = current.next;
        current.next = new Node(newVal, temp);
        return;
      }
      current = current.next;
    }
  }

  //adds a new node with the given new value immediately after the first node that has the value specified
  insertAfter(val, newVal){
    let current = this.head;
    while (current) {
      if (current.value === val) {
        let temp = current.next;
        current.next = new Node(newVal, temp);
        return;
      }
      current = current.next;
    }
  }
}

module.exports = {LinkedList, Node};
