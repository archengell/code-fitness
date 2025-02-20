/**
 * @link https://leetcode.com/problems/minimum-size-subarray-sum/
 * @description
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray
 * of nums such that the sum of all elements of the subarray equals target. If there is no such subarray, return 0 instead.
 * @examples
 * Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 * Input: target = 4, nums = [1,4,4]
 * Output: 1
 * @summary
 * - sliding window approach
 * @notesfiiid
 * note A
 * We initialize sum = nums[r] to start the sliding window
 * with the first element. In this approach, we maintain a
 * running sum of the elements within the window, starting
 * with the first element and expanding the window to the
 * right by adding more elements. Setting sum = nums[r]
 * effectively starts the window with the first element,
 * allowing us to expand it by adding elements to the right.
 * Without this initialization, we'd start with an empty
 * window, making the first iteration nonsensical.
 * For instance, if nums = [2, 3, 1, 2, 4, 3], initializing
 * sum = nums[r] starts with sum = 2, enabling us to expand
 * the window by adding 3, 1, etc. This is a common pattern
 * in sliding window algorithms, starting with a single
 * element and expanding as needed.
 * @param target
 * @param nums
 * @returns
 */
function minSubArrayLen(target: number, nums: number[]): number {
	let l = 0;
	let r = 0;
	let sum = nums[r]; // note A
	let min = Infinity;
	while (r < nums.length) {
		if (sum >= target) {
			min = Math.min(r - l + 1, min);
			sum -= nums[l];
			l++;
		} else {
			r++;
			sum += nums[r];
		}
	}
	return min !== Infinity ? min : 0;
}
