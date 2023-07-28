'use strict';

function zipLists(list1, list2) {
  if (!list1.head) return list2.head;
  if (!list2.head) return list1.head;

  let current1 = list1.head;
  let current2 = list2.head;
  let temp1, temp2;

  while (current1 && current2) {
    temp1 = current1.next;
    temp2 = current2.next;

    current1.next = current2;
    current2.next = temp1;

    current1 = temp1;
    current2 = temp2;
  }

  // If list2 is longer than list1, append the remaining nodes of list2
  if (current2) {
    current1 = list1.altTraversal(); // Get the last node of list1
    current1.next = current2;
  }

  return list1;
}

module.exports = zipLists;
