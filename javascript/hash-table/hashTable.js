'use strict';

class HashTable {
  constructor(size = 99) {
    this.size = size;
    this.keys = {};
    this.buckets = new Array(size);
  }

  //return index between 0 & 99
  hash(str) {
    let hash = 5;
    let hashMultiplier = 599;
    for (let i = 0; i < str.length; i++) {
      const currentLetter = str[i].charCodeAt();
      hash = (hash + currentLetter) * hashMultiplier;
    }
    let index = Math.ceil(hash % this.size);
    return index;
  }

  update(index, key, value) {
    const arr = this.buckets[index];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].key === key) {
        arr[i].value = value;
      }
    }
  }

  set(key, val) {
    let index = this.hash(key);
    if (this.keys[key]) {
      this.keys[key] = val;
    }
    if (this.buckets[index]) {
      if (this.keys[key]) {
        this.update(index, key, val);
      } else this.buckets[index].push({ key, val });
    } else this.buckets[index] = [{ key, val }];
    this.keys[key] = val;
  }

  returnKeys() {
    return this.keys;
  }

  has(key) {
    if (this.keys[key]) return true;
    else return false;
  }

  get(key) {
    if (this.keys[key]) return this.keys[key];
    else return 'No matching key';
  }
}
module.exports = HashTable;
