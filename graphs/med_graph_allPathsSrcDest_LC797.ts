import * as utils from '../utils';

/**
 * @name medium - leetcode - all paths from source to target
 * @access https://leetcode.com/problems/all-paths-from-source-to-target/
 * @description
 * Given a directed acyclic graph - DAG - of (n) nodes labeled
 * 0-to-(n-1), find all possible paths from node[0] to node[n-1]
 * and return them in any order.
 *
 * The graph is given as graph[i] is a list of all nodes you can visit
 * from node i, i.e. there is a directed edge from node i to node graph[i][j]
 * @access
 * @param graph
 * @returns {number[][]}
 * @summary
 *      1. {node, path} interface
 *      2. init stack w/ node,path = 0
 *      3. init graph-iter-traversal
 *      4. if node === graph.length-1 push to res
 *      5. traverse neighbors, push mapping to stack
 */

// DFS - Iterative - No need to BACKTRACK! Tracking node...
function allPathsSrcDest(graph: number[][]): number[][] {
	interface IMap {
		node: number;
		path: number[];
	}
	let res: number[][] = [];
	let stack: IMap[] = [];

	stack.push({ node: 0, path: [0] });

	while (stack.length) {
		let { node, path } = stack.pop();
		if (node === graph.length - 1) {
			res.push(path);
		}
		for (let elem of graph[node]) {
			stack.push({ node: elem, path: [...path, elem] });
		}
	}
	return res;
}

function allNodePathsFromParentToLeaf(graph: any): any {
	interface IMap {
		node: number;
		path: number[];
	}
	let res: number[][] = [];
	let stack: IMap[] = [];

	stack.push({ node: 0, path: [0] });

	while (stack.length) {
		let { node, path } = stack.pop();
		if (node === graph.length - 1) {
			res.push(path);
		}
		for (let elem of graph[node]) {
			stack.push({ node: elem, path: [...path, elem] });
		}
	}
	return res;
}

/**
 * DFS - Iterative - No need to BACKTRACK! w/o tracking node... FASTER!
 */
function allPathsSrcDest_2(graph: number[][]): number[][] {
	let res: number[][] = [];
	let stack: number[][] = [];
	let path: number[] = [];

	stack.push([0]);

	while (stack.length) {
		path = stack.pop();
		if (path[path.length - 1] === graph.length - 1) {
			res.push(path);
		}
		for (let elem of graph[path[path.length - 1]]) {
			stack.push([...path, elem]);
		}
	}
	return res;
}

/**
 * RECUSIVE DFS BACKTRACKING APPROACH
 */

/**
 * RECUSIVE TOP-DWN DYNAMIC PROGRAMMING W/ MEMOIZATION
 */

let allPathsSrcDest1 = [[1, 2], [3], [3], []];
let allPathsSrcDest2 = [[4, 3, 1], [3, 2, 4], [3], [4], []];
type node = {
	id: string;
	name: string;
	children?: node[];
};

let test: node = {
	id: '',
	name: 'amenities',
	children: [
		{
			id: '',
			name: 'studio',
			children: [
				{
					id: '',
					name: 'table',
				},
				{
					id: '',
					name: 'mats',
				},
				{
					id: '',
					name: 'equipment',
				},
			],
		},
		{
			id: '',
			name: 'music room',
			children: [
				{
					id: '',
					name: 'av equipment',
				},
			],
		},
		{
			id: '',
			name: 'lounge',
		},
	],
};

utils.timed('res', allPathsSrcDest, [allPathsSrcDest2]);
