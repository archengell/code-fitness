export class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  /**
   * @name
   * @description
   * @example
   * @param linkedList 
   * @returns 
   * @summmary o(n) time | o(1) space
   */
  export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
    let current: LinkedList | null = linkedList;
    while(current.next){
      if(current.value === current.next.value){ // look at next element since its sorted...
        current.next = current.next.next // point to next node...
      }else{
        current = current.next;
      }
    }
    return linkedList;
  }


/**
 * 
 * @param linkedList 
 * @returns 
 * @summary o(n) time & space **if list wasn't sorted 
 */
export function removeDuplicatesFromLinkedList_v2(linkedList: LinkedList) {
    let current: LinkedList | null = linkedList;
    let cache = new Set<number>();
    while(current.next){
      cache.add(current.value)
      if(cache.has(current.next.value)) {
        current.next = current.next.next
      }else{
        current = current.next;
      }
    }
    return linkedList;
  }
