# HashTable Class

## Overview

The HashTable class is a basic implementation of a hash table (also known as a hash map) in JavaScript. A hash table is a data structure that allows for efficient storage, retrieval, and update of key-value pairs. The class provides methods to set and get values associated with keys, as well as other utility functions.

## Features

Efficient key-value storage using a hashing mechanism.
Supports setting and getting values by key.
Checks for duplicate keys and updates values accordingly.
Provides methods to return all stored keys and check if a key exists.

## Usage

### Installation

No installation is required; you can include the HashTable class directly in your JavaScript project. Here's how you can use it:

#### Include the HashTable class in your JavaScript file:

const HashTable = require('./HashTable');

#### Create an instance of the HashTable:

const hashTable = new HashTable();

#### Use the HashTable methods to set, get, and manipulate key-value pairs:

hashTable.set('exampleKey', 'exampleValue');

const value = hashTable.get('exampleKey');

const keyExists = hashTable.has('exampleKey');

const keys = hashTable.returnKeys();

## Example

const HashTable = require('./HashTable');

const hashTable = new HashTable();

hashTable.set('name', 'John');
hashTable.set('age', 30);

const name = hashTable.get('name'); // Returns 'John'
const age = hashTable.get('age'); // Returns 30

const hasName = hashTable.has('name'); // Returns true
const hasGender = hashTable.has('gender'); // Returns false

const keys = hashTable.returnKeys(); // Returns ['name', 'age']
