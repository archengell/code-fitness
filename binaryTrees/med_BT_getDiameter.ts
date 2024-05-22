import { convertArrToBinaryTree, TreeNode } from './easy_BT_createBinaryTree';

/**
 * easy (medium) - leetcode (AlgoExpert) - diameter of a binary tree
 * @ref https://leetcode.com/problems/diameter-of-binary-tree/
 * @description
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any
 * two nodes in a tree.  This path may or may not pass through the root. The length
 * of a path between two nodes is represented by the number of edges between them.
 * @summary
 *  see below
 * @param root
 * @returns
 */
function binaryTreeDiameter(root: TreeNode | null): number {
	let diameter: number = 0;
	/**
	 * @description
	 * gets the height of each node
	 * @summary
	 * !!note!! left,right,&diameter need to be within the getHeight()
	 * scope or it wont work!: they'll return NaN || undefined
	 * - est., set diameter = 0
	 * - get left,right height of nodes
	 * - populate diameter w/ heights
	 * - continually update diameter w/ max route
	 * @param root
	 * @returns
	 */
	const getHeight = (root: TreeNode | null): number => {
		if (!root) return 0;
		let left: number = getHeight(root.left);
		let right: number = getHeight(root.right);
		diameter = Math.max(diameter, left + right);
		// console.log(`node.value: ${root.value}, leftHt: ${left}, rightHt: ${right}, diameter: ${diameter}`)
		return 1 + Math.max(left, right);
	};
	getHeight(root);
	return diameter;
}

let btDiameterTests: {
	ex1: [1, 2, 3, 4, 5];
	ex2: [1, 2];
	ex3: [
		4,
		-7,
		-3,
		null,
		null,
		-9,
		-3,
		9,
		-7,
		-4,
		null,
		6,
		null,
		-6,
		-6,
		null,
		null,
		0,
		6,
		5,
		null,
		9,
		null,
		null,
		-1,
		-4,
		null,
		null,
		null,
		-2
	];
};
const { ex1: ex } = btDiameterTests;
// console.log(convertArrToBinaryTree(btDiameterTest1))
console.log(binaryTreeDiameter(convertArrToBinaryTree(ex)));
