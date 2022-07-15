import * as BinaryTreeSandbox from '../binaryTrees/a_binaryTreeSandBox'
import { Queue } from '../queues/queueSandBox'
import * as utils from '../utils'

interface IBST extends BinaryTreeSandbox.IBT {
    meta?: string | null;
    depth?: number | null;
}

export class BST extends BinaryTreeSandbox.BT implements IBST {
    public meta?: string;
    public depth?: number | null;

    constructor(public value: number){
        super(value)
        // this.data = null;    
    }
    /** algoExpert derivation: still need to figure this out!!! */
    // bstRecursiveInsert(values: number[], i: number = 0): IBST {
    //     if(i >= values.length) return;
    //     let queue: IBST[] = [this];
    //     console.log('queueBeforeWhile', queue);
    //     while(queue.length){
    //         // queue -> FIFO: shift() out ; push() in
    //         // stack -> LIFO: pop() out; push() in
    //         let current: IBST = queue.shift();
    //         let newNode: IBST = new BinarySearchTreez(values[i])
    //         console.log('current', current);
    //         console.log('newNode', newNode);
    //         if(newNode.value < current.value) {
    //             if(current.left === null) {
    //                 current.left = newNode;
    //             }
    //         }
    //         queue.push(current.left);
    //         if(newNode.value > current.value){
    //             if(current.right === null){
    //                 current.right = newNode;
    //             }
    //             break;
    //         }
    //         queue.push(current.right);
    //     }
    //     this.bstRecursiveInsert(values, i + 1);
    //     return this;
    // }


    /**
     * @name
     * @description ??? 
     * @param currentNode ???
     * @param newNode
     * @summary
     */
    private insertNodeBST(currentNode: IBST = this, newNode: IBST){

        if(newNode.value < currentNode.value){
            if(currentNode.left === null){
                currentNode.left = newNode;
            }else{
                this.insertNodeBST(currentNode.left, newNode);
            }
        }else{
            if(currentNode.right === null){
                currentNode.right = newNode;
            }else{
                this.insertNodeBST(currentNode.right, newNode);
            }
        }
    }


    // insert(value: number){
    //     let currentNode: IBST = this;
    //     while(true){
    //         if(value < currentNode.value){
    //             if(currentNode.left === null){
    //                 currentNode.left = new BinarySearchTreez(value);
    //                 break;
    //             }else{
    //                 currentNode = currentNode.left;
    //             }
    //         }else{
    //             if(currentNode.right === null){
    //                 currentNode.right = new BinarySearchTreez(value);
    //                 break;
    //             }else{
    //                 currentNode = currentNode.right;
    //             }
    //         }
    //     }
    //     return this;
    // }

    /**
     * @description creates BST 
     * @param values array of node keys ( node.values )
     * @return BST
     * @summary ??? 
     */
    createBST(values: number[]){
        while(values.length){
            let newNode: IBST = new BST(values.shift())
            this.insertNodeBST(this, newNode)
        }
        return this;
    }


    /**
     * @description Find minimum node value 
     * @param node starts as root, then subsequent tree nodes
     */
    minNode(node: IBST) {
        while(node.left){
            node = node.left
        }
        return node
    }

    /**
     * @description Find maximum node value 
     * @param node starts as root, then subsequent tree nodes
     */
    maxNode(node: IBST){
        while(node.right){
            node = node.right
        }
        return node
    }

    /**
     * @description gets node heights of BT/BST
     * @param node starts as root, then subsequent tree nodes
     */
    getNodeHeight(node: IBST){
        //termination
        if(node === null) return -1;
        //base
        if(node.left === node.right === null) return 0
        //recursion
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }

    /**
     * @name getSumOfNodeDepths
     * @description gets node depths of BT/BST
     * @example
     * @param node starts as root, then subsequent tree nodes
     * @param depth depth of each node: zero @ root node
     * @returns sum of node depths
     * @summary time: O(n) | space: O(h); n= #ofNodes | h= BT/BST Height
     */
    getSumOfNodeDepths(node: IBST = this, depth: number = 0): number {
        
        let res: number;
        if(node) {
            res =  ( 
                depth + 
                this.getSumOfNodeDepths(node.left, depth+1) + 
                this.getSumOfNodeDepths(node.right, depth+1)
            )
        }else {
            res = 0
        }
        console.log(res)
        return res
    }

