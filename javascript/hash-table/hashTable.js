'use strict';

class HashTable {
  constructor(size = 99) {
    this.size = size;
    this.keys = {};
    this.buckets = new Array(size);
  }

  hash(str) {
    let hash = 5;
    let hashMultiplier = 599;
    for (let i = 0; i < str.length; i++) {
      const currentLetter = str[i].charCodeAt();
      hash = (hash + currentLetter) * hashMultiplier;
    }
    return hash;
  }

  update(index, key, value) {
    const arr = this.buckets[index];
    for (let i = 0; i < arr.length; i++) {

    }
  }

  set(key, val) {
    let index = this.hash(key) % this.size;
    if (this.keys[key]){
      this.update(index, key, val);
    }
    if (this.buckets[index]) {
      this.buckets[index].push({key, val});
    } else {
      this.buckets[index] = [{key, val}];
      this.keys[key] = true;
    }
  }
}

module.exports = HashTable;
