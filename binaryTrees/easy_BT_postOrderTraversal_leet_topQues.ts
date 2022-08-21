import * as Typings from '../typing'
import * as utils from '../utils'


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

    arr.push(root.val);
    root.left && postorderTraversal_recursion(root.left, arr)    
    root.right && postorderTraversal_recursion(root.right, arr)
    console.log(arr)
    return arr

};


function postorderTraversal_iter(root: inOrderTravNode | null, arr: number[] = []): number[] {
    
    let stack: inOrderTravNode[] = [];
    let res: number[] = [];
    let node: inOrderTravNode = root;
    let lastReturn: inOrderTravNode = null
    while(node || stack.length){
        if(node){
            stack.push(node);
            node = node.left;
        }else if({

        }
        node = stack.pop();
        if(node){
            node = node.right;
            res.push(node.val);
        }

        for(let node of rightNodes){
            res.push(node.val)
        }

    }
    console.log(res)
    return res

};


let inOrder: Typings.strNumArrObj = {
    'test1': [1, null, 2, 3],
    'test2': [],
    'test3': [ 5, 3, 6, 2, 4]
}

let binaryTree = createBinaryTreeFromNumArr(inOrder['test3'] as number[])
utils.timed('res', postorderTraversal_iter, [binaryTree])