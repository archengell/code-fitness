import * as utils from '../utils'


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

export class MinHeap {
    public heap: number[];

    constructor(arr: number[]){
        this.heap = this.buildHeap(arr);
    }

    public buildHeap(arr: number[]): number[] {

        const parentIdx = Math.floor((arr.length -2) / 2);
        for(let currentIdx = parentIdx; currentIdx >= 0; currentIdx--){
            this.bubbleDown(currentIdx, arr.length - 1, arr)
        }
        return arr;
    }

    // public convertNumArrToPriorityQueueArr(arr: number[]): iPQElement<T>[]{
    //     let res: iPQElement<T>[] = []
    //     for(let i = 0; i < arr.length; i++){
    //         res.push(new PQElement<T>(arr[i]))
    //     }
    //     return res
    // } 

    public parentIdx(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    public leftChildIdx(index: number): number {
        return (2*index + 1);
    }

    public rightChildIdx(index: number): number {
        return (2*index + 2);
    }

    public bubbleDown(index: number, endIdx: number, heap: number[]): void {
        let leftChildIdx: number = this.leftChildIdx(index);
        //loop while child nodes exist
        while(leftChildIdx <= endIdx){
            //compare child nodes, get smaller priority value of left and right
            let rightChildIdx: number = this.rightChildIdx(index) 
            let smallerChildIdx: number =  (rightChildIdx && 
                heap[rightChildIdx] < heap[leftChildIdx]) ? 
                rightChildIdx : leftChildIdx;

            if(heap[smallerChildIdx] < heap[index]){
                this.swapIdx(index, smallerChildIdx, heap);
                index = smallerChildIdx
                leftChildIdx = this.leftChildIdx(index);          
            }else{
                return
            }
        }
    }
    
    public bubbleUp(index: number, heap: number[]): void {
        let parent = this.parentIdx(index);
        while(index > 0 && this.isGreaterThan(parent, index)){
            this.swapIdx(parent, index, heap);
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    public isLessThan(parentIdx: number, idx: number): boolean {
        return this.heap[parentIdx]['priority'] < this.heap[idx]['priority']
    }
    public isGreaterThan(parentIdx: number, idx: number): boolean {
        return this.heap[parentIdx] > this.heap[idx]
    }

    public swapIdx(a:number, b:number, arr: number[]){
        let temp: number = arr[b];
        arr[b] = arr[a];
        arr[a] = temp;
    }

    public insert(index: number): void {
        this.heap.push(index)
        this.bubbleUp(this.heap.length - 1, this.heap)
    }

    public remove(): number {
        // remove top heap elem
        this.swapIdx(0, this.heap.length - 1, this.heap);
        const res: number = this.heap.pop();
        this.bubbleDown(0, this.heap.length - 1, this.heap);
        // return priority of deleted top heap element
        return res
    }

    public peek(): any {
        console.log(`peek: ${this.heap[0]}`)
        return this.heap[0];
    }
}


let heapTest: number[] = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]
// let heapTest1: iPQElement<shearwall>[] = [
//     {'priority': 48, 'value': {'type': 'U', 'length':48, 'force': 999}},
//     {'priority': 12, 'value': {'type': 'G', 'length':12, 'force': 875}},
//     {'priority': 24, 'value': {'type': 'W', 'length':24, 'force': 456}},
//     {'priority': 7, 'value': {'type': 'D', 'length':7, 'force': 767}},
//     {'priority': 8, 'value': {'type': 'E', 'length':8, 'force': 456}},
//     {'priority': -5, 'value': {'type': 'R', 'length':-5, 'force': 456}},
//     {'priority': 24, 'value': {'type': 'D', 'length':24, 'force': 564}},
//     {'priority': 391, 'value': {'type': 'T', 'length':391, 'force': 888}},
//     {'priority': 24, 'value': {'type': 'D', 'length':24, 'force': 676}},
//     {'priority': 56, 'value': {'type': 'P', 'length':56, 'force': 567}},
//     {'priority': 2, 'value': {'type': 'H', 'length':2, 'force': 765}},
//     {'priority': 6, 'value': {'type': 'S', 'length':6, 'force': 456}},
//     {'priority': 8, 'value': {'type': 'D', 'length':8, 'force': 777}},
//     {'priority': 41, 'value': {'type': 'Z', 'length':41, 'force': 657}}
//     ]

let heap = new MinHeap(heapTest)
console.log('heap 1', heap)
heap.insert(76);
console.log('heap 2', heap)
heap.peek();
heap.remove();
heap.peek();
heap.remove();
heap.peek();
heap.insert(87)
console.log('heap 3', heap)


// utils.timed('heap', heap.buildHeap, [heapTest])