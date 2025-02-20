import { Queue } from '../queues/queueSandBox';
import { Stack } from '../stacks/a_stackSandbox';
import * as typing from '../typing';
import { createAdjList } from './easy_graph_createAdjList';
import * as utils from '../utils';

/**
 * @name countConnectedComponents - medium - LC323
 * @access https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
 * @description
 * Find the number of connected components in the undirected graph.
 * @resource
 * Graph Algorithms for Tech Interviews
 * https://www.youtube.com/watch?v=tWVWeAqZ0WU&list=PLjMkA_ZkTgZya9X3riGIQvF0Py3KR4Kzd&index=12&t=15s
 * @param {number} nodes number of nodes
 * @param {number[][]} edges array of edges
 * @param Type
 * @returns {number}
 * @summary
 *      1. init graph, stack, visited, count=0
 *      2. iterate thru nodes doing dfs-iter + count
 */
function countConnectedComponents<T>(nodes: any[], edges: any[][]): number {
	// let graph: any = createAdjList(edges, nodes);
	let graph = {};
	for (let edge of edges) {
		const [n1, n2] = edge;
		if (!(n1 in graph)) graph[n1] = [];
		if (!(n2 in graph)) graph[n2] = [];
		graph[n1].push(n2);
		graph[n2].push(n1);
	}
	console.log(graph);
	let visited = new Map<T, boolean>();
	let count: number = 0;
	for (let node of nodes) {
		if (!visited.has(node)) {
			let stack = [node];

			while (stack.length) {
				let current = stack.pop();

				for (let neighbor of graph[current]) {
					if (!visited.has(neighbor)) {
						visited.set(neighbor, true);
						stack.push(neighbor);
					}
				}
			}
			// critical part!:
			// if node hasn't been visited before, it's part of a new component
			count++;
		}
	}
	return count;
}

let connectdCompsTest1 = {
	nodes: [0, 1, 2, 3, 4],
	edges: [
		[0, 1],
		[1, 2],
		[3, 4],
	],
};
// { '0': [ 1 ], '1': [ 0, 2 ], '2': [ 1 ], '3': [ 4 ], '4': [ 3 ] }
// output: 2
let connectdCompsTest2 = {
	nodes: [0, 1, 2, 3, 4],
	edges: [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
	],
};
// { '0': [ 1 ], '1': [ 0, 2 ], '2': [ 1, 3 ], '3': [ 2, 4 ], '4': [ 3 ] }
// output: 1

let { nodes, edges } = connectdCompsTest2;

utils.timed('res', countConnectedComponents, [nodes, edges, Stack]);
