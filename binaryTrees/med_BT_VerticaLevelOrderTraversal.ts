import { convertArrToBinaryTree, TreeNode } from './easy_BT_createBinaryTree';
import * as utils from '../utils';

/**
 * @name 314.BinaryTreeVerticalOrderTraversal - medium - neet150
 * @description Given the root of a binary tree, return the vertical
 * order traversal of its nodes' values. (i.e., from top to bottom,
 * column by column).
 * @access https://leetcode.com/problems/binary-tree-vertical-order-traversal/description/
 * @example
 *      1
 *    /   \
 *   2     3
 *    \     \
 *     5     4
 * input: node = [1, 2, 3, null, 5, null, 4]
 * output: [[2], [1,5], [3], [4]]
 * @steps
 * ref: https://leetcode.com/problems/binary-tree-vertical-order-traversal/solutions/4637553/typescript-bfs-step-by-step/
 * -
 * @param { TreeNode } node
 * @summary
 * @returns {number[][]}
 */

function verticalOrder(root: TreeNode | null): number[][] {
	if (!root) return [];
	let queue: [TreeNode, number][] = [[root, 0]];
	let minCol = 0;
	let maxCol = 0;
	let map = new Map<number, number[]>();
	while (queue.length) {
		let [node, colIdx] = queue.shift();
		if (!map.has(colIdx)) map.set(colIdx, []);

		minCol = Math.min(minCol, colIdx);
		maxCol = Math.max(maxCol, colIdx);

		node.value && map.get(colIdx).push(node.value);

		node.left && queue.push([node.left, colIdx - 1]);
		node.right && queue.push([node.right, colIdx + 1]);
	}
	let res = [];
	for (let i = minCol; i <= maxCol; i++) {
		res.push(map.get(i));
	}
	return res;
}

let verticalOrder_tests = {
	test1: [3, 9, 20, null, null, 15, 7], // [[9],[3,15],[20],[7]]
	test2: [3, 9, 8, 4, 0, 1, 7], // [[4],[9],[3,0,1],[8],[7]]
	test3: [3, 9, 8, 4, 0, 1, 7, null, null, null, 2, 5], // [[4],[9,5],[3,0,1],[8,2],[7]]
};

const { test1: test } = verticalOrder_tests;

let bst = convertArrToBinaryTree(test);
utils.timed('verticalOrder', verticalOrder, [bst]);
