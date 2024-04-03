import * as Typings from '../typing'
import * as utils from '../utils'


/**
 * given the root of a binary tree, return inorder traversal : left -> root -> right
 * of it's node values
 * 
 * 
 */

class inOrderTravNode {
    val: number
    left: inOrderTravNode | null
    right: inOrderTravNode | null
    constructor(val?: number, left?: inOrderTravNode | null, right?: inOrderTravNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


/**
 * @description creates BT from number[]
 * @param node starts as root, then subsequent tree nodes
 * @returns tree
 * @summary ???
 */
function createBinaryTreeFromNumArr(values: number[], i: number = 0){
    if(i < values.length){
        let node: inOrderTravNode = new inOrderTravNode(values[i])
        node.left = createBinaryTreeFromNumArr(values, 2 * i + 1); // 1 3 5 7 ...
        node.right = createBinaryTreeFromNumArr(values, 2 * i + 2); // 2 4 6 8 ...
        return node
    }
}

/**
 * bt/bst inorder traversal - recursive 
 * @param root 
 * @param arr 
 * @returns 
 */
// o(n) time & space --> 0.087 ms
function inorderTraversal_recursion(root: inOrderTravNode | null, arr: number[] = []): number[] {
    
    if(!root) return [];
    
    root.left && inorderTraversal_recursion(root.left, arr)
    arr.push(root.val);
    root.right && inorderTraversal_recursion(root.right, arr)
    // console.log(arr)
    return arr

};
/**
 * bt/bst inorder traversal - iterative
 * @param root 
 * @returns 
 */
// o(n) time & space --> 0.092 ms 
function inorderTraversal_iter(node: inOrderTravNode): number[]{

    let stack: inOrderTravNode[] = [];
    let res: number[] = [];

    stack.push(node)
    while(stack.length){
        while(node){
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        res.push(node.val);
        node = node.right;
    }
    // console.log(res)
    return res
}

let inOrder: Typings.strNumArrObj = {
    'test1': [1, null, 2, 3 ],
    'test2': [],
    'test3': [ 5, 3, 6, 2, 4 ],
    // 3,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 18, 20, 25
    'test4': [ 11, 7, 15, 5, 9, 13, 20, 3, 6, 8, 10, 12, 14,18, 25 ]
}

let binaryTree = createBinaryTreeFromNumArr(inOrder['test4'] as number[])
utils.timed('test',inorderTraversal_recursion, [binaryTree])
utils.timed('test_iter',inorderTraversal_iter, [binaryTree])