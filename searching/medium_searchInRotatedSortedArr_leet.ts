/**
 * @ref https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @description
 * @summary
 *
 * @returns
 */
// time: ologn ( 50ms beat 90.3%) space: o1
function search(nums: number[], target: number): number {
	let min = 0;
	let max = nums.length - 1;

	while (min <= max) {
		let mid = Math.floor((min + max) / 2);

		if (target === nums[mid]) return mid;

		if (nums[min] <= nums[mid]) {
			if (target >= nums[min] && target <= nums[mid]) {
				max = mid - 1;
			} else {
				min = mid + 1;
			}
		} else {
			if (target >= nums[mid] && target <= nums[max]) {
				min = mid + 1;
			} else {
				max = mid - 1;
			}
		}
	}
	return -1;
}
