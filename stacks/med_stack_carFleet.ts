/**
 * @nc_link https://neetcode.io/problems/car-fleet
 * @param target
 * @param positions
 * @param speeds
 */
function carFleet(target: number, positions: number[], speeds: number[]) {
	let stack = [];
	// 1. create pos,spd pairs in decreasing order
	let pairs = positions.map((pos, idx) => [pos, speeds[idx]]).sort((a, b) => b[0] - a[0]);

	// 2. populate stack with times it takes car to reach target
	// any cars faster (>time) than previous become a fleet and gets popped
	for (let pair of pairs) {
		const [pos, spd] = pair;
		let time = (target - pos) / spd;
		stack.push(time);
		if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) stack.pop();
	}
	return stack.length;
}
