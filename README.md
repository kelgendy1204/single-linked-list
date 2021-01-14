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

const singleLinkedList1 = new SingleLinkedList<number>();
singleLinkedList.push(1);
singleLinkedList.push(2);
singleLinkedList.push(3);
singleLinkedList.push(4);
singleLinkedList.push(5);
console.log(singleLinkedList1.toArray()); // [1, 2, 3, 4, 5]

const singleLinkedList2 = new SingleLinkedList<number>();
singleLinkedList1.fromArray([11, 12, 13, 14, 15]);
console.log(singleLinkedList2.toArray()); // [11, 12, 13, 14, 15]

// It's also iterable
for (let key of singleLinkedList2) {
    console.log(singleLinkedList2[key]);
}
// Or
console.log([...singleLinkedList1]);
```

## SingleLinkedList<T> API

### Attributes

| attributes | parameters           | description                |
| ---------- | -------------------- | -------------------------- |
| head       | SingleLinkedListNode | The first node in the list |
| tail       | SingleLinkedListNode | The last node in the list  |
| length     | number               | Length of the list         |

### Functions

| function  | parameters              | return type                          | description                                        |
| --------- | ----------------------- | ------------------------------------ | -------------------------------------------------- |
| push      | value: T                | SingleLinkedList<T>                  | push new node with value to the end of the list    |
| unshift   | value: T                | SingleLinkedList<T>                  | push new node with value to the start of the list  |
| pop       |                         | SingleLinkedListNode<T> \| undefined | remove the last node and return it                 |
| shift     |                         | SingleLinkedListNode<T> \| undefined | remove the first node and return it                |
| get       | index: number           | SingleLinkedListNode<T> \| undefined | return node at certain index                       |
| remove    | index: number           | SingleLinkedListNode<T> \| undefined | remove node at certain index                       |
| set       | value: T, index: number | boolean                              | change node value at certain index                 |
| insert    | value: T, index: number | boolean                              | insert node at certain index                       |
| toArray   |                         | T[]                                  | return the linked list in the form of normal array |
| fromArray | array: T[]              | SingleLinkedList<T>                  | Create single linked list from normal array        |
| reverse   |                         | SingleLinkedList<T>                  | Mutate the list by reversing it                    |
| clear     |                         | void                                 | remove all nodes                                   |