    /**
     * @name getNodeDepths
     * @description gets node depths of BT/BST
     * @example 
     * @param node starts as root, then subsequent tree nodes
     * @param depth depth of each node: zero @ root node
     * @returns ???
     * @summary time: O(n) | space: O(h); n= #ofNodes | h= BT/BST Height
     * @readonly: https://tekmarathon.com/2013/05/02/find-depth-of-binary-search-tree/
     */
    getNodeDepths(node: IBST = this, depth: number = 0): number {

        let left: number, right: number = depth;
        if(node.left){
            this.getNodeDepths(node.left, depth+1)
        }
        if(node.right){
            this.getNodeDepths(node.right, depth+1)
        }
        let res: number = left > right ? left : right;
        console.log(`node.value: ${node.value} | node.depth: ${res}`)
        return res
    }

    /**
     * @name getBalanceFactor
     * @description BalanceFactor(BF) = Height(node.right)(HR) - Height(node.left)(HL)
     * ...IF BF > 0, right-heavy ELSE left-heavy
     * @example
     * @param node starts as root, then subsequent tree nodes
     * @summary
     */
    getBalanceFactor(node: IBST){
        return (this.getNodeHeight(node.right) - this.getNodeHeight(node.left))
    }
    
    /**
     * @description print tree structure
     * @description ref: https://github.com/beforesemicolon/tutorials-files/blob/master/avl-binary-tree.js
     * @param node starts as root, then subsequent tree nodes
     * @returns tree
     * @summary 
     */
    printTree(node: IBST = this, spaceCount = 0, label ='* '){    
        if(node === null) return console.log(`${' -'.repeat(spaceCount)}${label} [0/0] null`);

        console.log(
            `${' -'.repeat(spaceCount)}${label}` + 
            `[H: ${this.getNodeHeight(node)}|BF: ${this.getBalanceFactor(node)}] ${node.value}`
        )

        this.printTree(node.right, spaceCount + 2, 'R: ');
        this.printTree(node.left, spaceCount + 2, 'L: ');
    }

    contains(value: number){
        let currentNode: IBST | null = this;
        while(currentNode !== null) {
            if(value < currentNode.value){
                currentNode = currentNode.left
            }else if(value > currentNode.value){
                currentNode = currentNode.right;
            }else{
                return true
            }
        }
        return false
    }

    /**
     * @description iterative removal of bst node
     * @example
     * @param value ???
     * @param parentNode
     * @summary
     */
    // remove_O1_space(value: number, parentNode: IBST | null = null): IBST | null {
    //     let currentNode: IBST | null = this
    //     while(currentNode !== null){
    //         if(value < currentNode.value){
    //             parentNode = currentNode
    //             currentNode = currentNode.left
    //         }else if( value > currentNode.value){
    //             parentNode = currentNode
    //             currentNode = currentNode.right
    //         }else{
    //             // case 3 : node w/ 2 children
    //             if(currentNode.left !== null && currentNode.right !== null){
    //                 currentNode.value = currentNode.right.getSmallestValue() ;
    //                 currentNode.right.remove_O1_space(currentNode.value, currentNode)
    //             }else if(parentNode === null){
    //                 if(currentNode.left !== null){
    //                     currentNode.value = currentNode.left.value;
    //                     currentNode.right = currentNode.left.right;
    //                     currentNode.left = currentNode.left.left;
    //                 }else if(currentNode.right !== null){
    //                     currentNode.value = currentNode.right.value;
    //                     currentNode.left = currentNode.right.left;
    //                     currentNode.right = currentNode.right.right;
    //                 }else{
    //                     // do nothing...
    //                 }
    //             }else if(parentNode.left === currentNode){
    //                 parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
    //             }else if(parentNode.right === currentNode){
    //                 parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
    //             }
    //             break;
    //         }
    //     }
    //     return this
    // }


    /**
     * @name remove_On_space 
     * @description recursive removal of bst node
     * @example
     * @param value {number} node value
     * @param parentNode {IBST} 
     * @summary o(n) time & space
     */
    remove_0n_space(value: number, parent: IBST | null = null){

        if(value < this.value){
            if(this.left !== null){
                this.remove_0n_space(this.left.value, this)
            }
        }else if(value > this.value){
            if(this.right !== null){
                this.remove_0n_space(this.right.value, this)
            }
        }else{
            if(this.left.value !== null && this.right !== null){
                this.value = this.getSmallestValue();
                this.remove_0n_space(this.value, this);
            }else if(parent === null){
                if(this.left !== null){
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                }else if(this.right !== null){
                    this.value = this.right.value;
                    this.left = this.right.left;
                    this.right = this.right.right;
                }else{
                    // do nothing...
                }
            }else if(parent.left === this){
                parent.left = this.left !== null ? this.left : this.right;
            }else if(parent.right === this){
                parent.right = this.left !== null ? this.left : this.right;
            }
        }
        return this;
    }
    
