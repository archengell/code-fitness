import { cursorTo } from 'readline';
import { createSecureContext } from 'tls';
import * as utils from '../utils';
import * as LinkedList from './a_linkedListNodeClasses';

export class SinglyLinkedList {
    head: LinkedList.SLL_Node | null;
    tail: LinkedList.SLL_Node | null;
    length: number;
  
    constructor(arr: number[]) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      // setTail -> simm. to arr.map((item: number) => newArr.push(node))
      // setHead -> simm. to arr.map((item: number) => newArr.unshift(node))
      arr.map((item: number) => this.setTail(new LinkedList.SLL_Node(item)))
    }

    // o(1) time + space
    public setHead(node: LinkedList.SLL_Node): void {

      if(this.head === null) {
        this.head = node;
        this.tail = node;
        ++this.length;
      }
      this.insertBerfore(this.head, node);

    }

    public setTail(node: LinkedList.SLL_Node): void {

      if(this.tail === null){
        this.setHead(node);
      }
      this.insertAfter(this.tail, node);
    }

    // o(1) time + space
    insertBerfore(node: LinkedList.SLL_Node, nodeToInsert: LinkedList.SLL_Node): void {

      // !! prevent infinite loop !!
      if(nodeToInsert === this.head && nodeToInsert === this.tail) return; 

      if(node === this.head){
        this.head = nodeToInsert;
        nodeToInsert.next = node;
      }
      ++this.length;
    }

    // o(1) time + space
    insertAfter(node: LinkedList.SLL_Node, nodeToInsert: LinkedList.SLL_Node): void {
      
      // !! prevent infinite loop !!
      if(nodeToInsert === this.head && nodeToInsert === this.tail) return; 

      if(node.next === null){
        this.tail = nodeToInsert
      }
      nodeToInsert.next = node.next;
      node.next = nodeToInsert;
      ++this.length;

    }

    listLength(){
      return this.length;
    }
    
    // o(n) time + o(1) space
    reverseListIteratively(): LinkedList.SLL_Node | null {

      let curr: LinkedList.SLL_Node | null = this.head;
      let prev: LinkedList.SLL_Node | null = null;
   
      while(curr !== null){
        
        let temp: LinkedList.SLL_Node | null = curr.next;
        curr.next = prev;
        prev = curr;
        // console.log(`value: ${prev.value} next: ${prev.next}`)
        curr = temp;
        
      }

      return prev
    }

    /**
     * @access https://www.youtube.com/watch?v=S92RuTtt9EE
     * @param node 
     * @returns
     * @summary 0(n) time + space 
     */
    reverseListRecursively(node: LinkedList.SLL_Node | 
      null = this.head): LinkedList.SLL_Node | null {
      
      // base case  
      if(node === null || node.next === null) return node;
      
      let temp = this.reverseListRecursively(node.next);
      // console.log(`value: ${temp.value} next: ${temp.next}`)
      node.next.next = node;
      node.next = null;
      
      return temp
      
    }

    public find(node: LinkedList.SLL_Node): LinkedList.SLL_Node | null {

      if(this.length === 0) console.log('list is empty')

      let curr: LinkedList.SLL_Node | null = this.head;
      
      while(curr && curr.next){
        if(curr.next.value === node.value) return node
      }

      return node
    }


    // o(n) time | o(1) space
    public remove_linear(node: LinkedList.SLL_Node): LinkedList.SLL_Node | null {

      let curr: LinkedList.SLL_Node | null = this.head;

      while(curr && curr.next){
        if(curr.next === node){
          curr.next = curr.next.next
          return node
        }
        curr = curr.next;
      }
    }

    // o(1) time + space
    public remove_constant(node: LinkedList.SLL_Node): void {
      if(node !== null) {
        node.value = node.next.value;
        node.next = node.next.next;
      }
    }

    // public removeNodesWithValue(value: number): void {

    //   return 
    // }

    public traverse(): void {

      let curr: LinkedList.SLL_Node | null = this.head;

      while(curr !== null){
        console.log(`value: ${curr.value} next: ${curr.next}`)
        curr = curr.next
      }

    } 



    // o(n) time + o(1) space
    insertAtPosition(position: number, nodeToInsert: LinkedList.SLL_Node){

      let curr: LinkedList.SLL_Node | null = this.head;
      let idx: number = 0;

      if(position === 0) this.setHead(nodeToInsert);
      if(position === this.length) this.setTail(nodeToInsert);

      while(curr !== null){
        if(position === idx - 1){
          nodeToInsert.next = curr.next.next;
          curr.next = nodeToInsert;
          return;
        }
        curr = curr.next;
        ++idx;
      }
    }

    // o(n) time + o(1) space
    containsNodeWithValue(value: number): boolean {

      let curr: LinkedList.SLL_Node | null = this.head;

      while(curr) {
        if(curr.value === value) return true;
      }

      return false;
    }

}


let linkedListArr: number[] = [5, 4, 3, 2, 1, 4];

let linkedList = new SinglyLinkedList(linkedListArr);
// console.log(linkedList.length)
// linkedList.traverse()
linkedList.reverseListRecursively()
// linkedList.reverseListIteratively()