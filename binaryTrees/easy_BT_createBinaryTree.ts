export class TreeNode {
	public value: number;
	public left: TreeNode | null;
	public right: TreeNode | null;

	/**
	 * @description
	 * @summary very important to set up the parameters w/ nullish coalescense
	 *  - ?? - or else it'll always return undefined.
	 * @param value
	 * @param left
	 * @param right
	 */
	constructor(value?: number | null, left?: TreeNode | null, right?: TreeNode | null) {
		this.value = value ?? null;
		this.left = left ?? null;
		this.right = right ?? null;
	}
}

export function convertArrToBinaryTree(array: number[], value: number = 0): TreeNode {
	if (value < array.length) {
		let root: TreeNode = new TreeNode(array[value]);
		root.left = convertArrToBinaryTree(array, 2 * value + 1);
		root.right = convertArrToBinaryTree(array, 2 * value + 2);
		return root;
	}
}

let createBinaryTreeArr1: number[] = [3, 9, 20, null, null, 15, 7];

// console.log(convertArrToBinaryTree(createBinaryTreeArr1))
