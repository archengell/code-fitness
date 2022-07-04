import * as BinaryTreeSandbox from '../binaryTrees/a_binaryTreeSandBox'
import { Queue } from '../queues/queueSandBox'

interface IBinarySearchTree extends BinaryTreeSandbox.IBinaryTree {
    meta?: string | null;
    depth?: number | null;
}

export class BinarySearchTreez extends BinaryTreeSandbox.BinaryTreez implements IBinarySearchTree {
    public meta?: string;
    public depth?: number | null;

    constructor(public value: number){
        super(value)
        // this.data = null;    
    }
    /** algoExpert derivation: still need to figure this out!!! */
    // bstRecursiveInsert(values: number[], i: number = 0): IBinarySearchTree {
    //     if(i >= values.length) return;
    //     let queue: IBinarySearchTree[] = [this];
    //     console.log('queueBeforeWhile', queue);
    //     while(queue.length){
    //         // queue -> FIFO: shift() out ; push() in
    //         // stack -> LIFO: pop() out; unshift() in
    //         let current: IBinarySearchTree = queue.shift();
    //         let newNode: IBinarySearchTree = new BinarySearchTreez(values[i])
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
     * @description ??? 
     * @param currentNode ???
     * @param newNode
     */
    private insertNodeBST(currentNode: IBinarySearchTree = this, newNode: IBinarySearchTree){

        if(newNode.value < currentNode.value){
            if(currentNode.left == null){
                currentNode.left = newNode;
            }else{
                this.insertNodeBST(currentNode.left, newNode);
            }
        }else{
            if(currentNode.right == null){
                currentNode.right = newNode;
            }else{
                this.insertNodeBST(currentNode.right, newNode);
            }
        }
    }

    /**
     * @description creates BST 
     * @param values array of node keys ( node.values )
     * @return BST
     * @summary ??? 
     */
    createBST(values: number[]){
        while(values.length){
            let newNode: IBinarySearchTree = new BinarySearchTreez(values.shift())
            this.insertNodeBST(this, newNode)
        }
        return this;
    }


    /**
     * @description Find minimum node value 
     * @param node starts as root, then subsequent tree nodes
     */
    minNode(node: IBinarySearchTree) {
        while(node.left){
            node = node.left
        }
        return node
    }

    /**
     * @description Find maximum node value 
     * @param node starts as root, then subsequent tree nodes
     */
    maxNode(node: IBinarySearchTree){
        while(node.right){
            node = node.right
        }
        return node
    }

    /**
     * @description gets node heights of BT/BST
     * @param node starts as root, then subsequent tree nodes
     */
    getNodeHeight(node: IBinarySearchTree){
        //termination
        if(node === null) return -1;
        //base
        if(node.left === node.right === null) return 0
        //recursion
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }

    /**
     * @description gets node depths of BT/BST
     * @param node starts as root, then subsequent tree nodes
     * @param depth depth of each node: zero @ root node
     * @returns sum of node depths
     * @summary time: O(n) | space: O(h); n= #ofNodes | h= BT/BST Height
     */
    getSumOfNodeDepths(node: IBinarySearchTree = this, depth: number = 0): number {
        
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
     * @description gets node depths of BT/BST
     * @param node starts as root, then subsequent tree nodes
     * @param depth depth of each node: zero @ root node
     * @returns ???
     * @summary time: O(n) | space: O(h); n= #ofNodes | h= BT/BST Height
     * @readonly: https://tekmarathon.com/2013/05/02/find-depth-of-binary-search-tree/
     */
    getNodeDepths(node: IBinarySearchTree = this, depth: number = 0): number {

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
     * @description BalanceFactor(BF) = Height(node.right)(HR) - Height(node.left)(HL)
     * ...IF BF > 0, right-heavy ELSE left-heavy
     * @param node starts as root, then subsequent tree nodes
     */
    getBalanceFactor(node: IBinarySearchTree){
        return (this.getNodeHeight(node.right) - this.getNodeHeight(node.left))
    }
    
    /**
     * @description print tree structure
     * @description ref: https://github.com/beforesemicolon/tutorials-files/blob/master/avl-binary-tree.js
     * @param node starts as root, then subsequent tree nodes
     * @returns tree
     * @summary 
     */
    printTree(node: IBinarySearchTree = this, spaceCount = 0, label ='* '){    
        if(node === null) return console.log(`${' -'.repeat(spaceCount)}${label} [0/0] null`);

        console.log(
            `${' -'.repeat(spaceCount)}${label}` + 
            `[H: ${this.getNodeHeight(node)}|BF: ${this.getBalanceFactor(node)}] ${node.value}`
        )

        this.printTree(node.right, spaceCount + 2, 'R: ');
        this.printTree(node.left, spaceCount + 2, 'L: ');
    }

    /**
     * @description deletion of tree node ( NOT FINISHED)
     * @param value ???
     */
    deleteNode(value: number){
        let node;
        if(value = node.value){
            if(node.right === null && node.left === null) {
                node.value = null;
            }

            if(node.left === null && node.right !== null) {

            }
        }
    }
}


/**
 * @description preorder traversal <-> simm. to DFS approach
 * @description order: root, left, right 
 * @param node starts as root, then subsequent tree nodes
 */
export function preOrderTraversal(node: IBinarySearchTree, arr: IBinarySearchTree['value'][] = []) {
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
 * @param node starts as root, then subsequent tree nodes
 */
export function postOrderTraversal(node: IBinarySearchTree, arr: IBinarySearchTree['value'][] = []) {
    if(!node) return;
    postOrderTraversal(node?.left, arr); // node.left && postOrderTraversal(node.left, arr)
    postOrderTraversal(node?.right, arr); // node.right && postOrderTraversal(node.right, arr)
    arr.push(node.value);
    return arr
}


/**
 * @description inOrder traversal <-> simm. to DFS approach
 * @description order: left, root, right 
 
 * @param node starts as root, then subsequent tree nodes
 */
export function inOrderTraversal(node: IBinarySearchTree, 
    arr: IBinarySearchTree['value'][] = []) : number[] {
        if(!node) return;
        inOrderTraversal(node?.left, arr); 
        // node && inOrderTraversal(node.left, arr)
        arr.push(node.value);
        inOrderTraversal(node?.right, arr); 
        // node && inOrderTraversal(node.right, arr) 
        return arr;  
}

/**
 * @description levelOrder traversal <-> simm. to BFS approach 
 * @param node starts as root, then subsequent tree nodes
 * NEED TO COMPLETE THIS --> DIDN'T DO IT!!!
 */
function lvlOrderTraversal(node: IBinarySearchTree, 
    arr: IBinarySearchTree['value'][] = []  ) {
        if(!node) return;

        let storage = new Queue<IBinarySearchTree>();
        storage.add(node);

        while(storage.length()){
            let nodeElem: IBinarySearchTree = storage.remove()
            arr.push(nodeElem.value)
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

let bstTreeTest: any = new BinarySearchTreez(test1['root'] as number).createBST(test1['nodes'] as number[]);
// console.log(bstTreeTest)

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
// console.log('levelOrderArr', lvlOrderTraversal(bstTreeTest));