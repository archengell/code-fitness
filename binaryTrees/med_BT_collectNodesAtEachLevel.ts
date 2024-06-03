import * as utils from '../utils';
import { TreeNode, convertArrToBinaryTree } from './easy_BT_createBinaryTree';

function collectNodesAtEachTreeLvl(root: TreeNode | null): number[][] {
	// first edge case resolved
	if (!root) return [];
	// set up the empty queue & array to collect right side view of node vals
	let queue: TreeNode[] = [];
	let rightSideView: number[] = [];
	// create an array to store nodes grouped by level
	let lvl = 0;
	let nodesAtLvl: number[][] = [];
	let node: TreeNode;
	// initiate queue with root
	queue.push(root);
	// initial loop => o-n-time
	while (queue.length) {
		let numOfNodesAtLvl = queue.length;
		nodesAtLvl[lvl] = [];
		for (let i = 0; i < numOfNodesAtLvl; i++) {
			let node = queue.shift();
			nodesAtLvl[lvl].push(node.value);
			// if (i === numOfNodesAtLvl - 1) rightSideView.push(node.value);
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
		rightSideView.push(node.value);
		lvl++;
	}
	// test1 => [ [ 1 ], [ 2, 3 ], [ 5, 4 ] ]
	return nodesAtLvl;
}

let rightSideView_tests = {
	test1: [1, 2, 3, null, 5, null, 4], //[1,3,4]
	test2: [1, null, 3], //[1,3]
};

let bst = convertArrToBinaryTree(rightSideView_tests['test1']);
console.log(JSON.stringify(bst, null, 4));
utils.timed('rightSideView', collectNodesAtEachTreeLvl, [bst]);
