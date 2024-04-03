import { BST } from '../binarySearchTrees/a_binarySearchTreeSandbox'
import * as utils from '../utils'


// Definition for a binary tree node.
 class validateBST {
     value: number
     left: validateBST | null
     right: validateBST | null
     constructor(val?: number, left?: validateBST | null, right?: validateBST | null) {
         this.value = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
 


/**
 * @name isValidBST - medium - algoExpert/leet
 * @access https://leetcode.com/problems/validate-binary-search-tree/
 * @description 98. validate bst
 * @example
 * @param root 
 * @summary
 * @returns 
 */
// o(n) time + space
function isValidBST(root: validateBST | null): boolean {

    const _validateNode = (node: validateBST | null, left: number, right: number): boolean => {

        if(node === null) return true;
        if(node.value <= left || node.value >= right) return false;
        let validleft = _validateNode(node.left, left, node.value);
        let validRight = _validateNode(node.right, node.value, right);
        return (validleft && validRight)
    }

    return _validateNode(root, -Infinity, Infinity)
};

let isValidBST_tests = {
    'test1': [2,2,2], //false
    'test2': [5,1,4,null,null,3,6], //false
    'test3': [1,null,1], //false
}

let bst = new BST(isValidBST_tests['test3'].shift()).createBST(isValidBST_tests['test3'] as number[])
// console.log(bst)
utils.timed('isValidBST', isValidBST, [bst])
