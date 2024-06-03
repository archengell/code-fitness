import * as utils from '../utils';
import { convertArrToBinaryTree, TreeNode } from './easy_BT_createBinaryTree';

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     value: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(value?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.value = (value===undefined ? 0 : value)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * @ref https://leetcode.com/problems/path-sum-ii/
 * @description
 *
 * @summary
 * - perform sub dfs
 * - create temp branch array accruing vals
 * - sum vals in each traversal
 * - postorder & pop val
 * - if leaf, check if sum === target,
 * - - yes: push tempArr, with node val
 * - - no: return
 * @param root
 * @param targetSum
 * @returns
 */

// o-n-time >74% | o-n-space >70%
function pathSumII(root: TreeNode | null, targetSum: number): number[][] {
	// set up req variables
	let res: number[][] = [];
	let temp: number[] = [];

	// based on the requirements, dfs is most suitable
	function dfs(node: TreeNode, currSum: number, targetSum: number) {
		// termination clause
		if (!node) return;

		// create branch array, push value
		temp.push(node.value);
		// sum node value to check against targetSum
		currSum += node.value;

		// postorder traversal & pop value
		// recursion creates a stack
		node.left && dfs(node.left, currSum, targetSum);
		node.right && dfs(node.right, currSum, targetSum);
		temp.pop();

		// conditions when node is a leaf
		if (!node.left && !node.right) {
			if (currSum === targetSum) {
				res.push([...temp, node.value]);
				return;
			}
			if (currSum > targetSum) {
				return;
			}
		}
	}
	dfs(root, 0, targetSum);
	return res;
}

// iterative approach

function pathSumII_iter(root: TreeNode | null, targetSum: number): number[][] {
	return;
}

let tc = {
	ex1: {
		root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
		targetSum: 22,
	},
	e2: {
		root: [1, 2, 3],
		targetSum: 5,
	},
	e3: {
		root: [1, 2],
		targetSum: 0,
	},
};
