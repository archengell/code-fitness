"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils = require("../utils");
const med_LL_singlyLinkedListConst_Gen_1 = require("./med_LL_singlyLinkedListConst_Gen");
/**
 * @name LC_203_Easy_Remove_Linked_List_Elements
 * @acces https://leetcode.com/problems/remove-linked-list-elements/
 * @param head
 * @param val
 * @returns {LinkedList.SLL_Node}
 * @summary o(n) time | o(1) space
 */
function removeElements(head, val) {
    let temp = head;
    while (temp) {
        if (temp.next && temp.next.value === val) {
            temp.next = temp.next.next;
        }
        else {
            temp = temp.next;
        }
    }
    // edge case if the head === value for removal of node
    return (head && head.value === val) ? head.next : head;
}
;
const removeElements1 = {
    'head': [1, 2, 6, 3, 4, 5, 6],
    'value': 6
}; // [1,2,3,4,5]
const removeElements2 = {
    'head': [],
    'value': 1
}; // []
const removeElements3 = {
    'head': [7, 7, 7, 7, 7],
    'value': 7
}; // []
let { head, value } = removeElements1;
let LL = new med_LL_singlyLinkedListConst_Gen_1.SinglyLinkedList(head);
utils.timed('res', removeElements, [LL.head, value]);
