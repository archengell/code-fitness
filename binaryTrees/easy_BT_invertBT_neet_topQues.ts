import { convertArrToBinaryTree, TreeNode } from './easy_BT_createBinaryTree';

/**
 * @ref
 * @description
 *
 * @param root
 * @returns
 */
function invertBT(root: TreeNode) {
	if (!root) return null;

	let temp: TreeNode = root.left;
	root.left = root.right;
	root.right = temp;

	invertBT(root.left);
	invertBT(root.right);

	return preOrderTraversal(root);
}

function preOrderTraversal(root: TreeNode, arr: number[] = []) {
	if (!root) return;
	arr.push(root.value);
	root.left && preOrderTraversal(root.left, arr);
	root.right && preOrderTraversal(root.right, arr);
	return arr;
}

// better sln
function invertBT1(node: TreeNode) {
	// termination
	if (!node) return [];

	// base
	let temp = node.left;
	node.left = node.right;
	node.right = temp;

	// recursion
	node.left && invertBT1(node.left);
	node.right && invertBT1(node.right);

	return node;
}

let invertBTcase1: number[] = [4, 2, 7, 1, 3, 6, 9];
let invertBTcase2: number[] = [2, 1, 3];
let invertBTcase3: number[] = [];

console.log(invertBT1(convertArrToBinaryTree(invertBTcase2)));
