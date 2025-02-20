/**
 * @title number of islands
 * @lc_link https://leetcode.com/problems/number-of-islands/
 * @nc_link https://neetcode.io/courses/dsa-for-beginners/29
 *
 * @param grid
 * @returns
 */

function numIslands(grid: string[][]): number {
	let count = 0;
	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[r].length; c++) {
			if (grid[r][c] === '1') {
				count += 1;
				dfs(grid, r, c);
			}
		}
	}
	return count;
}

function dfs(grid, r, c) {
	const ROWS = grid.length;
	const COLS = grid[0].length;

	if (Math.min(r, c) < 0) return;
	if (r >= ROWS || c >= COLS) return;
	// if(visited.has(`${r}-${c}`)) return
	if (grid[r][c] !== '1') return;

	grid[r][c] = '7';

	//directions
	dfs(grid, r + 1, c);
	dfs(grid, r - 1, c);
	dfs(grid, r, c + 1);
	dfs(grid, r, c - 1);
}
