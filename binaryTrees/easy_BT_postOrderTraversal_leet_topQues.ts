import * as Typings from '../typing';
import * as utils from '../utils';

/**
 * @ref https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/45551/preorder-inorder-and-postorder-iteratively-summarization/?orderBy=most_votes
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

function postorderTraversal_recursion(root: inOrderTravNode | null, arr: number[] = []): number[] {
	if (!root) return [];

	arr.push(root.val);
	root.left && postorderTraversal_recursion(root.left, arr);
	root.right && postorderTraversal_recursion(root.right, arr);
	console.log(arr);
	return arr;
}

/**
 * @ref https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/1857590/typescript-iterative-simple-easy-to-understand/?q=iterative+typescript&orderBy=most_relevant
 * @param root
 * @param arr
 * @notes left right root
 * @returns
 */
function postorderTraversal_iter1(root: inOrderTravNode | null): number[] {
	let res: number[] = [];
	if (!root) return res;
	let stack: inOrderTravNode[] = [];
	stack.push(root);
	while (stack.length) {
		let cur = stack.pop();
		if (!cur.left && !cur.right) {
			res.push(cur.val);
		} else {
			stack.push(cur);
			if (cur.right) stack.push(cur.right);
			if (cur.left) stack.push(cur.left);
			cur.left = null;
			cur.right = null;
		}
	}
	return res;
}
// function postorderTraversal_iter2(root: inOrderTravNode | null, arr: number[] = []): number[] {

//     let stack: inOrderTravNode[] = [];
//     let res: number[] = [];
//     let node: inOrderTravNode = root;
//     let lastReturn: inOrderTravNode = null
//     while(node || stack.length){
//         if(node){
//             stack.push(node);
//             node = node.left;
//         }else if({

//         }
//         node = stack.pop();
//         if(node){
//             node = node.right;
//             res.push(node.val);
//         }

//         for(let node of rightNodes){
//             res.push(node.val)
//         }

//     }
//     console.log(res)
//     return res

// };

let postOrder: Typings.strNumArrObj = {
	test1: [1, null, 2, 3],
	test2: [],
	test3: [5, 3, 6, 2, 4],
};

let binaryTree = createBinaryTreeFromNumArr(postOrder['test3'] as number[]);
utils.timed('res', postorderTraversal_recursion, [binaryTree]);
utils.timed('res_iter', postorderTraversal_iter1, [binaryTree]);
