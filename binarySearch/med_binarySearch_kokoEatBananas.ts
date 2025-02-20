/**
 * @nc_link https://leetcode.com/problems/koko-eating-bananas/
 * @param piles
 * @param h
 * @returns
 */
function minEatingSpeed(piles, h) {
	let min = 1;
	let max = Math.max(...piles);
	let rate = max;

	while (min < max) {
		let mid = Math.floor((min + max) / 2);
		if (calcHrs(piles, mid) > h) {
			min = mid + 1;
		} else {
			rate = mid;
			max = mid - 1;
		}
	}
	return rate;
}

function calcHrs(piles, rate) {
	let hrs = 0;
	for (let pile of piles) {
		hrs += Math.ceil(pile / rate);
	}
	return hrs;
}
