import * as typing from '../typing'
import * as utils from '../utils'

interface iShearWall {
    type: string,
    force: number,
    length: number
}

interface iLinkedListData<T>{  
    id: number,
    data: T
}

type tLinkedListNode<T> = {
    id: number;
    next: tLinkedListNode<T> | null;
    previous: tLinkedListNode<T> | null;
    data: T | null
}


class LinkedListNode<T> implements tLinkedListNode<T> {
    public id: number;
    public next: LinkedListNode<T> | null;
    public previous: LinkedListNode<T> | null;
    public data: T | null

    constructor(id = null, data: T | null = null){
        this.id = id,
        this.next = null,
        this.previous = null,
        this.data = data
    }
}

export class LinkedList<T>  {
    private first: tLinkedListNode<T> | null;
    private last: tLinkedListNode<T> | null;
    private length: number;

    constructor(public arr: iLinkedListData<T>[]){
        this.first = null;
        this.last = null;
        this.length = 0

        if(utils.isNumberArr(arr)){
            Array.from(arr, (item: iLinkedListData<T>) => this.addLast(item[0])) 
        }else{
            Array.from(arr, (item: iLinkedListData<T>) => this.addLast(item.id, item.data))
        }
        
    }

    /**
     * @name findBy
     * @description find by index or by value, whichever happens first
     * @example
     * *** this.findBy({index: 10}).node // node at index 10.
     * *** this.findBy({value: 10}).node // node with value 10.
     * *** this.findBy({value: 10}).index // node's index with value 10. 
     * @param {object} params - the search params
     * @param {T} params.data - the value to search for
     * @param {number} params.index - the index/position to search for
     * @returns {{node: T, index: number}}
     * @summary runtime: O(n)
     * --- 1. Initializes two variables {current, position} = 0 to keep
     * track of the ordinal number
     * --- 2. while the current node is not null, keep going.
     * --- 3. On each loop, move to next node + increment index
     * --- 4. check if index is one provided or if node has expected id
     * --- 5. return index + current node if found
     */
    public findBy({ id = null, index = Infinity} = {}) {
        for(let current = this.first, position = 0; // 1
            current && position <= index; // 2
            position += 1, current = current.next) { // 3
                if(position === index || id === current.id) { //4
                    return { node: current, index: position}; // 5
                }
            }
        return {};
    }

    /**
     * @description add node to beginning of linked list === Array.unshift()
     * @example
     * @param {number} id 
     * @returns 
     * @summary o(1) time * space
     * --- 1. check if list is not empty
     * --- 2. this.first.previous means updating previous pointer to newNode (nN):
     * --- --- null < n1.next > < prev.n2.next > < prev.n3.next > null  
     * --- ---  current == n1
     * [before]
     * -----------------[current] ----[current.next]------
     * --- --- null < prev.n1.next > < prev.n2.next > ....
     * [after]
     * --- --- null < prev.nN.next > < prev.n1.next > < prev.n2.next > ....
     * --- 3. place newNode at head, first node
     * --- 4. increment list length
     */
    public addFirst(id: number, data: T | null = null) {
        const newNode: tLinkedListNode<T> = new LinkedListNode<T>(id, data);
        newNode.next = this.first;

        if(this.first) { // 1 
            this.first.previous = newNode; // 2 
        }else {
            this.last = newNode; 
        }

        this.first = newNode; // 3
        this.length += 1; // 4

        return newNode;
    }

    /**
     * @description add node/element to the end of linked list === Array.push()
     * @example
     * @param id 
     * @returns
     * @summary O(1) time & space
     * --- 1. set newNode previous pointer to current last element in linked list
     * --- 2. set current last element next pointer to newNode
     * --- 3. set last element to newNode
     * --- 4. if list is empty, first & last point to newNode
     */
    public addLast(id: number, data: T | null = null){
        
        const newNode: tLinkedListNode<T> = new LinkedListNode<T>(id, data);

        newNode.next = this.first;

        if(this.first) { 
            newNode.previous = this.last; // 1
            this.last.next = newNode; // 2
            this.last = newNode; // 3
            this.last.next = null;
        }else{ // 4
            this.first = newNode;
            this.last = newNode;
            this.last.next = null;
        }
        this.length += 1;
        return newNode;
    }

