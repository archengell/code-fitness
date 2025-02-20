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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
	if (!root) return null;
	if (root.val < val) return searchBST(root.right, val);
	if (root.val > val) return searchBST(root.left, val);
	return root;
}

// root = [4, 2, 7, 1, 3];
// val = 2;

// root = [4,2,7,1,3]
// val = 5
