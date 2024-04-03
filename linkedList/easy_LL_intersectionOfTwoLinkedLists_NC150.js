"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils = require("../utils");
const med_LL_singlyLinkedListConst_Gen_1 = require("./med_LL_singlyLinkedListConst_Gen");
/**
 * @name getIntersectionNode - easy/medium - linked list - LC160
 * @access https://leetcode.com/problems/intersection-of-two-linked-lists
 * @description Given the heads of two singly linked lists headA & headB, return
 * the node at which the two lists intersect.  If the two linked lists have
 * intersection at all, return null.
 * @example
 * headA =      4 -> 1 -> 8 -> 4 -> 5
 *                    \
 *                      intersection occurs at node: 1, node.next: 8*
 *                    /
 * headB = 5 -> 6 -> 1 -> 8 -> 4 -> 5
 * @param headA SLL_Node
 * @param headB SLL_Node
 * @returns {LinkedList.SLL_Node}
 * @summary time: o(m + n) | space: o(n)
 */
function getIntersectionNode_OnSpace(headA, headB) {
    let visited = new Set();
    let hA = headA['head'];
    let hB = headB['head'];
    while (hB !== null) {
        visited.add(JSON.stringify(hB));
        hB = hB.next;
    }
    while (hA !== null) {
        if (visited.has(JSON.stringify(hA))) {
            return hA;
        }
        hA = hA.next;
    }
    return null;
}
;
function getIntersectionNode_O1Space(headA, headB) {
    // start of each LL
    let hA = headA['head'];
    let hB = headB['head'];
    //pointers
    let pA = headA['head'];
    let pB = headB['head'];
    while (JSON.stringify(pA) !== JSON.stringify(pB)) {
        pA = pA === null ? hB : pA.next;
        pB = pB === null ? hA : pB.next;
    }
    return pA;
}
let intersect1 = {
    listA: [4, 1, 8, 4, 5],
    listB: [5, 6, 1, 8, 4, 5]
};
let { listA, listB } = intersect1;
let LL_A = new med_LL_singlyLinkedListConst_Gen_1.SinglyLinkedList(listA);
let LL_B = new med_LL_singlyLinkedListConst_Gen_1.SinglyLinkedList(listB);
utils.timed('res', getIntersectionNode_O1Space, [LL_A, LL_B]);
