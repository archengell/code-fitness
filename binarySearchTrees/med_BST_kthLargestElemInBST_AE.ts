import { BinarySearchTreez } from './a_binarySearchTreeSandbox'
import * as BST from './a_binarySearchTreeSandbox'
import * as BT from '../binaryTrees/a_binaryTreeSandBox'


let kthLargeElem1 = {
    'root': [3, 1, 4, null, 2],
    'level': 1
}

/**
 * medium - BST - AlgoExpert - Kth Largest ELement in BST
 * @description
 * @summary
 * @param root 
 * @param k 
 */
function kthLargest(root: BT.IBinaryTree | null, k: number): number {
    let res: number;
    let inOrderArr: number[] = []
    inOrderArr = BST.inOrderTraversal(root)
    res = inOrderArr.reverse()[k-1] || -1
    return  res
};

let tree = new BinarySearchTreez(kthLargeElem1['root'].shift()).createBST(kthLargeElem1['root'])

// console.log('tree', tree)

console.log(kthLargest(tree, kthLargeElem1['level']))