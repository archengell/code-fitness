import { convertArrToBinaryTree, TreeNode } from './easy_BT_createBinaryTree';

/** Branch Sums - easy */
// time:  | space:

function branchSums(tree: TreeNode): number[] {
	//DFS - preorder traversal...
	let nodes: number[] = [];
	let sums: number[] = [];
	let map = new Map<number, number[]>();

	calcBranchSums(tree, 0, sums, nodes, map);
	console.log(map);

	return sums;
}

function calcBranchSums(
	node: TreeNode,
	sum: number,
	sums: number[],
	nodes: number[],
	map: Map<number, number[]>
) {
	if (!node) return;

	nodes.push(node.value);
	let newSum: number = sum + node.value;

	if (!node.right && !node.left) {
		/**
		 * incredibly important to use Obj.assign()
		 * otherwise the last iteration of nodes
		 * repeats for every map assignment.
		 */
		let each: any = Object.assign([], nodes);
		sums.push(newSum);
		map.set(newSum, each);
	}

	calcBranchSums(node.left, newSum, sums, nodes, map);
	calcBranchSums(node.right, newSum, sums, nodes, map);
	nodes.pop();
}

/**
 * @ref https://leetcode.com/problems/path-sum/description/
 * @description
 * Given the root of a binary tree and an integer targetSum, return true
 * if the tree has a root-to-leaf path such that adding up all the values
 * along the path equals targetSum.
 * @summary
 * recursion
 * - 1. sums = []
 * - 2. res = false
 * - 3. !root return => termination clause
 * 	 4. set up preorder dfs
 * - - 4a. add to sum => sum += node.value if node is leaf
 * - - 4b. if sum === target res = true
 * - 5. return res
 * @param root
 * @param targetSum
 * @returns
 */
// o-n-time >46%
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	const sums: number[] = [];
	let res: boolean = false;

	function dfs(node: TreeNode | null, currentSum: number, targetSum: number) {
		if (!node) return;
		currentSum += node.value;
		if (!node.left && !node.right) {
			sums.push(currentSum);
			if (currentSum === targetSum) res = true;
		}

		dfs(node.left, currentSum, targetSum);
		dfs(node.right, currentSum, targetSum);
	}

	dfs(root, 0, targetSum);
	return res;
}

// faster sln 50ms
function hasPathSum1(root: TreeNode | null, targetSum: number): boolean {
	const dfs = (node: TreeNode | null, currentSum: number): boolean => {
		if (!node) return;

		currentSum += node.value;

		if (!node.left && !node.right) {
			return currentSum === targetSum;
		}

		return dfs(node.left, currentSum) || dfs(node.right, currentSum);
	};

	return dfs(root, 0);
}

// interative sln 57ms
function hasPathSum3(root: TreeNode | null, targetSum: number): boolean {
	if (root === null) {
		return false;
	}

	const stack: [TreeNode, number][] = [];
	stack.push([root, root.value]);

	while (stack.length) {
		const [currentNode, currentSum] = stack.pop();

		if (!currentNode.left && !currentNode.right) {
			if (currentSum === targetSum) return true;
		}

		currentNode.right && stack.push([currentNode.right, currentSum + currentNode.right.value]);
		currentNode.left && stack.push([currentNode.left, currentSum + currentNode.left.value]);
	}

	return false;
}

let tree: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(JSON.stringify(convertArrToBinaryTree(tree), null, 4));

branchSums(convertArrToBinaryTree(tree));
