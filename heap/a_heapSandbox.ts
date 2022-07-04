import * as utils from '../utils'

/**
 * @description 
 * -- resource: https://stackabuse.com/heap-sort-in-javascript/
 */
export class MaxHeap{
    public heap: number[];
    constructor(){
        this.heap = [];
    }

    public parentIdx(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    public leftChildIdx(index: number): number {
        return (2*index + 1);
    }

    public rightChildIdx(index: number): number {
        return (2*index + 2);
    }

    public swap(a:number, b:number){
        let temp: number = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }

    public insert(item: number): void {
        this.heap.push(item);
        let index: number = this.heap.length - 1;
        let parent: number = this.parentIdx(index);
        while(this.heap[parent] && this.heap[parent] < this.heap[index]) {
            this.swap(parent, index);
            index = this.parentIdx(index);
            parent = this.parentIdx(index);
        }
    }

    public delete(): number {
        let item: number = this.heap.shift();
        this.heap.unshift(this.heap.pop());
        let index: number = 0;
        let leftChild: number = this.leftChildIdx(index);
        let rightChild: number = this.rightChildIdx(index);
        while(this.heap[leftChild] && this.heap[leftChild] > this.heap[index] || this.heap[rightChild] > this.heap[index]){
            let max: number = leftChild;
            if(this.heap[rightChild] && this.heap[rightChild] > this.heap[max]){
                max = rightChild
            }
            this.swap(max, index);
            index = max;
            leftChild = this.leftChildIdx(max);
            rightChild = this.rightChildIdx(max);
        }
        return item;
    }
}

export class MinHeap{
    public heap: number[];

    constructor(){
        this.heap = []
    }

    public buildMinHeap(){

    }

    public bubbleDown() {

    }
    
    public bubbleUp() {

    }

    public insert() {

    }

    public remove() {

    }
}