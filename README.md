[![first-timers-only](https://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square)](https://www.firsttimersonly.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Single linked list implementation

A single linked list implementation which supports typescript.

## Installation

```sh
npm install single-linked-list
```

## Usage

```ts
import { SingleLinkedList } from 'single-linked-list';

const singleLinkedList = new SingleLinkedList<number>();
singleLinkedList.push(1);
singleLinkedList.push(2);
singleLinkedList.push(3);
singleLinkedList.push(4);
singleLinkedList.push(5);

console.log(singleLinkedList.toArray()); // [1, 2, 3, 4, 5]
```

## SingleLinkedList<T> API

### Attributes

| attributes | type                 | description                |
| ---------- | -------------------- | -------------------------- |
| head       | SingleLinkedListNode | The first node in the list |
| tail       | SingleLinkedListNode | The last node in the list  |
| length     | number               | Length of the list         |

### Functions

| attributes | args                    | return type             | description                                     |
| ---------- | ----------------------- | ----------------------- | ----------------------------------------------- |
| push       | value: T                | SingleLinkedList<T>     | push new node with value to the end of the list |
| pop        | number                  | Length of the list      |                                                 |
| get        | index: number           | SingleLinkedListNode<T> | return node at index                            |
| set        | value: T, index: number | boolean                 | change node value at index                      |
| insert     | value: T, index: number | boolean                 |                                                 |
| remove     | number                  | Length of the list      |                                                 |
| reverse    | number                  | Length of the list      |                                                 |
| shift      | number                  | Length of the list      |                                                 |
| toArray    | number                  | Length of the list      |                                                 |
| unshift    | number                  | Length of the list      |                                                 |
| clear      |                         | void                    | remove all nodes                                |
