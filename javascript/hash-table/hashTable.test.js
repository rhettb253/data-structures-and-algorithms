'use strict';

const HashTable = require('./hashTable');

test('hash method gets an index within our array size', ()=> {
  const Hash1 = new HashTable();
  const ans = Hash1.hash('Hello');
  // console.log(ans);
  expect(ans).toBeLessThan(100);
});

test('set method adds keys and updates buckets', ()=> {
  const Hash2 = new HashTable();
  Hash2.set('Mama', 7);
  // console.log(Hash2.keys);
  // console.log(Hash2.buckets);
  expect(Hash2.keys.Mama).toEqual(7);
  expect(Array.isArray(Hash2.buckets[57])).toBe(true);
});

test('keys method returns keys', ()=> {
  const Hash3 = new HashTable();
  Hash3.set('Mama', 7);
  Hash3.set('Dadda', 11);
  expect(Hash3.returnKeys()).toEqual(Hash3.keys);
});

test('has method returns boolean', ()=> {
  const Hash4 = new HashTable();
  Hash4.set('Mama', 7);
  expect(Hash4.has('Mama')).toEqual(true);
  expect(Hash4.has('Dadda')).toEqual(false);
});

test('get method returns key value', ()=> {
  const Hash5 = new HashTable();
  Hash5.set('Mama', 7);
  expect(Hash5.get('Mama')).toEqual(7);
  expect(Hash5.get('Dadda')).toEqual('No matching key');
});
