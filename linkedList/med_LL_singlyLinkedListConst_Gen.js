"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglyLinkedList = void 0;
const LinkedList = require("./a_linkedListNodeClasses");
class SinglyLinkedList {
    constructor(arr) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        // setTail -> simm. to arr.map((item: number) => newArr.push(node))
        // setHead -> simm. to arr.map((item: number) => newArr.unshift(node))
        arr.map((item) => this.setTail(new LinkedList.SLL_Node(item)));
    }
    // o(1) time + space
    setHead(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            ++this.length;
        }
        this.insertBerfore(this.head, node);
    }
    setTail(node) {
        if (this.tail === null) {
            this.setHead(node);
        }
        this.insertAfter(this.tail, node);
    }
    // o(1) time + space
    insertBerfore(node, nodeToInsert) {
        // !! prevent infinite loop !!
        if (nodeToInsert === this.head && nodeToInsert === this.tail)
            return;
        if (node === this.head) {
            this.head = nodeToInsert;
            nodeToInsert.next = node;
        }
        ++this.length;
    }
    // o(1) time + space
    insertAfter(node, nodeToInsert) {
        // !! prevent infinite loop !!
        if (nodeToInsert === this.head && nodeToInsert === this.tail)
            return;
        if (node.next === null) {
            this.tail = nodeToInsert;
        }
        nodeToInsert.next = node.next;
        node.next = nodeToInsert;
        ++this.length;
    }
    listLength() {
        return this.length;
    }
    // o(n) time + o(1) space
    reverseListIteratively() {
        let curr = this.head;
        let prev = null;
        while (curr !== null) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            // console.log(`value: ${prev.value} next: ${prev.next}`)
            curr = temp;
        }
        return prev;
    }
    /**
     * @access https://www.youtube.com/watch?v=S92RuTtt9EE
     * @param node
     * @returns
     * @summary 0(n) time + space
     */
    reverseListRecursively(node = this.head) {
        // base case  
        if (node === null || node.next === null)
            return node;
        let temp = this.reverseListRecursively(node.next);
        // console.log(`value: ${temp.value} next: ${temp.next}`)
        node.next.next = node;
        node.next = null;
        return temp;
    }
    find(node) {
        if (this.length === 0)
            console.log('list is empty');
        let curr = this.head;
        while (curr && curr.next) {
            if (curr.next.value === node.value)
                return node;
        }
        return node;
    }
    // o(n) time | o(1) space
    remove_linear(node) {
        let curr = this.head;
        while (curr && curr.next) {
            if (curr.next === node) {
                curr.next = curr.next.next;
                return node;
            }
            curr = curr.next;
        }
    }
    // o(1) time + space
    remove_constant(node) {
        if (node !== null) {
            node.value = node.next.value;
            node.next = node.next.next;
        }
    }
    // public removeNodesWithValue(value: number): void {
    //   return 
    // }
    traverse() {
        let curr = this.head;
        while (curr !== null) {
            console.log(`value: ${curr.value} next: ${curr.next}`);
            curr = curr.next;
        }
    }
    // o(n) time + o(1) space
    insertAtPosition(position, nodeToInsert) {
        let curr = this.head;
        let idx = 0;
        if (position === 0)
            this.setHead(nodeToInsert);
        if (position === this.length)
            this.setTail(nodeToInsert);
        while (curr !== null) {
            if (position === idx - 1) {
                nodeToInsert.next = curr.next.next;
                curr.next = nodeToInsert;
                return;
            }
            curr = curr.next;
            ++idx;
        }
    }
    // o(n) time + o(1) space
    containsNodeWithValue(value) {
        let curr = this.head;
        while (curr) {
            if (curr.value === value)
                return true;
        }
        return false;
    }
}
exports.SinglyLinkedList = SinglyLinkedList;
let linkedListArr = [5, 4, 3, 2, 1, 4];
let linkedList = new SinglyLinkedList(linkedListArr);
// console.log(linkedList.length)
// linkedList.traverse()
linkedList.reverseListRecursively();
// linkedList.reverseListIteratively()
