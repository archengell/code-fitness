import { compileFunction } from 'vm';
import { Queue } from '../queues/queueSandBox';
import { Stack } from '../stacks/a_stackSandbox';
import * as typing from '../typing';
import { createAdjList } from './easy_graph_createAdjList';

/**
 * @description
 * Find the largest connected component in an undirected graph
 * @summary
 * @resource
 * Graph Algorithms for Tech Interviews
 * https://www.youtube.com/watch?v=tWVWeAqZ0WU&list=PLjMkA_ZkTgZya9X3riGIQvF0Py3KR4Kzd&index=12&t=15s
 * @param nodes
 * @param edges
 * @param Type
 * @returns
 * a map() of all components with the number of nodes connected...
 */
function largestComponentInGraph<T>(nodes: T[], edges: T[][], Type = Stack): any {
	let initation: string =
		Type === Stack ? 'DFS Iterative initiated...' : 'BFS Interative initiated...';
	console.log(initation);

	let graph: any = createAdjList(edges, nodes);
	let visited = new Map<T, boolean>();
	let connectedComponents = new Map<number, number>();

	let idx: number = 0;

	for (let node of nodes) {
		if (!visited.has(node)) {
			let numOfConnectedComponents: number = 0;
			let stackOrQueue: Stack<T> | Queue<T> = new Type([node]);

			while (stackOrQueue.length()) {
				let current = stackOrQueue.remove();

				for (let neighbor of graph[current]) {
					if (visited.has(neighbor)) continue;
					if (!visited.has(neighbor)) visited.set(neighbor, true);
					stackOrQueue.add(neighbor);
				}
				++numOfConnectedComponents;
			}
			/**
			 * create mapping of each connected component w/ idx and
			 * their # of nodes as value
			 */
			connectedComponents.set(idx, numOfConnectedComponents - 1);
			++idx;
		}
	}
	//find largest components and return how many nodes are connected:
	console.log(Object.values(connectedComponents));
	return connectedComponents;
}

let largestComponentInGraphTest1 = {
	nodes: [0, 1, 2, 3, 4],
	edges: [
		[0, 1],
		[1, 2],
		[3, 4],
	],
}; // output: 2
let largestComponentInGraphTest2 = {
	nodes: [0, 1, 2, 3, 4],
	edges: [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
	],
}; // output: 1

let { nodes, edges } = largestComponentInGraphTest2;

console.time();
console.log(largestComponentInGraph<number>(nodes, edges, Stack));
console.timeEnd();
