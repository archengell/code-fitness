import * as utils from '../utils';
import { TreeNode, convertArrToBinaryTree } from './easy_BT_createBinaryTree';

/**
 * @name 199_BinaryRightSideView - medium - neet150
 * @description Given the root of a binary tree, imagine yourself standing
 * on the right side of it, return the values of the nodes you can see ordered
 * from top to bottom.
 * @access https://leetcode.com/problems/binary-tree-right-side-view/
 * @example
 *   1 <---        1
 *               /   \
 *   2 <---     2     3
 *             / \   / \
 *     <---       5     4
 * ** note: ' ' = null
 * input: node = [1, 2, 3, null, 5, null, 4]
 * output: [1, 3, 4]
 * @param { TreeNode } node
 * @summary o(n) time + 0(d) space: d = diameter of BT ~ n/2 (balanced)
 * @returns {number[]}  array of the node values viewed from the right
 */
// o-n-time (60ms > 72%) | o-n-space (52mb >33%)
function leftSideViewBFS(root: TreeNode | null): (string | number | null)[] {
	if (!root) return [];

	let queue: TreeNode[] = [root];
	let leftSideNodes: number[] = [];
	let node: TreeNode;
	while (queue.length) {
		let numOfNodesAtLvl = queue.length;
		for (let i = 0; i < numOfNodesAtLvl; i++) {
			node = queue.shift();
			// reverse order to switch sideview: for iterative, last line dictates side
			node.right && queue.push(node.right);
			node.left && queue.push(node.left);
		}
		leftSideNodes.push(node?.value ?? null);
	}
	return leftSideNodes;
}

// o(n) time + o(h) space: h = height of BT, h = n (worst-case)
function leftSideViewDFS(node: any | null): number[] {
	let leftSideNodes: number[] = [];

	let _dfs = (node: any, level: number = 0) => {
		if (!node) return [];
		if (level === leftSideNodes.length) leftSideNodes.push(node.value);
		// first line below dictates which side of tree is shown
		// opposite from iterative approach because it's recursive === stack logic LIFO
		_dfs(node.left, level + 1);
		_dfs(node.right, level + 1);
	};
	_dfs(node);
	return leftSideNodes;
}

let rightSideView_tests = {
	test1: [1, 2, 3, null, 5, null, 4], //[1,3,4]
	test2: [1, null, 3], //[1,3]
	test3: [11, 7, 15, 5, 9, 13, 20, 3, 6, 8, 10, 12, 14, 18, 25], // default true from LoaineGronier
};

let bt = convertArrToBinaryTree(rightSideView_tests['test3']);
console.log(JSON.stringify(bt, null, 4));
utils.timed('leftSideViewBFS', leftSideViewDFS, [bt]);
