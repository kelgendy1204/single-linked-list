import { SingleLinkedListNode, SingleLinkedList } from '../src/index';

describe('Node', () => {
    test('Node has value and next properties', () => {
        const node = new SingleLinkedListNode(12);
        expect(node.value).toBe(12);
        expect(node.next).toBeUndefined();
    });
});

describe('SingleLinkedList', () => {
    test('SingleLinkedList has head, tail and length', () => {
        const singleLinkedList = new SingleLinkedList();
        expect(singleLinkedList.length).toBe(0);
        expect(singleLinkedList.head).toBeUndefined();
        expect(singleLinkedList.tail).toBeUndefined();
    });
});

describe('Push method', () => {
    test('Push method increment size', () => {
        const singleLinkedList = new SingleLinkedList();
        expect(singleLinkedList.length).toBe(0);
        singleLinkedList.push(1);
        expect(singleLinkedList.length).toBe(1);
    });

    test('Push method to empty list pushes to head and tail', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.push(1);
        expect(singleLinkedList.head?.value).toBe(1);
        expect(singleLinkedList.tail?.value).toBe(1);
    });

    test('Push method to existed list added to tail', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.push(1);
        singleLinkedList.push(2);
        singleLinkedList.push(3);
        singleLinkedList.push(4);

        expect(singleLinkedList.head?.next?.next?.next?.value).toBe(4);
        expect(singleLinkedList.tail?.value).toBe(4);
        expect(singleLinkedList.tail?.next).toBeUndefined();
        expect(singleLinkedList.head?.next?.next?.next?.next).toBeUndefined();
        expect(singleLinkedList.length).toBe(4);
    });
});

describe('Pop method', () => {
    test('Pop method decrement size', () => {
        const singleLinkedList = new SingleLinkedList();
        expect(singleLinkedList.length).toBe(0);
        singleLinkedList.push(1);
        expect(singleLinkedList.length).toBe(1);
        singleLinkedList.pop();
        expect(singleLinkedList.length).toBe(0);
    });

    test('Pop method from empty list return undefined also head and tail still undefined', () => {
        const singleLinkedList = new SingleLinkedList();
        const returnedNode = singleLinkedList.pop();

        expect(returnedNode).toBeUndefined();
        expect(singleLinkedList.head).toBeUndefined();
        expect(singleLinkedList.tail).toBeUndefined();
        expect(singleLinkedList.length).toBe(0);
    });

    test('Pop method from list return the last item and the tail assigned to the item before it', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.push(1);
        singleLinkedList.push(2);
        singleLinkedList.push(3);
        singleLinkedList.push(4);

        const returnedNode = singleLinkedList.pop();
        expect(returnedNode?.value).toBe(4);
        expect(singleLinkedList.tail?.value).toBe(3);
        expect(singleLinkedList.length).toBe(3);
        expect(singleLinkedList.head?.value).toBe(1);
    });

    test('Pop method from list with one item return the last item and head and tail are undefined', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.push(1);
        singleLinkedList.pop();

        expect(singleLinkedList.tail).toBeUndefined();
        expect(singleLinkedList.head).toBeUndefined();
        expect(singleLinkedList.length).toBe(0);
    });

    test('Pop method from list with two items return the last item and head and tail are the same', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.push(1);
        singleLinkedList.push(2);
        singleLinkedList.pop();

        expect(singleLinkedList.tail).toBe(singleLinkedList.head);
    });
});

describe('Get method', () => {
    test('returns the node at given index, undefined for not found indices', () => {
        const singleLinkedList = new SingleLinkedList();
        expect(singleLinkedList.get(10)).toBeUndefined();
        expect(singleLinkedList.get(-1)).toBeUndefined();

        singleLinkedList.push(1);
        singleLinkedList.push(2);
        singleLinkedList.push(3);
        singleLinkedList.push(4);

        expect(singleLinkedList.get(0)?.value).toBe(1);
        expect(singleLinkedList.get(1)?.value).toBe(2);
        expect(singleLinkedList.get(2)?.value).toBe(3);
        expect(singleLinkedList.get(3)?.value).toBe(4);
    });
});

describe('Shift method', () => {
    test('removes the first node when the list is empty', () => {
        const singleLinkedList = new SingleLinkedList();
        const removedNode = singleLinkedList.shift();
        expect(removedNode).toBeUndefined();
        expect(singleLinkedList.length).toBe(0);
    });

    test('removes the first node when the list has a size of one', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.push(1);
        singleLinkedList.shift();
        expect(singleLinkedList.length).toEqual(0);
        expect(singleLinkedList.get(0)).toBeUndefined();
    });

    test('removes the first node when the list has a size of three', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.push(1);
        singleLinkedList.push(2);
        singleLinkedList.push(3);

        const firstRemovedNode = singleLinkedList.shift();
        expect(firstRemovedNode?.value).toEqual(1);
        expect(singleLinkedList.head?.value).toEqual(2);
        expect(singleLinkedList.length).toEqual(2);

        singleLinkedList.shift();
        expect(singleLinkedList.length).toEqual(1);
        expect(singleLinkedList.head?.value).toEqual(3);

        singleLinkedList.shift();
        expect(singleLinkedList.head).toBeUndefined();
    });
});

// describe.skip('Insert First', () => {
// test('appends a node to the start of the list', () => {
// const l = new List();
// l.insertFirst(1);
// expect(l.head.data).toEqual(1);
// l.insertFirst(2);
// expect(l.head.data).toEqual(2);
// });
// });

