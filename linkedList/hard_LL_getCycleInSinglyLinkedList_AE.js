"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCycleInSinglyLinkedList_On_Space = exports.getCycleInSinglyLinkedList_o1_space = void 0;
/**
 * @name getCycleInSinglyLinkedList_On_Space  hard/easy - AE/Neet
 * @access leet: https://leetcode.com/problems/linked-list-cycle/
 * @description
 * @example
 * @param head
 * @returns
 * @summary used two pointer method: Floyd's Cycle Finding Algorithm
 * o(n) time / o(1) space
 */
function getCycleInSinglyLinkedList_o1_space(head) {
    // set up start for each pointer
    let oneStep = this.head;
    let twoStep = this.head;
    //traverse linked list
    while (twoStep && twoStep.next) {
        oneStep = oneStep.next;
        twoStep = twoStep.next.next;
        if (oneStep === twoStep) {
            oneStep = this.head;
            while (oneStep !== twoStep) {
                oneStep = oneStep.next;
                twoStep = twoStep.next;
            }
            // hasCycle?: oneStep <--> true
            return oneStep;
        }
    }
    // hasCycle?: null <--> false
    return null;
}
exports.getCycleInSinglyLinkedList_o1_space = getCycleInSinglyLinkedList_o1_space;
/**
* o(n) time -> worst-case (no loop) traverse all nodes
* o(n) space -> worst-case (no loop) = store all nodes
*/
function getCycleInSinglyLinkedList_On_Space(head) {
    // need to define the start point
    let node = this.head;
    let set = new Set();
    while (node) {
        // hasCycle?: node <--> true
        if (set.has(node))
            return node;
        set.add(node);
        node = node.next;
    }
    // hasCycle?: null <--> false
    return null;
}
exports.getCycleInSinglyLinkedList_On_Space = getCycleInSinglyLinkedList_On_Space;
