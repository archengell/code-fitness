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
 * - Set left / right pointer, using the min height as base
 * - if left height is less than right, increase left
 * - if right height is less then or equal to left decrease right
 * - each iteration record area, keeping the max
 *
 * @param height
 */
function maxArea(heights: number[]): number {
	let left = 0;
	let right = heights.length - 1;

	let res = 0;

	while (left < right) {
		let maxHt = Math.min(heights[left], heights[right]);
		let currWidth = Math.abs(left - right);
		res = Math.max(res, maxHt * currWidth);
		if (heights[left] > heights[right]) {
			right--;
		} else if (heights[left] < heights[right]) {
			left++;
		} else {
			right--;
		}
	}
	return res;
}

const ex1 = {
	heights: [1, 8, 6, 2, 5, 4, 8, 3, 7],
};
const ex2 = {
	heights: [1, 1],
};

const { heights } = ex1;

utils.timed('res', maxArea, [heights]);