    getSmallestNodeOrValue(node: IBST, option:string = 'value'): IBST | number {
        let res: IBST | number;
        while(node && node.left !== null){
            node = node.left;
        }
        res = option === 'value' ? node.value : node;
        return res;
    }

    getSmallestValue(): number {
        let node: IBST = this;
        while(node.left !== null){
            node = node.left
        }
        return node.value
    }

}

/**
 * @name preOrderTraversal 
 * @description preorder traversal <-> simm. to DFS approach
 * @description order: root, left, right 
 * @param node starts as root, then subsequent tree nodes
 * @summary o(n) time & space
 */
export function preOrderTraversal(node: IBST, arr: IBST['value'][] = []) {
    // console.log('initial node', node);
    if(!node) return;
    // console.log(node.value);
    arr.push(node.value);
    // this.preOrderTraversal() provides an undefined error!!! 
    // took a long time to debug, man!!!
    preOrderTraversal(node?.left, arr); // node.left && preOrderTraversal(node.left, arr);
    preOrderTraversal(node?.right, arr); // node.right && preOrderTraversal(node.right, arr)
    return arr;
}

/**
 * @description postOrder traversal <-> simm. to DFS approach    
 * @description order: left, right, root
 * @example testcase1: []
 * @param node starts as root, then subsequent tree nodes
 * @summary o(n) time & space
 */
export function postOrderTraversal(node: IBST, arr: IBST['value'][] = []) {
    if(!node) return;
    postOrderTraversal(node?.left, arr); // node.left && postOrderTraversal(node.left, arr)
    postOrderTraversal(node?.right, arr); // node.right && postOrderTraversal(node.right, arr)
    arr.push(node.value);
    return arr
}


/**
 * @description inOrder traversal <-> simm. to DFS approach
 * @description order: left, root, right  
 * @example test1: []
 * @param node starts as root, then subsequent tree nodes
 * @summary o(n) time & space
 */
export function inOrderTraversal(node: IBST, 
    arr: IBST['value'][] = []) : number[] {
        if(!node) return;
        inOrderTraversal(node?.left, arr); 
        // node && inOrderTraversal(node.left, arr)
        arr.push(node.value);
        inOrderTraversal(node?.right, arr); 
        // node && inOrderTraversal(node.right, arr) 
        return arr;  
}

/**
 * @name 
 * @description levelOrder traversal <-> simm. to BFS approach 
 * @example test1: [11 (root), 7, 15 (d1), 5, 9, 13, 20 (d2), 3, 8, 10, 12, 114, 18, 25 (d3) ]
 * @param node starts as root, then subsequent tree nodes
 * NEED TO COMPLETE THIS --> DIDN'T DO IT!!!
 * @summary o(n) time & space
 */
function lvlOrderTraversal(node: IBST, 
    arr: IBST['value'][] = []  ) {
        if(!node) return;

        let storage = new Queue<IBST>();
        storage.add(node);

        while(storage.length()){
            let nodeElem: IBST = storage.remove()
            if(nodeElem.value !== null) arr.push(nodeElem.value)
            nodeElem.left && storage.add(nodeElem.left)
            nodeElem.right && storage.add(nodeElem.right)
        }
        return arr
}

// test cases ... 
type testCases = {[key: string]: number | number[] }

let test1: testCases = {
    nodes: [7,15,5,3,9,8,10,13,12,14,20,18,25],
    root: 11
} 
let test2: testCases = {
    nodes: [10,23,8,13,6,12,15,20,32],
    root: 19
} 

let test3: testCases = {
    nodes: [2, 3, 4, 5, 6, 7, 8, 9],
    root: 1
}

let test4: testCases = {
    nodes: [5],
    root: 10
}

let test5: testCases = {
    nodes: [9,20,null,null,15,7],
    root: 3
}

let bstTreeTest: any = new BST(test5['root'] as number).createBST(test5['nodes'] as number[]);
// console.log(bstTreeTest)

// console.log(JSON.stringify(bstTreeTest,null,4))
// bstTreeTest.remove_0n_space(10)
// console.log(JSON.stringify(bstTreeTest,null,4))

// console.log(preOrderTraversal(bstTreeTest));
// console.log('preOrder:', preOrderArr);

// bstTreeTest.printTree()
// bstTreeTest.getSumOfNodeDepths();
// bstTreeTest.getNodeDepths();
// console.log(postOrderTraversal(bstTreeTest));
// console.log('postOrder:', postOrderArr);

// console.log('inOrderArr', inOrderTraversal(bstTreeTest)); 
// console.log('preOrderArr', preOrderTraversal(bstTreeTest)); 
// console.log('postOrderArr', postOrderTraversal(bstTreeTest)); 
// utils.timed('lvlOrderTraversal', lvlOrderTraversal, [bstTreeTest]);