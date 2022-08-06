export class SLL_Node {
    value: number;
    next: SLL_Node | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
export class DLL_Node {
  value: number;
  prev: DLL_Node | null;
  next: DLL_Node | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null     
  }
}

