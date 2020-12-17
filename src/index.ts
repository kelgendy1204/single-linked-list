export class SingleLinkedListNode {
    public value: any;
    public next: SingleLinkedListNode | undefined;

    constructor(value: any) {
        this.value = value;
        this.next = undefined;
    }
}

export class SingleLinkedList {
    public head: SingleLinkedListNode | undefined;
    public tail: SingleLinkedListNode | undefined;
    public length: number;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    push(value: any): SingleLinkedList {
        const newNode = new SingleLinkedListNode(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            (this.tail as SingleLinkedListNode).next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop(): SingleLinkedListNode | undefined {
        if (this.length) {
            const lastNode = this.tail;
            const previousNode = this.get(this.length - 2);
            this.tail = previousNode;

            if (this.length === 1) {
                this.head = previousNode;
            }

            this.length--;
            return lastNode;
        } else {
            return undefined;
        }
    }

    shift(): SingleLinkedListNode | undefined {
        if (!this.head) {
            return undefined;
        }

        const currentHead = this.head;
        this.head = this.head.next;

        this.length--;
        return currentHead;
    }

    unshift(value: any): SingleLinkedList | undefined {
        const newNode = new SingleLinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    get(index: number): SingleLinkedListNode | undefined {
        let counter = 0;
        let node = this.head;

        if (index < 0 || index > this.length - 1) {
            return undefined;
        }

        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
    }

    set(value: any, index: number): boolean {
        const currentNode = this.get(index);

        if (currentNode) {
            currentNode.value = value;
            return true;
        }

        return false;
    }

    insert(value: any, index: number): boolean {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === this.length) {
            return !!this.push(value);
        }

        if (index === 0) {
            return !!this.unshift(value);
        }

        const oldNode = this.get(index - 1);
        const newNode = new SingleLinkedListNode(value);

        newNode.next = (oldNode as SingleLinkedListNode).next;
        (oldNode as SingleLinkedListNode).next = newNode;

        this.length++;

        return true;
    }

    // TODO: test this
    toArray(): any[] {
        const array: any[] = [];

        let node = this.head;

        while (node) {
            array.push(node.value);
            node = node.next;
        }

        return array;
    }

    remove(index: number): SingleLinkedListNode | undefined {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const previousNode = this.get(index - 1);
        const removedNode = (previousNode as SingleLinkedListNode).next;
        (previousNode as SingleLinkedListNode).next = (removedNode as SingleLinkedListNode).next;
        this.length--;

        return removedNode;
    }

    clear(): void {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    reverse(): SingleLinkedList {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let nextNode;
        let prevNode = undefined;

        for (let i = 0; i < this.length; i++) {
            nextNode = (node as SingleLinkedListNode).next;
            (node as SingleLinkedListNode).next = prevNode;
            prevNode = node;
            node = nextNode;
        }

        return this;
    }
}