    /**
     * @description insert new node/elem at a given position (index)
     * @example
     * @param {number} id new nodes identifier
     * @param {number} position index to insert element
     * @returns {LinkedListNode | error} new node or error if index is Out of Bounds
     * @summary o(n) time, o(1) space: b/c we need to use findBy() method
     * --- 1. set newNode previous link
     * --- 2. set newNode next link
     * --- 3. set current previous next pointer to newNode
     * --- 4. set current previous to newNode (nN)
     * --- --- current = n2
     * [before]
     * --------------[current.prev]-----[current]------[current.next]--------
     * --- --- null < prev.n1.next > < prev.n2.next > < prev.n3.next > null
     * [after]
     * --- --- null < prev.n1.next > < prev.nN.next > < prev.n2.next > ...
     */
    public addAt(id: number, data: T| null = null, position: number = 0){

        if(position === 0) return this.addFirst(id, data); 
        if(position === this.length) return this.addLast(id, data); 

        const current = this.findBy({index: position}).node  
        if(!current) return new Error('out of bound index');

        const newNode: tLinkedListNode<T> = new LinkedListNode<T>(id, data);

        newNode.previous = current.previous; // 1
        newNode.next = current; // 2
        current.previous.next = newNode; // 3
        current.previous = newNode; // 4

        this.length += 1;
        return newNode;
    }

    /**
     * @description removes node/element from start of linked list === Array.shift()
     * @example
     * @returns {LinkedListNode} removed node
     * @summary o(1) time + space 
     * --- 1. move first pointer to the next node/element
     * --- 2. if list length === 0, need to null out last
     */
    public removeFirst() {

        if(!this.first) return new Error('list is empty');
        const head = this.first;

        this.first = head.next; // 1
        if(this.first){
            this.first.previous = null
        }else{ // 2
            this.last = null
        }

        this.length -= 1;
        return head
    }

    /**
     * @description removes node/element from end of linked list === Array.pop()
     * @example
     * @returns {LinkedListNode} removed node
     * @summary o(1) time + space 
     * --- 1. move last previous pointer to the previous node/element
     * --- 2. if list length === 0, need to null out first
     */
    public removeLast(){

        if(!this.last) return new Error('list is empty');
        const tail = this.last;

        this.last = tail.previous; // 1
        if(this.last){
            this.last.next = null;
        }else{ // 2
            this.first = null; 
        }

        this.length -= 1; 
        return tail
    }

    /**
     * @description remvoe  node/elem at a given position (index) === Array.slice()
     * @example
     * @param {number} id new nodes identifier
     * @param {number} position index to insert element
     * @returns {LinkedListNode | error} new node or error if index is Out of Bounds
     * @summary o(n) time, o(1) space: b/c we need to use findBy() method
     * --- 1. set newNode previous link
     * --- 2. set newNode next link
     * --- 3. set current previous next ( left node, before current) to current next
     * --- 4. set current next previous ( right node, after current )to current previous
     * --- --- remove, current = n2
     * [before]
     * -------------[current.prev] -----[current]-------[current.next]----------------
     * --- --- null < prev.n1.next > < prev.n2.next > < prev.n3.next > null
     * [after]
     * --- --- null < prev.n1.next > < prev.n3.next > null...
     */
    public removeAt(position = 0){

        if(position === 0) return this.removeFirst();
        if(position === this.length - 1) return this.removeLast();

        const current = this.findBy({index: position}).node;
        if(!current) return new Error('out of bound index');

        current.previous.next = current.next;
        current.next.previous = current.previous;

        this.length -= 1;

        return current 

    }

    public traverse(node: tLinkedListNode<T> = this.first) {
        
        node && console.log(`id: ${node.id} - ${JSON.stringify(node.data,null)}`)
        node && this.traverse(node.next)
    }

    
}


let linkedlistTest: iLinkedListData<iShearWall>[] = [
    {'id': 48, 'data': {'type': 'D', 'length':10, 'force': 456}},
    {'id': 12, 'data': {'type': 'D', 'length':10, 'force': 456}},
    {'id': 24, 'data': {'type': 'D', 'length':10, 'force': 456}},
    {'id': 7, 'data': {'type': 'D', 'length':10, 'force': 456}},
    {'id': 8, 'data': {'type': 'D', 'length':10, 'force': 456}},
    {'id': -5, 'data': {'type': 'D', 'length':10, 'force': 456}},
    {'id': 24, 'data': {'type': 'D', 'length':10, 'force': 456}},
    {'id': 391, 'data': {'type': 'D', 'length':10, 'force': 456}},
    {'id': 24, 'data': {'type': 'D', 'length':10, 'force': 456}},
    {'id': 56, 'data': {'type': 'D', 'length':10, 'force': 456}},
    {'id': 2, 'data': {'type': 'D', 'length':10, 'force': 456}},
    {'id': 6, 'data': {'type': 'D', 'length':10, 'force': 456}},
    {'id': 8, 'data': {'type': 'D', 'length':10, 'force': 456}},
    {'id': 41, 'data': {'type': 'D', 'length':10, 'force': 456}}
];

let linkedList: LinkedList<iShearWall> = new LinkedList<iShearWall>(linkedlistTest)

// console.log(JSON.stringify(linkedList, null, 4))

linkedList.traverse()

