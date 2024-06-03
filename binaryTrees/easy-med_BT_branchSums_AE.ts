import { convertArrToBinaryTree, TreeNode } from './easy_BT_createBinaryTree';

function branchSums(tree: TreeNode, targetSum: number): number[] {
	//DFS - preorder traversal...
	let nodes: number[] = [];
	let sums: number[] = [];
	let map = new Map<number, number[]>();
	let result: number[][] = [];

	calcBranchSums(tree, 0, sums, nodes, map, result, targetSum);
	console.log(map);
	console.log(result);
	return sums;
}

function calcBranchSums(
	node: TreeNode,
	sum: number,
	sums: number[],
	nodes: number[],
	map: Map<number, number[]>,
	result: number[][],
	targetSum: number
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
		if (newSum === targetSum) result.push(each);
	}

	calcBranchSums(node.left, newSum, sums, nodes, map, result, targetSum);
	calcBranchSums(node.right, newSum, sums, nodes, map, result, targetSum);
	nodes.pop();
}

// console.log(JSON.stringify(convertArrToBinaryTree(tree), null, 4));
let tc = {
	ex1: {
		root: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		targetSum: 18,
	},
};

const { root, targetSum } = tc['ex1'];

branchSums(convertArrToBinaryTree(root), targetSum);
