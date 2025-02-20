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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
	return recursive(root, val);
	return iterative(root, val);
}

function recursive(root: TreeNode | null, val: number): TreeNode | null {
	if (!root) return new TreeNode(val);
	if (val > root.val) {
		root.right = insertIntoBST(root.right, val);
	} else {
		root.left = insertIntoBST(root.left, val);
	}
	return root;
}

/**
 * @description
 * We use two pointers, one that search the right place in the tree, and the
 * other one that points to the previous node. When the first pointer reaches
 * a dead-end, the second one will be the parent (congratulations!) of the new node.
 * For an empty tree, we just return the new node.
 * @param root
 * @param val
 * @returns
 */
function iterative(root: TreeNode | null, val: number): TreeNode | null {
	let node = new TreeNode(val);
	if (!root) return node;

	let current = root;
	let prev = null;

	// searching for vacant spot
	while (current) {
		prev = current;
		if (val < current.val) {
			current = current.left;
		} else {
			current = current.right;
		}
	}

	// once found assign which side of tree
	if (val < prev.val) {
		prev.left = node;
	} else {
		prev.right = node;
	}
	return root;
}
