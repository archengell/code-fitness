"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils = require("../utils");
const LinkedList = require("./a_linkedListNodeClasses");
const med_LL_singlyLinkedListConst_Gen_1 = require("./med_LL_singlyLinkedListConst_Gen");
/**
 * @name SwappingNodeValuesInALinkedList - medium - leetcode #1721
 * @description Given the head of a linkedlist and an integer of k, return the
 * head of the linked list after swapping the VALUES of the kth node from the
 * beginning and the kth node from the end.  (the list is 1-indexed)
 * @example INPUT: head = [1,2,3,4,5], k = 2  OUTPUT = [1,4,3,2,5]
 * @access https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
 * @param node
 * @param k
 * @returns
 * @summary o(n) time & o(1) space
 */
function swapNodeValues_O1_space(node, k) {
    let listLength = 0;
    let startNode = null;
    let endNode = null;
    let current = node['head'];
    while (current) {
        ++listLength;
        // this needs to go before listlength === k to get correct positioning
        if (endNode) {
            endNode = endNode.next;
        }
        if (listLength === k) {
            startNode = current;
            // set endNode to set back from the end k values
            endNode = node['head'];
        }
        current = current.next;
    }
    let temp = startNode.value;
    startNode.value = endNode.value;
    endNode.value = temp;
    return node['head'];
}
/**
 *
 * @param node
 * @param k
 * @returns
 * @summary O(n) time & space
 */
function swapNodeValues_On_space(node, k) {
    let res = null;
    // 1. create array from LL
    let storage = [];
    let head = node['head'];
    while (head) {
        storage.push(head.value);
        head = head.next;
    }
    // 2. swap nodes in array
    const _swap = (left, right, arr) => {
        let temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;
    };
    // 3. convert back to LL
    const _arrToSinglyLinkedList = (arr) => {
        let precursor = new LinkedList.SLL_Node(0);
        let curr = precursor;
        storage.map((item) => {
            curr.next = new LinkedList.SLL_Node(item);
            curr = curr.next;
        });
        return precursor.next;
    };
    _swap(k - 1, storage.length - k, storage);
    res = _arrToSinglyLinkedList(storage);
    return res;
}
;
let swapNodes1 = {
    'head': [1, 2, 3, 4, 5],
    'k': 2
}; // [1, 4, 3, 2, 5]
let swapNodes2 = {
    'head': [7, 9, 6, 6, 7, 8, 3, 0, 9, 5],
    'k': 5
};
let { head, k } = swapNodes1;
let head_LL = new med_LL_singlyLinkedListConst_Gen_1.SinglyLinkedList(head);
utils.timed('res', swapNodeValues_O1_space, [head_LL, k]);
