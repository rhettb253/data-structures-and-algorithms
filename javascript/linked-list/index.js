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

  //adds Node
  insert(value) {
    if(!this.head) this.head = new Node(value);
    //otherwise
    const newNode = new Node(value);
    // console.log(newNode);
    newNode.next = this.head;
    this.head = newNode;
    console.log(this.head)
  }

  traversal() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }

  altTraversal() {
    /// return the last node of the list or something... count them??
    let current = this.head;
    if (!current) return;
    while (current?.next) {
      // conditional chaining
      current = current.next;
    }
    return current;
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
    let returnStr = "";
    while (current) {
      // look at the node.value "{ a } -> "
      returnStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    // once we exit the loop we need to tack NULL on to the end
    returnStr += 'NULL';
    return returnStr;
  }
}

module.exports = {LinkedList, Node};
