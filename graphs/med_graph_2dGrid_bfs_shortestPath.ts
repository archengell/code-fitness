import * as utils from '../utils';

/**
 * You are given a binary matrix Grid where 0s represent land and
 * 1s represent rocks that can not be traversed.
 *
 * Return the length of the shortest path from the top-left corner
 * of Grid to the bottom-right corner such that all traversed cells
 * are land cells. You may only move vertically or horizontally
 * through land cells.
 *
 * Note:
 * If there is no such path, return -1.
 * The length of a path is the number of moves from the starting
 * cell to the ending cell.
 *
 * Example 1:
 * Input: grid = [
 *   [0, 0, 0, 0],
 *   [1, 1, 0, 0],
 *   [0, 0, 0, 1],
 *   [0, 1, 0, 0]
 * ]
 * Output: 6
 */

/**
 * @source https://neetcode.io/problems/matrixBFS
 * @param grid
 * @returns
 */
const shortestPathBinaryMatrix = (grid: number[][]): number => {
	// init edge case
	const ROWS = grid.length;
	const COLS = grid[0].length;
	if (grid[0][0] === 1) return -1;

	let visited = new Set();
	let queue = [[0, 0]];
	visited.add('0,0');

	let length = 0;
	while (queue.length) {
		let size = queue.length;
		for (let i = 0; i < size; i++) {
			const [r, c] = queue.shift();
			// termination condition
			if (r === ROWS - 1 && c === COLS - 1) return length;
			//neighbors/directions
			const NEIGHBORS = [
				[1, 0],
				[-1, 0],
				[0, 1],
				[0, -1],
			];
			for (let neighbor of NEIGHBORS) {
				const [dr, dc] = neighbor;
				let deltaR = r + dr;
				let deltaC = c + dc;
				//traversal conditions
				if (
					Math.min(deltaR, deltaC) < 0 ||
					deltaR === ROWS ||
					deltaC === COLS ||
					grid[deltaR][deltaC] === 1 ||
					visited.has(`${deltaR},${deltaC}`)
				)
					continue;
				queue.push([deltaR, deltaC]);
				visited.add(`${deltaR},${deltaC}`);
			}
		}
		length++;
	}

	return -1;
};

const example = {
	1: [
		[0, 0, 0, 0],
		[1, 1, 0, 0],
		[0, 0, 0, 1],
		[0, 1, 0, 0],
	],
};

utils.timed('res', shortestPathBinaryMatrix, [example[1]]);
