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
 * Given the root of a binary tree and an integer targetSum, return all root-to-leaf
 * paths where the sum of the node values in the path equals targetSum. Each path
 * should be returned as a list of the node values, not node references.
 *
 * A root-to-leaf path is a path starting from the root and ending at any leaf node.
 * A leaf is a node with no children.
 *
 * @summary
 * - perform sub dfs
 * - create temp branch array accruing vals
 * - sum vals in each traversal
 * - postorder & pop value
 * - if leaf, check if sum === target,
 * - - yes: push tempArr, with node value
 * - - no: return
 * @param root
 * @param targetSum
 * @returns
 */

function pathSum2_latest(root: TreeNode | null, targetSum: number): number[][] {
	let res: number[][] = [];
	let nodePath: number[] = [];
	let sum: number = 0;
	return dfs(root, targetSum, sum, nodePath, res) || [];
}

function dfs(
	node: TreeNode | null,
	targetSum: number,
	sum: number,
	nodePath: number[],
	res: number[][]
): number[][] {
	if (!node) return;

	// populate node path in arr...
	nodePath.push(node.value);
	// aggregation...
	sum += node.value;

	// typ dfs traversal, pop() is critical to retract node path arr!
	node.left && dfs(node.left, targetSum, sum, nodePath, res);
	node.right && dfs(node.right, targetSum, sum, nodePath, res);
	nodePath.pop();

	// logic when node is leaf = critical!
	if (!node.left && !node.right) {
		if (sum === targetSum) {
			res.push([...nodePath, node.value]);
		}
		if (sum > targetSum) return;
	}
	return res;
}

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
	console.log(res);
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

const { root, targetSum } = tc['ex1'];

pathSumII(convertArrToBinaryTree(root), targetSum);
