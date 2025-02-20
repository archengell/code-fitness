/**
 * @lc_link https://leetcode.com/problems/rotting-oranges/
 * @nc_link https://neetcode.io/problems/rotting-oranges
 * @param grid
 * @returns
 */
function orangesRotting(grid: number[][]): number {
	const ROWS = grid.length;
	const COLS = grid[0].length;
	const NEIGHBORS = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	// storing visited is not necessary here, and removal speeds up runtime
	// let visited = new Set();
	let queue = [];
	let time = 0;
	let fresh = 0;

	// get inventory of fresh and rotten
	for (let r = 0; r < ROWS; r++) {
		for (let c = 0; c < COLS; c++) {
			if (grid[r][c] === 1) fresh++;
			if (grid[r][c] === 2) queue.push([r, c]);
		}
	}

	// 2d grid traversal
	while (queue.length && fresh > 0) {
		let size = queue.length;
		for (let i = 0; i < size; i++) {
			const [r, c] = queue.shift();
			for (let [dr, dc] of NEIGHBORS) {
				let deltaR = r + dr;
				let deltaC = c + dc;
				let curr = `${deltaR},${deltaC}`;

				// traversal guidance
				if (
					Math.min(deltaR, deltaC) < 0 ||
					deltaR > ROWS - 1 ||
					deltaC > COLS - 1 ||
					// visited.has(curr) ||
					grid[deltaR][deltaC] !== 1
				)
					continue;

				// fresh becomes rotten
				fresh--;
				grid[deltaR][deltaC] = 2;
				queue.push([deltaR, deltaC]);
				// visited.add(curr);
			}
		}
		time++;
	}

	return fresh === 0 ? time : -1;
}
