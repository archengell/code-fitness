import * as utils from '../utils'
import * as LinkedList from './a_linkedListNodeClasses'

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
export function mergeLinkedLists_Recursively(headOne: LinkedList.SLL_Node | null, 
    headTwo: LinkedList.SLL_Node | null): LinkedList.SLL_Node {
        
        let head: LinkedList.SLL_Node = null;        
        // base-case
        if(!headOne) return headTwo;
        if(!headTwo) return headOne;
        // recursive-case
        // head1 vs head2 comparison
        if(headOne!.value < headTwo.value){
            head = headOne;
            headOne = headOne.next;
        }else{
            head = headTwo;
            headTwo = headTwo.next;
        } 

        head.next = mergeLinkedLists_Recursively(headOne, headTwo);
        return head;
}


/**
* @summary 
* time -> o(m+n)
* space-> o(1): due just using head/tail pointers
*/
export function mergeLinkedLists_Iteratively(headOne: LinkedList.SLL_Node | null, 
   headTwo: LinkedList.SLL_Node | null): LinkedList.SLL_Node {

    // set up precursor node to begin... 
    let head: LinkedList.SLL_Node = null;
    let tail: LinkedList.SLL_Node = head;
    // loop until the end of one of the two lists
    while(headOne !== null && headTwo !== null){
        // compare heads of each list
        // point tail.next to min(headOne, headTwo)
        // point head to next node of affected list
        if(headOne.value < headTwo.value){
            tail.next = headOne;
            headOne = headOne!.next;
        }else{
            tail.next = headTwo
            headTwo = headTwo!.next;
        }
        // point to the next tail
        tail = tail.next
    }
    // loop ends when one of the lists is empty ( points to null)
    // point tail to list with remaining nodes
    tail.next = (!headOne) ? headTwo : headOne;
    // head is the precursor (dummy) node, so head.next
    // is the start of the merged list
    return head.next 
}
