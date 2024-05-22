import * as utils from '../utils';
import { TreeNode, convertArrToBinaryTree } from './easy_BT_createBinaryTree';

/**
 * @ref https://neetcode.io/problems/depth-of-binary-tree
 * @description
 * The depth of a binary tree is defined as the number of nodes along the
 * longest path from the root node down to the farthest leaf node.
 * @summary
 * recursion:
 *  1. set termination clause
 *  2. dfs
 *  3. 1 + max(left, right)
 * iteration
 *  1. set up bfs process
 *  2. set lvl = 0
 *  3. lvl++ after for-loop of queue.length ( each lvl )
 * @param root
 * @returns
 */
// recursion
function maxDepth(root) {
	// termination
	if (!root) return 0;

	// recursion
	let left = this.maxDepth(root.left);
	let right = this.maxDepth(root.right);
	return 1 + Math.max(left, right);
}

// iteration
function maxDepthIter(root: TreeNode, lvl: number = 0) {
	if (!root) return;
	let queue = [root];
	let node: TreeNode;
	while (queue.length) {
		// the var assignment below must happen, or doesn't work
		let nodesAtLlvl = queue.length;
		for (let i = 0; i < nodesAtLlvl; i++) {
			node = queue.shift();
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
		lvl++;
	}
	return lvl;
}

function getTreeDepth(root: TreeNode | null): number {
	return getNodeHeight(root);
}

function getNodeHeight(root: TreeNode) {
	if (!root) {
		return -1;
	} else if (!root.left && !root.right) {
		return 0;
	} else {
		return 1 + Math.max(getNodeHeight(root.left), getNodeHeight(root.right));
	}
}

let getMaxDepthTest1: number[] = [3, 9, 20, null, null, 15, 7];
let test1: number[] = [11, 7, 15, 5, 9, 13, 20, 3, 6, 8, 10, 12, 14, 18, 25];

console.log(getTreeDepth(convertArrToBinaryTree(test1)));
