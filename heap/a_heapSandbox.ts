import * as utils from '../utils'


type iPQElement<T> = {
    priority: number,
    value: T | null
}

type shearwall = { 
    type: string,
    length: number,
    force: number
}

class PQElement<T> implements iPQElement<T> { 
    constructor(public priority: number, public value: T | null = null){
        this.priority = priority;
        this.value = value ?? null;
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

export class MinHeap<T> {
    public heap: iPQElement<T>[];

    constructor(){
        this.heap = [];
    }

    public buildHeap(arr: (number | iPQElement<T>)[]): iPQElement<T>[] {

        let numberArr = arr as number[]
        // let pqElemArr = arr as iPQElement<T>[]
        let resArr: (number | iPQElement<T>)[];

        try{
            if(utils.isNumberArr(arr)) {
                console.log('A')
                this.heap = this.convertNumArrToPriorityQueueArr(arr as number[])
            }else{
                console.log('B')
                this.heap = arr as iPQElement<T>[]
            }
        }catch(e){
            console.log(`error: ${e}`)
        }

        console.log('before', this.heap)
        let btmLeftMostParentIdx: number = Math.floor((this.heap.length - 2) / 2)
        for(let currentIdx = btmLeftMostParentIdx; currentIdx >= 0; currentIdx--){
            this.bubbleDown(currentIdx)
        }
        console.log('after', this.heap)
        return this.heap
    }

    public convertNumArrToPriorityQueueArr(arr: number[]): iPQElement<T>[]{
        let res: iPQElement<T>[] = []
        for(let i = 0; i < arr.length; i++){
            res.push(new PQElement<T>(arr[i]))
        }
        return res
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

    public hasLeftChild(index: number): boolean {
        return this.leftChildIdx(index) < this.heap.length;
    }

    public hasRightChild(index: number): boolean {
        return this.rightChildIdx(index) < this.heap.length;
    }

    public bubbleDown(index: number): void {
        let leftChild: number = this.leftChildIdx(index);
        let rightChild: number = this.rightChildIdx(index);
        //loop while child nodes exist
        while(this.hasLeftChild(index)){
            //compare child nodes, get smaller priority value of left and right

            let smallerChildIdx: number = this.hasRightChild(index) && 
                this.heap[rightChild]['priority'] < this.heap[leftChild]['priority'] ? 
                rightChild : leftChild;
            // console.log('smallerChild', this.heap[smallerChildIdx]['priority'])
            // console.log('index', this.heap[index]['priority'])
            if(this.heap[smallerChildIdx]['priority'] < this.heap[index]['priority']){
                this.swapIdx(smallerChildIdx, index);
                // this.swapPriority(smallerChildIdx, index)
                // index = smallerChildIdx
                // this.heap[index]['priority'] = this.heap[smallerChildIdx]['priority']
                // leftChild = this.leftChildIdx(index)            
            }else{
                return
            }
        }
    }
    
    public bubbleUp(index: number): void {
        const parent = this.parentIdx(index);
        while(index > 0 && this.isGreaterThan(parent, index)){
            this.swapIdx(parent, index)
            this.swapPriority(parent, index);
        }
    }

    public isLessThan(parentIdx: number, idx: number): boolean {
        return this.heap[parentIdx]['priority'] < this.heap[idx]['priority']
    }
    public isGreaterThan(parentIdx: number, idx: number): boolean {
        return this.heap[parentIdx]['priority'] > this.heap[idx]['priority']
    }

    public swapIdx(a:number, b:number){
        let temp: iPQElement<T> = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }

    public swapPriority(a:number, b:number){
        let temp: number = this.heap[a]['priority'];
        this.heap[a]['priority'] = this.heap[b]['priority'];
        this.heap[b]['priority'] = temp;
    }

    public insert(priority: number, value: T = null): void {
        this.heap.push({priority, value})
        let idx = this.heap.length - 1;
        this.bubbleUp(idx)
    }

    public remove() {
        // remove top heap elem
        let top: iPQElement<T> = this.heap.shift();
        // get bottom-most heap elem
        let bottom: iPQElement<T> = this.heap.pop();
        // replace top w/ bottom-most @ idx-0
        this.heap.unshift(bottom);
        // run swapIdx
        this.bubbleDown(0)
        // return priority of deleted top heap element
        return top.priority
    }

    public peek(): any {
        return this.heap.length === 0 ? null : this.heap[0]['priority'];
    }
}


let heapTest: number[] = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]
let heapTest1: iPQElement<shearwall>[] = [
    {'priority': 48, 'value': {'type': 'U', 'length':48, 'force': 999}},
    {'priority': 12, 'value': {'type': 'G', 'length':12, 'force': 875}},
    {'priority': 24, 'value': {'type': 'W', 'length':24, 'force': 456}},
    {'priority': 7, 'value': {'type': 'D', 'length':7, 'force': 767}},
    {'priority': 8, 'value': {'type': 'E', 'length':8, 'force': 456}},
    {'priority': -5, 'value': {'type': 'R', 'length':-5, 'force': 456}},
    {'priority': 24, 'value': {'type': 'D', 'length':24, 'force': 564}},
    {'priority': 391, 'value': {'type': 'T', 'length':391, 'force': 888}},
    {'priority': 24, 'value': {'type': 'D', 'length':24, 'force': 676}},
    {'priority': 56, 'value': {'type': 'P', 'length':56, 'force': 567}},
    {'priority': 2, 'value': {'type': 'H', 'length':2, 'force': 765}},
    {'priority': 6, 'value': {'type': 'S', 'length':6, 'force': 456}},
    {'priority': 8, 'value': {'type': 'D', 'length':8, 'force': 777}},
    {'priority': 41, 'value': {'type': 'Z', 'length':41, 'force': 657}}
    ]

let heap = new MinHeap<null>().buildHeap(heapTest)

// utils.timed('heap', heap.buildHeap, [heapTest])