"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeLinkedLists_Iteratively = exports.mergeLinkedLists_Recursively = void 0;
/**
 * @name LC_21_mergeLinkedLists_Recursively medium => algoExpert(hard) / LC#21(easy)
 * @access https://leetcode.com/problems/merge-two-sorted-lists
 * @param headOne
 * @param headTwo
 * @returns {LinkedList}
 * @summary
 * time -> o(m+n)
 * space-> o(m+n): due to recursive call-stack
 */
function mergeLinkedLists_Recursively(headOne, headTwo) {
    let head = null;
    // base-case
    if (!headOne)
        return headTwo;
    if (!headTwo)
        return headOne;
    // recursive-case
    // head1 vs head2 comparison
    if (headOne.value < headTwo.value) {
        head = headOne;
        headOne = headOne.next;
    }
    else {
        head = headTwo;
        headTwo = headTwo.next;
    }
    head.next = mergeLinkedLists_Recursively(headOne, headTwo);
    return head;
}
exports.mergeLinkedLists_Recursively = mergeLinkedLists_Recursively;
/**
* @summary
* time -> o(m+n)
* space-> o(1): due just using head/tail pointers
*/
function mergeLinkedLists_Iteratively(headOne, headTwo) {
    // set up precursor node to begin... 
    let head = null;
    let tail = head;
    // loop until the end of one of the two lists
    while (headOne !== null && headTwo !== null) {
        // compare heads of each list
        // point tail.next to min(headOne, headTwo)
        // point head to next node of affected list
        if (headOne.value < headTwo.value) {
            tail.next = headOne;
            headOne = headOne.next;
        }
        else {
            tail.next = headTwo;
            headTwo = headTwo.next;
        }
        // point to the next tail
        tail = tail.next;
    }
    // loop ends when one of the lists is empty ( points to null)
    // point tail to list with remaining nodes
    tail.next = (!headOne) ? headTwo : headOne;
    // head is the precursor (dummy) node, so head.next
    // is the start of the merged list
    return head.next;
}
exports.mergeLinkedLists_Iteratively = mergeLinkedLists_Iteratively;
