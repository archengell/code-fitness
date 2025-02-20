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

/**
 * @ref
 * @descripton
 * Given the root node of a binary search tree and two integers low and high,
 * return the sum of values of all nodes with a value in the inclusive range [low, high].
 * ex1
 * input: root = [10,5,15,3,7,null,18], low = 7, high = 15
 * output: 32
 * explain: 7+10+15 = 32
 * ex2
 * input:  root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
 * output: 23
 * explain:  6 + 7 + 10 = 23.
 * @summary
 *  - use level-order, bfs approach ( queue ) in sub-function
 *  - update sum with any node.val within given high-low range
 *  - return sum
 * @param root
 * @param low
 * @param high
 * @returns
 */

// o-n-time (139ms >58%)
// o-1-space (78mb >59%)
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
	return bfs(root, low, high, 0);
}

// level order
function bfs(node: TreeNode | null, low: number, high: number, sum: number) {
	let queue: TreeNode[] = [];
	queue.push(node);
	while (queue.length) {
		let node = queue.shift();
		let { val } = node;
		if (val >= low && val <= high) sum += val;
		node.left && queue.push(node.left);
		node.right && queue.push(node.right);
	}
	return sum;
}

// faster approach 136ms
// same logic just didn't create a sub-function
function rangeSumBST1(root: TreeNode | null, low: number, high: number): number {
	if (root === null) return 0;

	const queue = [root];

	let sum = 0;
	while (queue.length > 0) {
		const node = queue.shift();

		if (node.left) queue.push(node.left);
		if (node.right) queue.push(node.right);

		if (node.val >= low && node.val <= high) {
			sum += node.val;
		}
	}

	return sum;
}

// faster, recursive approach 139ms
function rangeSumBST2(root: TreeNode | null, low: number, high: number): number {
	if (root === null) {
		return 0;
	}

	let sum = 0;

	if (root.val >= low && root.val <= high) {
		sum += root.val;
	}

	if (root.val > low) {
		sum += rangeSumBST2(root.left, low, high);
	}

	if (root.val < high) {
		sum += rangeSumBST2(root.right, low, high);
	}

	return sum;
}

// traditional DFS-recursive approach 148ms
function rangeSumBST3(root: TreeNode | null, low: number, high: number): number {
	let sum: number = 0;

	const dfs = (node: TreeNode) => {
		if (!node) return;
		if (node.val >= low && node.val <= high) sum += node.val;
		if (node.left) dfs(node.left);
		if (node.right) dfs(node.right);
	};
	dfs(root);
	return sum;
}
// version without helper function...
function rangeSumBST4(root: TreeNode | null, low: number, high: number): number {
	let sum = 0;
	if (!root) return sum;

	if (root.val >= low && root.val <= high) {
		sum += root.val;
	}

	sum += rangeSumBST4(root.left, low, high);
	sum += rangeSumBST4(root.right, low, high);

	return sum;
}
