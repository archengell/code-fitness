import * as utils from '../utils'
import * as LinkedList from './a_linkedListClasses'
import { SinglyLinkedList } from './med_LL_singlyLinkedListConst_Gen'

function removeKthNodeFromEnd(head: LinkedList.SLL_Node, k: number) {
  
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

