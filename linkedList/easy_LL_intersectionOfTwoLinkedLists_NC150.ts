import * as utils from '../utils'
import * as LinkedList from './a_linkedListNodeClasses'
import { SinglyLinkedList } from './med_LL_singlyLinkedListConst_Gen'

function getIntersectionNode(headA: LinkedList.SLL_Node | null, 
    headB: LinkedList.SLL_Node | null): LinkedList.SLL_Node | null {

        while(headA && headB && headA.value !== headB.value){
            headA = headA.next;
            headB = headB.next;
        }

        return headA || null
};

type linkedListIntersect =  {
    [key: string]: number[],
}

let intersect1: linkedListIntersect = {
    listA: [4,1,8,4,5],
    listB: [5,6,1,8,4,5]
}   

let { listA, listB } = intersect1;

let LL_A = new SinglyLinkedList(listA);
let LL_B = new SinglyLinkedList(listA);

utils.timed('res', getIntersectionNode, [LL_A, LL_B])
