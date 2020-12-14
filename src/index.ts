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
}
