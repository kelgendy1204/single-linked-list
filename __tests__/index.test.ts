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
    test('Returns the node at given index, undefined for not found indices', () => {
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
    test('Removes the first node when the list is empty', () => {
        const singleLinkedList = new SingleLinkedList();
        const removedNode = singleLinkedList.shift();
        expect(removedNode).toBeUndefined();
        expect(singleLinkedList.length).toBe(0);
    });

    test('Removes the first node when the list has a size of one', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.push(1);
        singleLinkedList.shift();
        expect(singleLinkedList.length).toEqual(0);
        expect(singleLinkedList.get(0)).toBeUndefined();
    });

    test('Removes the first node when the list has a size of three', () => {
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

describe('Unshift method', () => {
    test('Appends a node to the start of the list', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.unshift(1);
        expect(singleLinkedList.head?.value).toEqual(1);
        expect(singleLinkedList.tail?.value).toEqual(1);
        singleLinkedList.unshift(2);
        expect(singleLinkedList.head?.value).toEqual(2);
        expect(singleLinkedList.tail?.value).toEqual(1);
    });
});

describe('Set method', () => {
    test('Set node value change correctly', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.push(1);
        singleLinkedList.push(2);
        singleLinkedList.push(3);
        singleLinkedList.push(4);

        singleLinkedList.set(10, 0);

        expect(singleLinkedList.set(15, 4)).toBeFalsy();
        expect(singleLinkedList.head?.value).toBe(10);
    });
});

describe('Insert method', () => {
    test('inserts a new node in the wrong index return false', () => {
        const singleLinkedList = new SingleLinkedList();
        expect(singleLinkedList.insert('hi', -1)).toBeFalsy();
        expect(singleLinkedList.insert('hi', 1)).toBeFalsy();
    });

    test('inserts a new node with data at the 0 index when the list is empty', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.insert('hi', 0);
        expect(singleLinkedList.head?.value).toEqual('hi');
    });

    test('inserts a new node with data at the 0 index when the list has elements', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.push('a');
        singleLinkedList.push('b');
        singleLinkedList.push('c');
        singleLinkedList.insert('hi', 0);

        expect(singleLinkedList.get(0)?.value).toEqual('hi');
        expect(singleLinkedList.get(1)?.value).toEqual('a');
        expect(singleLinkedList.get(2)?.value).toEqual('b');
        expect(singleLinkedList.get(3)?.value).toEqual('c');
    });

    test('inserts a new node with data at a middle index', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.push('a');
        singleLinkedList.push('b');
        singleLinkedList.push('c');
        singleLinkedList.push('d');
        singleLinkedList.insert('hi', 2);

        expect(singleLinkedList.get(0)?.value).toEqual('a');
        expect(singleLinkedList.get(1)?.value).toEqual('b');
        expect(singleLinkedList.get(2)?.value).toEqual('hi');
        expect(singleLinkedList.get(3)?.value).toEqual('c');
        expect(singleLinkedList.get(4)?.value).toEqual('d');
    });

    test('inserts a new node with data at a last index', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.push('a');
        singleLinkedList.push('b');
        singleLinkedList.insert('hi', 2);

        expect(singleLinkedList.get(0)?.value).toEqual('a');
        expect(singleLinkedList.get(1)?.value).toEqual('b');
        expect(singleLinkedList.get(2)?.value).toEqual('hi');
    });
});

describe('toArray method', () => {
    test('convert linkedlist to array', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.push('a');
        singleLinkedList.push('b');
        singleLinkedList.push('c');
        singleLinkedList.push('d');

        expect(singleLinkedList.toArray()).toStrictEqual(['a', 'b', 'c', 'd']);
    });
});

describe('Clear method', () => {
    test('empties out the list', () => {
        const singleLinkedList = new SingleLinkedList();
        expect(singleLinkedList.length).toEqual(0);
        singleLinkedList.unshift(1);
        singleLinkedList.unshift(1);
        singleLinkedList.unshift(1);
        singleLinkedList.unshift(1);

        expect(singleLinkedList.length).toEqual(4);
        expect(singleLinkedList.head?.value).toEqual(1);
        expect(singleLinkedList.tail?.value).toEqual(1);

        singleLinkedList.clear();
        expect(singleLinkedList.length).toEqual(0);
        expect(singleLinkedList.head).toBeUndefined();
        expect(singleLinkedList.tail).toBeUndefined();
        expect(singleLinkedList.toArray()).toStrictEqual([]);
    });
});

describe('Remove method', () => {
    test('remove doesnt crash on an empty list', () => {
        const singleLinkedList = new SingleLinkedList();
        expect(() => {
            singleLinkedList.remove(-1);
            singleLinkedList.remove(0);
            singleLinkedList.remove(1);
            singleLinkedList.remove(2);
        }).not.toThrow();
    });

    test('remove doesnt crash on an index out of bounds', () => {
        const singleLinkedList = new SingleLinkedList();
        expect(() => {
            singleLinkedList.unshift('a');
            singleLinkedList.remove(1);
        }).not.toThrow();
    });

    test('remove deletes the first node', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.push(1);
        singleLinkedList.push(2);
        singleLinkedList.push(3);
        singleLinkedList.push(4);
        expect(singleLinkedList.get(0)?.value).toEqual(1);
        singleLinkedList.remove(0);
        expect(singleLinkedList.get(0)?.value).toEqual(2);
    });

    test('remove deletes the node at the given index', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.push(1);
        singleLinkedList.push(2);
        singleLinkedList.push(3);
        singleLinkedList.push(4);
        expect(singleLinkedList.get(1)?.value).toEqual(2);
        singleLinkedList.remove(1);
        expect(singleLinkedList.get(1)?.value).toEqual(3);
    });

    test('remove works on the last node', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.push(1);
        singleLinkedList.push(2);
        singleLinkedList.push(3);
        singleLinkedList.push(4);
        expect(singleLinkedList.get(3)?.value).toEqual(4);
        singleLinkedList.remove(3);
        expect(singleLinkedList.get(3)).toEqual(undefined);
    });
});

describe('Reverse method', () => {
    test('Reverse method works correctly', () => {
        const singleLinkedList = new SingleLinkedList();
        expect(singleLinkedList.length).toEqual(0);
        singleLinkedList.push(1);
        singleLinkedList.push(2);
        singleLinkedList.push(3);
        singleLinkedList.push(4);
        singleLinkedList.push(5);

        expect(singleLinkedList.toArray()).toStrictEqual([1, 2, 3, 4, 5]);
        singleLinkedList.reverse();
        expect(singleLinkedList.toArray()).toStrictEqual([5, 4, 3, 2, 1]);
    });
});

// describe.skip('InsertLast', () => {
// test('adds to the end of the list', () => {
// const l = new List();
// l.insertFirst('a');

// l.insertLast('b');

// expect(l.size()).toEqual(2);
// expect(l.getLast().data).toEqual('b');
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
