import * as utils from '../utils'
import * as LinkedList from './a_linkedListNodeClasses'
import { SinglyLinkedList } from './med_LL_singlyLinkedListConst_Gen'


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
function getIntersectionNode_OnSpace(headA: LinkedList.SLL_Node | null, 
    headB: LinkedList.SLL_Node | null): LinkedList.SLL_Node | null {

        let visited = new Set<string>();
        let hA: LinkedList.SLL_Node = headA['head']
        let hB: LinkedList.SLL_Node = headB['head']

        while(hB !== null){
            visited.add(JSON.stringify(hB));
            hB = hB.next;
        }

        while(hA !== null){
            if(visited.has(JSON.stringify(hA))){
                return hA
            }
            hA = hA.next;
        }
        return null;
};


function getIntersectionNode_O1Space(headA: LinkedList.SLL_Node | null, 
    headB: LinkedList.SLL_Node | null): LinkedList.SLL_Node | null {

        // start of each LL
        let hA: LinkedList.SLL_Node = headA['head'];
        let hB: LinkedList.SLL_Node = headB['head'];

        //pointers
        let pA: LinkedList.SLL_Node = headA['head'];
        let pB: LinkedList.SLL_Node = headB['head'];

        while(JSON.stringify(pA) !== JSON.stringify(pB)){
            
            pA = pA === null ? hB : pA.next;
            pB = pB === null ? hA : pB.next;
        }
        return pA
}

type linkedListIntersect =  {
    [key: string]: number[],
}

let intersect1: linkedListIntersect = {
    listA: [4,1,8,4,5],
    listB: [5,6,1,8,4,5]
}   

let { listA, listB } = intersect1;

let LL_A = new SinglyLinkedList(listA);
let LL_B = new SinglyLinkedList(listB);

utils.timed('res', getIntersectionNode_O1Space, [LL_A, LL_B])
