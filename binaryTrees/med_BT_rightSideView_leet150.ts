import * as utils from '../utils';
import { TreeNode, convertArrToBinaryTree } from './easy_BT_createBinaryTree';

/**
 * @name 199_BinaryRightSideView - medium - neet150
 * @description Given the root of a binary tree, imagine yourself standing
 * on the right side of it, return the values of the nodes you can see ordered
 * from top to bottom.
 * @access https://leetcode.com/problems/binary-tree-right-side-view/
 * @example
 *      1 ------> 1
 *    /   \
 *   2     3 ---> 3
 *    \     \
 *     5     4 -> 4
 * input: node = [1, 2, 3, null, 5, null, 4]
 * output: [1, 3, 4]
 * @param { TreeNode } node
 * @summary o(n) time + 0(d) space: d = diameter of BT ~ n/2 (balanced)
 * @returns {number[]}  array of the node values viewed from the right
 */
// o-n-time (60ms > 72%) | o-n-space (52mb >33%)
function rightSideViewBFS(root: TreeNode | null): number[] {
	if (!root) return [];

	let queue: TreeNode[] = [root];
	let rightSideNodes: number[] = [];
	let node: TreeNode;
	while (queue.length) {
		let numOfNodesAtLvl = queue.length;
		// leftSideView
		for (let i = 0; i < numOfNodesAtLvl; i++) {
			node = queue.shift();
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
		rightSideNodes.push(node.value);
	}
	return rightSideNodes;
}

// o-n-time (66ms > 59%) | o-n-space (52mb >33%)
function rightSideViewBFS_1(root: TreeNode | null): number[] {
	// first edge case resolved
	if (!root) return [];
	// set and initialize queue with root node
	let queue: TreeNode[] = [root];
	let rightSideView: number[] = [];
	// create an array to store nodes grouped by level
	let lvl = 0;
	let nodesAtLvl: number[][] = [];
	// set up node: critical
	let node: TreeNode;
	// initial loop => o-n-time
	while (queue.length) {
		let numOfNodesAtLvl = queue.length;
		nodesAtLvl[lvl] = [];
		for (let i = 0; i < numOfNodesAtLvl; i++) {
			let node = queue.shift();
			nodesAtLvl[lvl].push(node.value);
			// if (i === numOfNodesAtLvl - 1) rightSideView.push(node.value);
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
		rightSideView.push(node.value);
		lvl++;
	}
	console.log(nodesAtLvl);
	// test1 => [ [ 1 ], [ 2, 3 ], [ 5, 4 ] ]
	return rightSideView;
}

// o(n) time + o(h) space: h = height of BT, h = n (worst-case)
function rightSideViewDFS(node: any | null): number[] {
	let rightSideNodes: number[] = [];

	let _dfs = (node: any, level: number = 0) => {
		if (!node) return [];
		if (level === rightSideNodes.length) rightSideNodes.push(node.value);
		// first line below dictates which side of tree is shown
		_dfs(node.right, level + 1);
		_dfs(node.left, level + 1);
	};
	_dfs(node);
	return rightSideNodes;
}

let rightSideView_tests = {
	test1: [1, 2, 3, null, 5, null, 4], //[1,3,4]
	test2: [1, null, 3], //[1,3]
};

let bst = convertArrToBinaryTree(rightSideView_tests['test2']);
console.log(JSON.stringify(bst, null, 4));
utils.timed('rightSideView', rightSideViewBFS, [bst]);
