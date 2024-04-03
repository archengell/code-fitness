"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
/**
 * @description
 * @param
 * @raises
 */
class Queue {
    constructor(input) {
        this.input = input;
        this.input = input || new Array();
    }
    add(elem) {
        this.input.push(elem);
        // console.log(`added ${elem} ==> ${this.input}`)
    }
    remove() {
        // console.log(`removing ${this.input[0]}`)
        return this.input.shift();
        // console.log(`arr is now ${this.input}`)
    }
    length() {
        return this.input.length;
    }
}
exports.Queue = Queue;
// let res = new Queue<number>([1, 2, 3, 4]);
// res.add(6)
// res.add(7)
// res.remove()
// res.add(8)
