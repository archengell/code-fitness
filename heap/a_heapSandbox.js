"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinHeap = void 0;
const utils = require("../utils");
class PQElement {
    constructor(priority, value = null) {
        this.priority = priority;
        this.value = value;
        this.priority = priority;
        this.value = value !== null && value !== void 0 ? value : null;
    }
}
/**
 * @description
 * -- resource: https://stackabuse.com/heap-sort-in-javascript/
 */
// export class MaxHeap<T>{
//     public heap: T[];
//     constructor(public arr: T[]){
//         this.heap = this.buildHeap(arr);
//     }
//     public buildHeap(arr: T[]): T[] {
//         return
//     }
//     public parentIdx(index: number): number {
//         return Math.floor((index) / 2);
//     }
//     public leftChildIdx(index: number): number {
//         return (2*index + 1);
//     }
//     public rightChildIdx(index: number): number {
//         return (2*index + 2);
//     }
//     public swapIdx(a:number, b:number){
//         let temp: number = this.heap[a];
//         this.heap[a] = this.heap[b];
//         this.heap[b] = temp;
//     }
//     public insert(item: number): void {
//         this.heap.push(item);
//         let index: number = this.heap.length - 1;
//         let parent: number = this.parentIdx(index);
//         while(this.heap[parent] && this.heap[parent] < this.heap[index]) {
//             this.swapIdx(parent, index);
//             index = parent;
//             parent = this.parentIdx(index);
//         }
//     }
//     /**
//      * @description heap node deletion
//      * @returns 
//      */
//     public delete(): number {
//         // remove top of max heap
//         let item: number = this.heap.shift();
//         // remove bottom-leftmost element and place at top of max-heap
//         this.heap.unshift(this.heap.pop());
//         let index: number = 0;
//         let leftChild: number = this.leftChildIdx(index);
//         let rightChild: number = this.rightChildIdx(index);
//         while(this.heap[leftChild] && this.heap[leftChild] > this.heap[index] || this.heap[rightChild] > this.heap[index]){
//             let max: number = leftChild;
//             if(this.heap[rightChild] && this.heap[rightChild] > this.heap[max]){
//                 max = rightChild
//             }
//             this.swapIdx(max, index);
//             index = max;
//             leftChild = this.leftChildIdx(max);
//             rightChild = this.rightChildIdx(max);
//         }
//         return item;
//     }
// }
class MinHeap {
    constructor() {
        this.heap = [];
    }
    buildHeap(arr) {
        let numberArr = arr;
        // let pqElemArr = arr as iPQElement<T>[]
        let resArr;
        try {
            if (utils.isNumberArr(arr)) {
                console.log('A');
                this.heap = this.convertNumArrToPriorityQueueArr(arr);
            }
            else {
                console.log('B');
                this.heap = arr;
            }
        }
        catch (e) {
            console.log(`error: ${e}`);
        }
        console.log('before', this.heap);
        let btmLeftMostParentIdx = Math.floor((this.heap.length - 2) / 2);
        for (let currentIdx = btmLeftMostParentIdx; currentIdx >= 0; currentIdx--) {
            this.bubbleDown(currentIdx);
        }
        console.log('after', this.heap);
        return this.heap;
    }
    convertNumArrToPriorityQueueArr(arr) {
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            res.push(new PQElement(arr[i]));
        }
        return res;
    }
    parentIdx(index) {
        return Math.floor((index - 1) / 2);
    }
    leftChildIdx(index) {
        return (2 * index + 1);
    }
    rightChildIdx(index) {
        return (2 * index + 2);
    }
    hasLeftChild(index) {
        return this.leftChildIdx(index) < this.heap.length;
    }
    hasRightChild(index) {
        return this.rightChildIdx(index) < this.heap.length;
    }
    bubbleDown(index) {
        let leftChild = this.leftChildIdx(index);
        let rightChild = this.rightChildIdx(index);
        //loop while child nodes exist
        while (this.hasLeftChild(index)) {
            //compare child nodes, get smaller priority value of left and right
            let smallerChildIdx = this.hasRightChild(index) &&
                this.heap[rightChild]['priority'] < this.heap[leftChild]['priority'] ?
                rightChild : leftChild;
            // console.log('smallerChild', this.heap[smallerChildIdx]['priority'])
            // console.log('index', this.heap[index]['priority'])
            if (this.heap[smallerChildIdx]['priority'] < this.heap[index]['priority']) {
                this.swapIdx(smallerChildIdx, index);
                // this.swapPriority(smallerChildIdx, index)
                // index = smallerChildIdx
                // this.heap[index]['priority'] = this.heap[smallerChildIdx]['priority']
                // leftChild = this.leftChildIdx(index)            
            }
            else {
                return;
            }
        }
    }
    bubbleUp(index) {
        const parent = this.parentIdx(index);
        while (index > 0 && this.isGreaterThan(parent, index)) {
            this.swapIdx(parent, index);
            this.swapPriority(parent, index);
        }
    }
    isLessThan(parentIdx, idx) {
        return this.heap[parentIdx]['priority'] < this.heap[idx]['priority'];
    }
    isGreaterThan(parentIdx, idx) {
        return this.heap[parentIdx]['priority'] > this.heap[idx]['priority'];
    }
    swapIdx(a, b) {
        let temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }
    swapPriority(a, b) {
        let temp = this.heap[a]['priority'];
        this.heap[a]['priority'] = this.heap[b]['priority'];
        this.heap[b]['priority'] = temp;
    }
    insert(priority, value = null) {
        this.heap.push({ priority, value });
        let idx = this.heap.length - 1;
        this.bubbleUp(idx);
    }
    remove() {
        // remove top heap elem
        let top = this.heap.shift();
        // get bottom-most heap elem
        let bottom = this.heap.pop();
        // replace top w/ bottom-most @ idx-0
        this.heap.unshift(bottom);
        // run swapIdx
        this.bubbleDown(0);
        // return priority of deleted top heap element
        return top.priority;
    }
    peek() {
        return this.heap.length === 0 ? null : this.heap[0]['priority'];
    }
}
exports.MinHeap = MinHeap;
let heapTest = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];
let heapTest1 = [
    { 'priority': 48, 'value': { 'type': 'U', 'length': 48, 'force': 999 } },
    { 'priority': 12, 'value': { 'type': 'G', 'length': 12, 'force': 875 } },
    { 'priority': 24, 'value': { 'type': 'W', 'length': 24, 'force': 456 } },
    { 'priority': 7, 'value': { 'type': 'D', 'length': 7, 'force': 767 } },
    { 'priority': 8, 'value': { 'type': 'E', 'length': 8, 'force': 456 } },
    { 'priority': -5, 'value': { 'type': 'R', 'length': -5, 'force': 456 } },
    { 'priority': 24, 'value': { 'type': 'D', 'length': 24, 'force': 564 } },
    { 'priority': 391, 'value': { 'type': 'T', 'length': 391, 'force': 888 } },
    { 'priority': 24, 'value': { 'type': 'D', 'length': 24, 'force': 676 } },
    { 'priority': 56, 'value': { 'type': 'P', 'length': 56, 'force': 567 } },
    { 'priority': 2, 'value': { 'type': 'H', 'length': 2, 'force': 765 } },
    { 'priority': 6, 'value': { 'type': 'S', 'length': 6, 'force': 456 } },
    { 'priority': 8, 'value': { 'type': 'D', 'length': 8, 'force': 777 } },
    { 'priority': 41, 'value': { 'type': 'Z', 'length': 41, 'force': 657 } }
];
let heap = new MinHeap().buildHeap(heapTest);
// utils.timed('heap', heap.buildHeap, [heapTest])
