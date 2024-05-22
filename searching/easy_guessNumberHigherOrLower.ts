/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}  leetcode API
 */

function guessNumber(n: number): number {
	let min = 1;
	let max = n;

	while (min <= max) {
		let mid = Math.floor((min + max) / 2);
		if (guess(mid) === -1) {
			max = mid - 1;
		} else if (guess(mid) === 1) {
			min = mid + 1;
		} else {
			return mid;
		}
	}
	return -1;
}
