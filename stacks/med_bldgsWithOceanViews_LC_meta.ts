import * as utils from '../utils';

/**
 * @ref https://leetcode.com/problems/buildings-with-an-ocean-view/description/
 * @description
 * There are n buildings in a line. You are given an integer array
 * heights of size n that represents the heights of the buildings in
 * the line.
 *
 * The ocean is to the right of the buildings.
 * A building has an ocean view if the building can see the ocean without obstructions.
 * Formally, a building has an ocean view if all the buildings to its right have a smaller height.
 * Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.
 * @summary
 * - set max to 0 or -infinity
 * - reverse for-loop
 * - if height > max, max = height, store height idx in res[]
 * - return res[].reverse()
 * @param heights
 * @returns
 */
// o-n-time 108ms >79% | o-n-space >50%
// this is the best sln: same approach recorded by other has 87ms runtime
function bldgsWithOceanViews(heights: number[]): number[] {
	let oceanViews: number[] = [];
	let max = 0;
	// o-n-time
	for (let i = heights.length - 1; i >= 0; i--) {
		if (heights[i] > max) {
			max = heights[i];
			oceanViews.push(i);
		}
	}
	// o-n-time
	return oceanViews.reverse();
}

let oceanViewsTests = {
	test1: [4, 2, 3, 1],
	test2: [4, 3, 2, 1],
	test3: [1, 3, 2, 4],
};

const { test1: test } = oceanViewsTests;

utils.timed('res', bldgsWithOceanViews, [test]);
