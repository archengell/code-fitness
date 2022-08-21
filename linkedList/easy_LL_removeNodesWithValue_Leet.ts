import * as utils from '../utils';
import * as LinkedList from './a_linkedListNodeClasses';
import { SinglyLinkedList } from './med_LL_singlyLinkedListConst_Gen';

/**
 * @name LC_203_Easy_Remove_Linked_List_Elements
 * @acces https://leetcode.com/problems/remove-linked-list-elements/
 * @param head 
 * @param val 
 * @returns {LinkedList.SLL_Node}
 * @summary o(n) time | o(1) space
 */
function removeElements(head: LinkedList.SLL_Node | null, 
    val: number): LinkedList.SLL_Node | null {
    
    let temp: LinkedList.SLL_Node = head
    
    
    while(temp){
        if(temp.next && temp.next.value === val){
            temp.next = temp.next.next
        }else{
            temp = temp.next
        }
    }
    // edge case if the head === value for removal of node
    return (head && head.value === val) ? head.next : head;
};

type removeElements = {
    "head": number[],
    "value": number
}

const removeElements1: removeElements  = {
    'head': [1,2,6,3,4,5,6],
    'value': 6
} // [1,2,3,4,5]
const removeElements2: removeElements = {
    'head' : [],
    'value': 1
} // []
const removeElements3: removeElements = {
    'head': [7,7,7,7,7],
    'value': 7  
} // []

let { head, value } = removeElements1;

let LL: SinglyLinkedList = new SinglyLinkedList(head)

utils.timed<LinkedList.SLL_Node|number>('res', removeElements, [LL.head, value])