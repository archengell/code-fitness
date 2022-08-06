import { SLL_Node, DLL_Node } from './a_linkedListNodeClasses'

/**
 * @name getCycleInSinglyLinkedList_On_Space  hard/easy - AE/Neet 
 * @access leet: https://leetcode.com/problems/linked-list-cycle/
 * @description
 * @example
 * @param head 
 * @returns
 * @summary used two pointer method: Floyd's Cycle Finding Algorithm
 * o(n) time / o(1) space
 */
 export function getCycleInSinglyLinkedList_o1_space(head: SLL_Node) {
  
  // set up start for each pointer
  let oneStep: SLL_Node | null = this.head;
  let twoStep: SLL_Node | null = this.head;
  

  //traverse linked list
  while(twoStep &&  twoStep.next){
    oneStep = oneStep.next;
    twoStep = twoStep.next.next;
    if(oneStep === twoStep){
      oneStep = this.head;
      while(oneStep !== twoStep){
        oneStep = oneStep.next;
        twoStep = twoStep.next;
      }
      // hasCycle?: oneStep <--> true
      return oneStep
    }
  }
  // hasCycle?: null <--> false
  return null
}

 /** 
 * o(n) time -> worst-case (no loop) traverse all nodes
 * o(n) space -> worst-case (no loop) = store all nodes 
 */
export function getCycleInSinglyLinkedList_On_Space(head: SLL_Node) {

  // need to define the start point
  
  let node: SLL_Node | null = this.head;
  let set = new Set<SLL_Node>();

  while(node){
    
    // hasCycle?: node <--> true
    if(set.has(node)) return node
    
    set.add(node)
    node = node.next
  }
  // hasCycle?: null <--> false
  return null 
}