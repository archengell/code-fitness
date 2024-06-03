import * as utils from '../utils';
import { TreeNode, convertArrToBinaryTree } from './easy_BT_createBinaryTree';

/**
 * @ref
 * @description
 * @summary
 * - add cond under termination to store node matching target val
 * - basic postorder traversal
 * - - return res in first stack call
 *
 * @param root
 * @param target
 * @param res
 * @returns
 */
function findNode(root: TreeNode, target: number, res: TreeNode[] = []) {
	if (!root) return;
	if (root.value === target) res.push(root);

	findNode(root.left, target, res);
	findNode(root.right, target, res);
	return res;
}

let findNodeTests = {
	test1: {
		tree: [11, 7, 15, 5, 9, 13, 20, 3, 6, 8, 10, 12, 14, 18, 25],
		target: 9,
	},
	test2: {
		tree: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
		target: 2,
	},
};

const { tree, target } = findNodeTests['test1'];

utils.timed('res', findNode, [convertArrToBinaryTree(tree), target]);
