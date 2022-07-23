// This is an input class. Do not edit.
class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
}
  
function removeKthNodeFromEnd(head: LinkedList, k: number) {
    // Write your code here.
    return head;
}