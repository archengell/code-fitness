import * as utils from '../utils'
import * as LinkedList from './a_linkedListNodeClasses'
import { SinglyLinkedList } from './med_LL_singlyLinkedListConst_Gen'


/**
 * @name removeKthNodeFromEnd - medium - lc19
 * @access https://leetcode.com/problems/remove-nth-node-from-end-of-list
 * @description 
 * @param head 
 * @param k 
 * @returns 
 * @summary o(n) time + o(1) space
 */
 function removeKthNodeFromEnd(node: LinkedList.SLL_Node, k: number): LinkedList.SLL_Node | null {
  
  let listLength: number = 0;
  // let startNode: LinkedList.SLL_Node | null = null;
  let nodeBeforeTarget: LinkedList.SLL_Node | null = null;
  let currentNode: LinkedList.SLL_Node = node['head']

  while(currentNode){
    // keep count
    ++listLength;

    // traverse endnote
    if(nodeBeforeTarget){
      nodeBeforeTarget = nodeBeforeTarget.next;
    }

    // get node preceding target 
    if(listLength === k+1){
      nodeBeforeTarget = node['head']
    }

    // keeping traversing list
    currentNode = currentNode.next
  }
  
  /**
   * edge cases when:
   * 1. listLength === k 
   * 2. listLength <= 1
   */
  if(listLength === k){
    if(k === 1) return null
    node['head'].value = node['head'].next.value;
    node['head'].next = node['head'].next.next;
    return node['head']
  } else  {
    nodeBeforeTarget.next = nodeBeforeTarget.next!.next || null
  }

  console.log(JSON.stringify(node['head']))

  return node['head']
}


function removeKthNodeFromEnd_2(head: LinkedList.SLL_Node, k: number) {
  
  let node: LinkedList.SLL_Node | null = head;
  let size: number = 0;

  // get size/length of linked list
  while(node !== null){ 
    node = node.next!
    size++;
  } 

  // set target to find node before kth position
  let target: number = size - (k + 1);
  let newNode: LinkedList.SLL_Node | null = head;
  
  while(newNode && newNode.next){

    // first & last position edge case
    if(k === size){
      newNode.value = newNode.next.value;
      newNode.next = newNode.next.next;
      return newNode;
    }

    // find node before kth (target), and remove kth(target) node
    if(target === 0){
      newNode.next = newNode.next!.next;
      return newNode;
    }
    newNode = newNode.next;
    target--;
  }
}


const removeKthNodeFromEnd1 = {
  'head': [1,2,3,4,5],
  'k': 2
} // [1,2,3,5]
const removeKthNodeFromEnd2 = {
  'head': [1],
  'k': 1
} // []
const removeKthNodeFromEnd3 = {
  'head': [1,2],
  'k': 1
} // [1]
const removeKthNodeFromEnd4 = {
  'head': [1,2],
  'k': 2
} // [2]

let {head, k} = removeKthNodeFromEnd2;

let head_LL: SinglyLinkedList = new SinglyLinkedList(head)

utils.timed('res', removeKthNodeFromEnd, [head_LL, k])