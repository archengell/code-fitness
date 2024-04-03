"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor(input) {
        this.input = input;
        this.input = input || new Array();
    }
    add(elem) {
        this.input.push(elem);
        // console.log(`added ${elem} ==> ${this.input}`)
    }
    remove() {
        // console.log(`removing ${this.input[this.input.length-1]}`)
        return this.input.pop();
        // console.log(`arr is now ${this.input}`)
    }
    length() {
        return this.input.length;
    }
}
exports.Stack = Stack;
let res = new Stack();
// res.add(5)
// res.add(14)
// res.remove()
