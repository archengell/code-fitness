/**
 * @link https://leetcode.com/problems/find-if-path-exists-in-graph/
 * @description
 * There is a bi-directional graph with n vertices, where each vertex is
 * labeled from 0 to n - 1 (inclusive). The edges in the graph are represented
 * as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a
 * bi-directional edge between vertex ui and vertex vi. Every vertex pair is
 * connected by at most one edge, and no vertex has an edge to itself.
 *
 * You want to determine if there is a valid path that exists from vertex source
 * to vertex destination.
 *
 * Given edges and the integers n, source, and destination, return true if
 * there is a valid path from source to destination, or false otherwise.
 *
 * @param n
 * @param edges
 * @param source
 * @param destination
 * @returns
 */

function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
	if (n === 1 && source === destination) return true;

	const graph: Map<number, number[]> = new Map();
	const visited: Set<number> = new Set();
	let current: number;

	for (let [u, v] of edges) {
		if (!(u in graph)) graph[u] = [];
		if (!(v in graph)) graph[v] = [];
		graph[u].push(v);
		graph[v].push(u);
	}

	let stack: number[] = [source];
	while (stack.length) {
		current = stack.pop();
		for (let neighbor of graph[current]) {
			if (neighbor === destination) return true;
			if (visited.has(neighbor)) continue;
			if (!visited.has(neighbor)) visited.add(neighbor);
			stack.push(neighbor);
		}
	}
	return false;
}
