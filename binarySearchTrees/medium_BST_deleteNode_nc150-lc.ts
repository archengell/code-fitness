/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
	return remove(root, key);
}

function remove(root: TreeNode | null, key: number): TreeNode | null {
	if (!root) return null;
	// find node to remove
	if (key === root.val) {
		// case 1: target is a leaf node
		if (!root.left && !root.right) return null;
		// case 2: target has 1 child = swap w/ left or right
		if (!root.left) return root.right;
		if (!root.right) return root.left;
		// case 3: D has left and right subtree
		const minNode = getMin(root.right);
		// shift subtrees to new node
		minNode.left = root.left;
		// delete node
		// note #1
		return root.right;
	} else if (key > root.val) {
		root.right = remove(root.right, key);
	} else {
		root.left = remove(root.left, key);
	}
	return root;
}

function getMin(root: TreeNode | null): TreeNode | null {
	while (root.left !== null) {
		root = root.left;
	}
	return root;
}

/**
 * Note #1:
 * The purpose of this statement is to swap the target node with its right child.
 *  This is done by returning the right child of the target node, effectively
 *  removing the target node from the tree.
 *
 * Here's a step-by-step breakdown of what happens:
 * - The function getMin is called to find the minimum value node in the right subtree of the target node.
 * - The left child of the minimum value node is set to the left child of the target node.
 * - The right child of the target node is returned, effectively replacing the target node with its right child.
 * By returning the right child, the target node is effectively removed from the tree,
 * and its right child becomes the new root of the right subtree.
 *
 * This process is known as "deleting a node with one child" in a binary search tree.
 */
