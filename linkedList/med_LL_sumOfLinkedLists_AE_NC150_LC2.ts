import * as utils from '../utils'
import * as LinkedList from './a_linkedListNodeClasses'
import { SinglyLinkedList } from './med_LL_singlyLinkedListConst_Gen'
import * as util from 'util'

/**
 * @name sumOfLinkedLists - medium - linked lists - algoExpert / NC150 / *LC2. Add Two Numbers
 * @description You're given two Linked Lists of potentially unequal lengths. 
 * Each linked list represents a non-negative integer, where each node in the 
 * linked list is a digit of that integer, and the first node in each linked 
 * list always represents the least significant digit of the integer.  
 * 
 * Write a function that returns the head of a new Linked List that represents
 * the sum of the integers represented by the two input linked lists.
 * @example 
 * Inputs: linkedListOne = 2->4->7->1 (1742), linkedListTwo = 9->4->5 (549)
 * Output: res = 1->9->2->2 (1742+549=2291)
 * @param linkedListOne 
 * @param linkedListTwo 
 * @returns 
 * @summary
 * optimal sln: o(n) time | o(1) space
 * 1. 
 */
 export function sumOfLinkedLists(linkedListOne: LinkedList.SLL_Node, 
    linkedListTwo: LinkedList.SLL_Node): LinkedList.SLL_Node {

        // establish a precursor - dummy node
        let precursor: LinkedList.SLL_Node = new LinkedList.SLL_Node(0);
        let head: LinkedList.SLL_Node = precursor;

        let node1: LinkedList.SLL_Node | null = linkedListOne['head'];
        let node2: LinkedList.SLL_Node | null = linkedListTwo['head'];
        
        let carryOver: number = 0;
        let storage: number[] = [];

        while(node1 !== null || node2 !== null || carryOver !== 0){
            let num1: number = node1?.value || 0;
            let num2: number = node2?.value || 0;
            let subSum: number = num1 + num2 + carryOver;
            
            let subSumDigit: number = subSum % 10;
            carryOver = Math.floor(subSum / 10);
            head.next = new LinkedList.SLL_Node(subSumDigit);
            head = head.next;
            // here to test results
            storage.push(head.value)

            
            node1 = node1?.next || null;
            node2 = node2?.next || null;
        }
        // util.inspect() -> interesting method, but n/a here...
        console.log(storage)
        return precursor.next;
    }
  
/** 
 * o(n+m) time + space steps:
 * 1. parse SLLs -> numbers
 * 2. calculate sum 
 * 3. parse sum -> number[]
 * 4. parse number[] -> SLL + return head
 */

// o(n+m) time + space -> brute force + a lot of work to build up
export function sumOfLinkedLists_Onplusm(linkedListOne: LinkedList.SLL_Node, 
    linkedListTwo: LinkedList.SLL_Node): LinkedList.SLL_Node {

        // o(n) time + space
        let _getNumberFromLinkedList = (node: LinkedList.SLL_Node | null, arr: number[] = []): number => {

            while(node !== null){
                arr.push(node.value);
                node = node.next;   
            }
            arr.reverse()
            return parseInt(arr.join(''))
        }


        let int1: number = _getNumberFromLinkedList(linkedListOne['head']);
        let int2: number = _getNumberFromLinkedList(linkedListTwo['head']);
        let sum: number = int1 + int2

        // O(n) time + space
        let sumArr: number[] = String(sum).split('').map((num: string) => {return Number(num)})
        

        let res: SinglyLinkedList = new SinglyLinkedList(sumArr)
        
    return res['head'];
  }


let sumOfLinkedList1: any = {
    'l1': [2, 4, 7, 1],
    'l2': [9, 4, 5]
}
let sumOfLinkedList2 = {
    'l1': [2,4,9],
    'l2': [5,6,4,9]
} // 10407 [7,0,4,0,1]

let {l1, l2} = sumOfLinkedList2;

// figure out typing!! 
let ll1: any = new SinglyLinkedList(l1)
let ll2: any = new SinglyLinkedList(l2)

utils.timed('res', sumOfLinkedLists, [ll1, ll2])