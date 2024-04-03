import * as utils from '../utils';

/**
 * @info medium - AlgoExpert
 * @access
 * @description  DAG cycle detection
 * @param {number[][]} edges
 * @returns {boolean}
 * @summary
 *      1. direction-node_stk => [direction, node]
 *      2. init color_arr w/ white
 *      3. init stk.push(enter, 0)
 *      2. while loop -dfs_iter
 *      4. if direction = exit, color = blk
 *      3. else clr=gry, stk.push() then for-loop nabr of edges: if gry return true
 * @complexity time: o(e+n) | space: o(e+n)
 */

function hasCycle(edges: number[][]): boolean {
	// this should be converted to the color method used in courseSchedule!
	let stack: [string, number][] = [];
	let color: string[] = new Array(edges.length).fill('white');

	stack.push(['enter', 0]);

	while (stack.length) {
		let [direction, node] = stack.pop();
		if (direction === 'exit') {
			color[node] = 'black';
		} else {
			color[node] = 'grey';
			stack.push(['exit', node]);
			for (let neighbor of edges[node]) {
				if (color[neighbor] === 'grey') {
					return true;
				} else if (color[neighbor] === 'white') {
					stack.push(['enter', neighbor]);
				}
			}
		}
	}
	return false;
}

/**
 * @summary
 *      1. write _dfs(iterative) helperfunc
 *      2. _dfs: if edges[current].includes node => true
 *      3. for-loop edges: if _dfs ? true : false
 * @complexity time: o(e+n)*n | space: o(1)
 */
function hasCycle_v2(edges: number[][]): boolean {
	let _dfs = (edges, node) => {
		let stack: number[] = [];
		let visited = new Map<number, boolean>();
		stack.push(node);
		while (stack.length) {
			let current = stack.pop();
			// if(node in edges[current]) works
			if (edges[current].includes(node)) return true;
			for (let neighbor of edges[current]) {
				if (!visited.has(neighbor)) {
					stack.push(neighbor);
					visited.set(neighbor, true);
				}
			}
		}
		return false;
	};

	for (let node = 0; node < edges.length; node++) {
		if (_dfs(edges, node)) return true;
	}

	return false;
}

let edges1: number[][] = [[1, 3], [2, 3, 4], [0], [], [2, 5], []]; // true
let edges2: number[][] = [[1, 2], [2], []]; // false
let edges3: number[][] = [[1, 2], [2], [1]]; // true
let edges7: number[][] = [[8], [0, 2], [0, 3], [0, 4], [0, 5], [0], [7], [8], [6]]; // true
let edges8: number[][] = [[1], [2, 3, 4, 5, 6, 7], [], [2, 7], [5], [], [4], []]; // false
let edges9: number[][] = [[1], [2, 3, 4, 5, 6, 7], [], [2, 7], [5], [], [4], [0]]; // true
let edges12: number[][] = [[], [0, 3], [0], [1, 2]]; // true

utils.timed('res', hasCycle, [edges12]);
