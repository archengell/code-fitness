"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicatesFromLinkedList_v2 = exports.removeDuplicatesFromLinkedList = exports.LinkedList = void 0;
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
exports.LinkedList = LinkedList;
/**
 * @name
 * @description
 * @example
 * @param linkedList
 * @returns
 * @summmary o(n) time | o(1) space
 */
function removeDuplicatesFromLinkedList(linkedList) {
    let current = linkedList;
    while (current.next) {
        if (current.value === current.next.value) { // look at next element since its sorted...
            current.next = current.next.next; // point to next node...
        }
        else {
            current = current.next;
        }
    }
    return linkedList;
}
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
/**
 *
 * @param linkedList
 * @returns
 * @summary o(n) time & space **if list wasn't sorted
 */
function removeDuplicatesFromLinkedList_v2(linkedList) {
    let current = linkedList;
    let cache = new Set();
    while (current.next) {
        cache.add(current.value);
        if (cache.has(current.next.value)) {
            current.next = current.next.next;
        }
        else {
            current = current.next;
        }
    }
    return linkedList;
}
exports.removeDuplicatesFromLinkedList_v2 = removeDuplicatesFromLinkedList_v2;
