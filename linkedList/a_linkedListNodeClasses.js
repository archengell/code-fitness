"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DLL_Node = exports.SLL_Node = void 0;
class SLL_Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
exports.SLL_Node = SLL_Node;
class DLL_Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
exports.DLL_Node = DLL_Node;
