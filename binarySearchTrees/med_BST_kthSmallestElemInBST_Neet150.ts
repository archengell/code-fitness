import { BinarySearchTreez } from './a_binarySearchTreeSandbox'
import * as BST from './a_binarySearchTreeSandbox'
import * as BT from '../binaryTrees/a_binaryTreeSandBox'

/**
 * @name medium - BST - Neet150 - Kth Smallest ELement in BST
 * @access https://leetcode.com/problems/kth-smallest-element-in-a-bst/submissions/
 * @description
 * Given the root of a BST, and an integer K, return the Kth smallest 
 * value ( 1-indexed ) of all the values of the nodes in the tree.
 * @example 
 * @summary
 * - perform in-order traverse which is basically a sorted array
 * - then return indexed value by k - 1
 * @param root 
 * @param k 
 */
// time: o(n) | space: o(n)
function kthSmallest(root: BT.IBinaryTree | null, k: number): number {
    
    return inOrderTraverse(root)[k-1]
};


function inOrderTraverse(node: BT.IBinaryTree, arr: number[] = []){
    if(!node) return arr;
    
    node.left && inOrderTraverse(node.left, arr);
    arr.push(node.value);
    node.right && inOrderTraverse(node.right, arr);
    
    return arr;
}

// function kthSmallest_(root: BT.IBinaryTree | null, k: number): number {

//     let inOrder: number[] = BST.inOrderTraversal(root)
//     let filtered: number[] = [];
//     for(let elem of inOrder){
//         if(elem) filtered.push(elem)
//     }
//     let res: number = filtered[k-1] || -1
//     return res
// };

let kthSmallElem1 = {
    'root': [3,1,4,null,2],
    'level': 1
} // 1
let kthSmallElem2 = {
    'root': [5,3,6,2,4,null,null,1],
    'level': 3
}


let tree = new BinarySearchTreez(kthSmallElem2['root'].shift()).createBST(kthSmallElem2['root'])
console.log(kthSmallest(tree, kthSmallElem2['level']))