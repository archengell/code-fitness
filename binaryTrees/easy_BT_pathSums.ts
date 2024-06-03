import * as utils from '../utils';
import { convertArrToBinaryTree, TreeNode } from './easy_BT_createBinaryTree';

/**
 * @ref https://leetcode.com/problems/path-sum/description/
 * @description
 * Given the root of a binary tree and an integer targetSum, return true
 * if the tree has a root-to-leaf path such that adding up all the values
 * along the path equals targetSum.
 * @summary
 * recursion
 * - 1. sums = []
 * - 2. res = false
 * - 3. !root return => termination clause
 * 	 4. set up preorder dfs as subfunction
 * - - 4a. add to sum => sum += node.value if node is leaf
 * - - 4b. if sum === target res = true
 * - 5. return res
 * @param root
 * @param targetSum
 * @returns
 */
// o-n-time >46%
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	const sums: number[] = [];
	let res: boolean = false;

	function dfs(node: TreeNode | null, currentSum: number, targetSum: number) {
		if (!node) return;
		currentSum += node.value;
		if (!node.left && !node.right) {
			sums.push(currentSum);
			if (currentSum === targetSum) res = true;
		}

		dfs(node.left, currentSum, targetSum);
		dfs(node.right, currentSum, targetSum);
	}

	dfs(root, 0, targetSum);
	return res;
}

// faster sln 50ms
function hasPathSum1(root: TreeNode | null, targetSum: number): boolean {
	const dfs = (node: TreeNode | null, currentSum: number): boolean => {
		if (!node) return;

		currentSum += node.value;

		if (!node.left && !node.right) {
			return currentSum === targetSum;
		}

		return dfs(node.left, currentSum) || dfs(node.right, currentSum);
	};

	return dfs(root, 0);
}

// interative sln 57ms
function hasPathSum3(root: TreeNode | null, targetSum: number): boolean {
	if (root === null) {
		return false;
	}

	const stack: [TreeNode, number][] = [];
	stack.push([root, root.value]);

	while (stack.length) {
		const [currentNode, currentSum] = stack.pop();

		if (!currentNode.left && !currentNode.right) {
			if (currentSum === targetSum) return true;
		}

		currentNode.right && stack.push([currentNode.right, currentSum + currentNode.right.value]);
		currentNode.left && stack.push([currentNode.left, currentSum + currentNode.left.value]);
	}

	return false;
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