// describe.skip('GetFirst', () => {
// test('returns the first element', () => {
// const l = new List();
// l.insertFirst(1);
// expect(l.getFirst().data).toEqual(1);
// l.insertFirst(2);
// expect(l.getFirst().data).toEqual(2);
// });
// });

// describe.skip('GetLast', () => {
// test('returns the last element', () => {
// const l = new List();
// l.insertFirst(2);
// expect(l.getLast()).toEqual({ data: 2, next: null });
// l.insertFirst(1);
// expect(l.getLast()).toEqual({ data: 2, next: null });
// });
// });

// describe.skip('Clear', () => {
// test('empties out the list', () => {
// const l = new List();
// expect(l.size()).toEqual(0);
// l.insertFirst(1);
// l.insertFirst(1);
// l.insertFirst(1);
// l.insertFirst(1);
// expect(l.size()).toEqual(4);
// l.clear();
// expect(l.size()).toEqual(0);
// });
// });

// describe.skip('InsertLast', () => {
// test('adds to the end of the list', () => {
// const l = new List();
// l.insertFirst('a');

// l.insertLast('b');

// expect(l.size()).toEqual(2);
// expect(l.getLast().data).toEqual('b');
// });
// });

// describe.skip('RemoveAt', () => {
// test('removeAt doesnt crash on an empty list', () => {
// const l = new List();
// expect(() => {
// l.removeAt(0);
// l.removeAt(1);
// l.removeAt(2);
// }).not.toThrow();
// });

// test('removeAt doesnt crash on an index out of bounds', () => {
// const l = new List();
// expect(() => {
// const l = new List();
// l.insertFirst('a');
// l.removeAt(1);
// }).not.toThrow();
// });

// test('removeAt deletes the first node', () => {
// const l = new List();
// l.insertLast(1);
// l.insertLast(2);
// l.insertLast(3);
// l.insertLast(4);
// expect(l.getAt(0).data).toEqual(1);
// l.removeAt(0);
// expect(l.getAt(0).data).toEqual(2);
// });

// test('removeAt deletes the node at the given index', () => {
// const l = new List();
// l.insertLast(1);
// l.insertLast(2);
// l.insertLast(3);
// l.insertLast(4);
// expect(l.getAt(1).data).toEqual(2);
// l.removeAt(1);
// expect(l.getAt(1).data).toEqual(3);
// });

// test('removeAt works on the last node', () => {
// const l = new List();
// l.insertLast(1);
// l.insertLast(2);
// l.insertLast(3);
// l.insertLast(4);
// expect(l.getAt(3).data).toEqual(4);
// l.removeAt(3);
// expect(l.getAt(3)).toEqual(null);
// });
// });

// describe.skip('InsertAt', () => {
// test('inserts a new node with data at the 0 index when the list is empty', () => {
// const l = new List();
// l.insertAt('hi', 0);
// expect(l.getFirst().data).toEqual('hi');
// });

// test('inserts a new node with data at the 0 index when the list has elements', () => {
// const l = new List();
// l.insertLast('a');
// l.insertLast('b');
// l.insertLast('c');
// l.insertAt('hi', 0);
// expect(l.getAt(0).data).toEqual('hi');
// expect(l.getAt(1).data).toEqual('a');
// expect(l.getAt(2).data).toEqual('b');
// expect(l.getAt(3).data).toEqual('c');
// });

// test('inserts a new node with data at a middle index', () => {
// const l = new List();
// l.insertLast('a');
// l.insertLast('b');
// l.insertLast('c');
// l.insertLast('d');
// l.insertAt('hi', 2);
// expect(l.getAt(0).data).toEqual('a');
// expect(l.getAt(1).data).toEqual('b');
// expect(l.getAt(2).data).toEqual('hi');
// expect(l.getAt(3).data).toEqual('c');
// expect(l.getAt(4).data).toEqual('d');
// });

// test('inserts a new node with data at a last index', () => {
// const l = new List();
// l.insertLast('a');
// l.insertLast('b');
// l.insertAt('hi', 2);
// expect(l.getAt(0).data).toEqual('a');
// expect(l.getAt(1).data).toEqual('b');
// expect(l.getAt(2).data).toEqual('hi');
// });

// test('insert a new node when index is out of bounds', () => {
// const l = new List();
// l.insertLast('a');
// l.insertLast('b');
// l.insertAt('hi', 30);

// expect(l.getAt(0).data).toEqual('a');
// expect(l.getAt(1).data).toEqual('b');
// expect(l.getAt(2).data).toEqual('hi');
// });
// });

// describe.skip('ForEach', () => {
// test('applies a transform to each node', () => {
// const l = new List();

// l.insertLast(1);
// l.insertLast(2);
// l.insertLast(3);
// l.insertLast(4);

// l.forEach((node) => {
// node.data += 10;
// });

// expect(l.getAt(0).data).toEqual(11);
// expect(l.getAt(1).data).toEqual(12);
// expect(l.getAt(2).data).toEqual(13);
// expect(l.getAt(3).data).toEqual(14);
// });
// });

// describe.skip('for...of loops', () => {
// test('works with the linked list', () => {
// const l = new List();

// l.insertLast(1);
// l.insertLast(2);
// l.insertLast(3);
// l.insertLast(4);

// for (let node of l) {
// node.data += 10;
// }

// expect(l.getAt(0).data).toEqual(11);
// expect(l.getAt(1).data).toEqual(12);
// expect(l.getAt(2).data).toEqual(13);
// expect(l.getAt(3).data).toEqual(14);
// });

// test('for...of works on an empty list', () => {
// const l = new List();
// expect(() => {
// for (let node of l) {
// }
// }).not.toThrow();
// });
// });
