import * as utils from '../../utils';

/**
 * @ref https://leetcode.com/problems/container-with-most-water/
 * @description
 * You are given an integer array height of length n.
 * There are n vertical lines drawn such that the two endpoints
 * of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container,
 * such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 *
 * @summary
 * This is a two-pointer problem, with a great explanation provide
 * here: https://leetcode.com/problems/container-with-most-water/solutions/5088170/video-two-pointer-solution/
 * and yt video here: https://www.youtube.com/watch?v=-nvQm6f84Yg&t=8s
 * steps
 * - use two pointer approach
 * - set maxArea = 0 ( will be overridden)
 * - est minHit btwn two pointer heights
 * - calculate area, update, and store max
 * - incrementally move boundaries inward as long as left < right
 * - return maxArea
 * @param height
 */

function maxArea(height: number[]): number {
	let l = 0;
	let r = height.length - 1;
	let area = 0;

	while (l < r) {
		area = Math.max(Math.min(height[r], height[l]) * (r - l), area);
		if (height[l] > height[r]) {
			r--;
		} else {
			l++;
		}
	}
	return area;
}
function maxArea2(height: number[]): number {
	// two pointer approach
	let left = 0;
	let right = height.length - 1;
	// establish min maxArea that's certain to be overridden
	let maxArea = 0;
	while (left < right) {
		// establish minHt as height param bc slanting is not permitted
		let minHt = Math.min(height[left], height[right]);
		// calculate area, update, and store maxArea
		maxArea = Math.max(maxArea, (right - left) * minHt);
		// incrementally move the boundaries inward maintain highest height min possible
		if (height[left] > height[right]) {
			right--;
		} else left++;
	}
	return maxArea;
}

const ex1 = {
	heights: [1, 8, 6, 2, 5, 4, 8, 3, 7],
};
const ex2 = {
	heights: [1, 1],
};

const { heights } = ex1;

utils.timed('res', maxArea, [heights]);

function pro(input: number[]) {
	let res = [];
	for (let i = 0; i < input.length; i++) {
		let prod = 1;
		for (let j = 0; j < input.length; j++) {
			if (j !== i) prod *= input[j];
		}
		res.push(prod);
	}
}
