import * as utils from '../utils'
import * as LinkedList from './a_linkedListNodeClasses'
import {SinglyLinkedList} from './med_LL_singlyLinkedListConst_Gen'


/**
 * @name
 * @description
 * @example
 * @access
 * @param head 
 * @param k 
 * @returns 
 * @summary
 * o(n) time & space
 */
function swapNodes(head: LinkedList.SLL_Node | null, k: number): SinglyLinkedList | null {

    let res: SinglyLinkedList | null = null;

    //create array from LL
    let trans: number[] = [];
    
    while(head){
        trans.push(head.value);
        head = head.next;
    }

    // swap nodes in array
    utils.swap<number>(k-1, trans.length - (k-1), trans);

    res = new SinglyLinkedList(trans)  

    return res
};

type swapNode = { [key: string] : number | number[]}
let swapNodes1: swapNode = {
    'head': [1,2,3,4,5],
    'k': 2
} // [1, 4, 3, 2, 5]
let swapNodes2: swapNode = {
    'head': [7,9,6,6,7,8,3,0,9,5],
    'k': 5
}

let {head, k} = swapNodes1;

utils.timed('res', swapNodes, [head, k])
