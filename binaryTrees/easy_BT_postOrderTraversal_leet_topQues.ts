import * as Typings from '../typing'
import * as utils from '../utils'

//ref: https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/45551/preorder-inorder-and-postorder-iteratively-summarization/?orderBy=most_votes
/**
 * given the root of a binary tree, return inorder traversal 
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

function postorderTraversal_recursion(root: inOrderTravNode | null, arr: number[] = []): number[] {
    
    if(!root) return [];

    root.left && postorderTraversal_recursion(root.left, arr)    
    root.right && postorderTraversal_recursion(root.right, arr)
    arr.push(root.val);

   return arr

};

// left right root
//ref: https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/1857590/typescript-iterative-simple-easy-to-understand/?q=iterative+typescript&orderBy=most_relevant
function postorderTraversal_iter(node: inOrderTravNode | null, arr: number[] = []): number[] {
    
    if(!node) return 
    let stack: inOrderTravNode[] = [];
    let res: number[] = [];

    stack.push(node)
    while(stack.length){
        node = stack.pop()
        if(!node.left && !node.right){
            res.push(node.val)
        }else{
            stack.push(node)
            node.right && stack.push(node.right)
            node.left && stack.push(node.left)
            node.left = null 
            node.right = null
        }
    }
    return res

};


let inOrder: Typings.strNumArrObj = {
    'test1': [1, null, 2, 3],
    'test2': [],
    // 5, 3, 2, 4, 6
    'test3': [ 5, 3, 6, 2, 4], 
    // 3,  6,  5,  8, 10,  9, 7, 12, 14, 13, 18, 25, 20, 15, 11
    'test4': [ 11, 7, 15, 5, 9, 13, 20, 3, 6, 8, 10, 12, 14,18, 25] 
}

let binaryTree = createBinaryTreeFromNumArr(inOrder['test4'] as number[])
utils.timed('res', postorderTraversal_recursion, [binaryTree])
utils.timed('res_iter', postorderTraversal_iter, [binaryTree])