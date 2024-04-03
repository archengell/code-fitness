import * as Typings from '../typing';
import * as utils from '../utils';

/**
 * given the root of a binary tree, return inorder traversal
 * of it's node values
 *
 *
 */

class inOrderTravNode {
	val: number;
	left: inOrderTravNode | null;
	right: inOrderTravNode | null;
	constructor(val?: number, left?: inOrderTravNode | null, right?: inOrderTravNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

/**
 * @description creates BT from number[]
 * @param node starts as root, then subsequent tree nodes
 * @returns tree
 * @summary ???
 */
function createBinaryTreeFromNumArr(values: number[], i: number = 0) {
	if (i < values.length) {
		let node: inOrderTravNode = new inOrderTravNode(values[i]);
		node.left = createBinaryTreeFromNumArr(values, 2 * i + 1); // 1 3 5 7 ...
		node.right = createBinaryTreeFromNumArr(values, 2 * i + 2); // 2 4 6 8 ...
		return node;
	}
}

function preorderTraversal(root: inOrderTravNode | null, arr: number[] = []): number[] {
	if (!root) return [];

	arr.push(root.val);
	root.left && preorderTraversal(root.left, arr);
	root.right && preorderTraversal(root.right, arr);
	return arr;
}

function preorderTraversal_iter(node: inOrderTravNode | null, arr: number[] = []): number[] | void {
	if (!node) return;
	let stack: inOrderTravNode[] = [];
	let res: number[] = [];

	stack.push(node);
	while (stack.length) {
		if (node) {
			node = stack.pop();
			res.push(node.val);
			node.right && stack.push(node.right);
			node.left && stack.push(node.left);
		}
	}
	return res;
}

let preOrder: Typings.strNumArrObj = {
	test1: [1, null, 2, 3],
	test2: [],
	// 5, 3, 2, 4, 6
	test3: [5, 3, 6, 2, 4],
	// 11,  7,  5,  3,  6,  9, 8, 10, 15, 13, 12, 14, 20, 18, 25
	test4: [11, 7, 15, 5, 9, 13, 20, 3, 6, 8, 10, 12, 14, 18, 25],
};

let binaryTree = createBinaryTreeFromNumArr(preOrder['test4'] as number[]);
utils.timed('res', preorderTraversal, [binaryTree]);
utils.timed('res_iter', preorderTraversal_iter, [binaryTree]);
