import * as utils from '../utils';
import { TreeNode, convertArrToBinaryTree } from './easy_BT_createBinaryTree';

/**
 * @leetlink https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * @neet_link https://neetcode.io/problems/lowest-common-ancestor-in-binary-search-tree
 * @description
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 *
 * "The lowest common ancestor is defined between two nodes p and q as the lowest node in T
 * that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 * @summary
 * solution video: https://www.youtube.com/watch?v=gs2LMfuOR9k&t=9s
 *
 * @param root
 * @param p
 * @param q
 */

// o-logn-time 54ms > 98% (best) | o-h-space, h = height of BT
function lowestCommonAncestorDFS(
	root: TreeNode | null,
	p: TreeNode | null,
	q: TreeNode | null
): TreeNode | null {
	if (root === null) return null;
	// post-order traversal
	const leftHasPQ = root.left && lowestCommonAncestorDFS(root.left, p, q);
	const rightHasPQ = root.right && lowestCommonAncestorDFS(root.right, p, q);
	// critical logic!
	if ((leftHasPQ && rightHasPQ) || root.value === p.value || root.value === q.value) return root;

	return leftHasPQ || rightHasPQ;
}
// latest, cleanest, and easiet to understand, BUT doesn't work in LEETCODE for basic cases
function lowestCommonAncestorDfsLatest(
	root: TreeNode | null,
	p: TreeNode | null,
	q: TreeNode | null
): TreeNode | null {
	if (!root || !p || !q) return;

	if (Math.max(p.value, q.value) < root.value) return this.lowestCommonAncestor(root.left, p, q);
	if (Math.min(p.value, q.value) > root.value) return this.lowestCommonAncestor(root.right, p, q);
	return root;
}

// o-n-time 84ms >19% (ng) | o-n-space
function lowestCommonAncestorStack(
	root: TreeNode | null,
	p: TreeNode | null,
	q: TreeNode | null
): TreeNode | null {
	const stack = [root];
	const parentMap = new Map<TreeNode, TreeNode>();
	parentMap.set(root, null);

	// o-n-time
	while (!parentMap.has(p) || !parentMap.has(q)) {
		const node = stack.pop();

		if (node.left) {
			stack.push(node.left);
			// o-n-time
			parentMap.set(node.left, node);
		}

		if (node.right) {
			stack.push(node.right);
			// o-n-time
			parentMap.set(node.right, node);
		}
	}
	// o-n-space
	const ancestors = new Set();
	// o-n-time
	while (p) {
		ancestors.add(p);
		p = parentMap.get(p);
	}
	// o-n-time
	while (!ancestors.has(q)) {
		q = parentMap.get(q);
	}

	return q;
}

let lowestCommonAncestorTests = {
	test1: {
		tree: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
		p: { value: 5, left: null, right: null },
		q: { value: 1, left: null, right: null },
	}, // ans: 3
	test2: {
		tree: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
		p: { value: 5, left: null, right: null },
		q: { value: 4, left: null, right: null },
	}, // ans: 5
	test3: {
		tree: [1, 2],
		p: { value: 1, left: null, right: null },
		q: { value: 2, left: null, right: null },
	}, // ans:
	test4: {
		tree: [11, 7, 15, 5, 9, 13, 20, 3, 6, 8, 10, 12, 14, 18, 25],
		p: { value: 5, left: null, right: null },
		q: { value: 8, left: null, right: null },
	},
};
const { tree, p, q } = lowestCommonAncestorTests['test2'];

utils.timed('lca', lowestCommonAncestorStack, [convertArrToBinaryTree(tree), p, q]);
