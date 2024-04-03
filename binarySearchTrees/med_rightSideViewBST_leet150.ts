import * as BT from '../binaryTrees/easy_BT_createBinaryTree';
import * as utils from '../utils';

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
 * @param {BT.CreateBTNode} node
 * @summary o(n) time + 0(d) space: d = diameter of BT ~ n/2 (balanced)
 * @returns {number[]}  array of the node values viewed from the right
 */
function rightSideViewBFS(node: BT.CreateBTNode | null): number[] {
	if (!node) return [];

	let queue: BT.CreateBTNode[] = [];
	let rightSideNodes: number[] = [];

	queue.push(node);
	while (queue.length) {
		let numOfNodesAtLvl = queue.length;
		for (let i = 0; i < numOfNodesAtLvl; i++) {
			let node: any = queue.shift();
			if (i === numOfNodesAtLvl - 1) rightSideNodes.push(node.value);
			node.left && queue.push(node.left);
			console.log(node.right && queue.push(node.right));
		}
	}
	return rightSideNodes;
}

// o(n) time + o(h) space: h = height of BT, h = n (worst-case)
function rightSideViewDFS(node: any | null): number[] {
	let rightSideNodes: number[] = [];

	let _dfs = (node: any, level: number = 0) => {
		if (!node) return [];
		if (level === rightSideNodes.length) rightSideNodes.push(node.value);
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

let bst = BT.convertArrToBinaryTree(rightSideView_tests['test2']);
console.log(JSON.stringify(bst, null, 4));
utils.timed('rightSideView', rightSideViewDFS, [bst]);
