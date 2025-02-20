import * as utils from '../utils';

/**
 * @ref https://leetcode.com/problems/baseball-game/
 * @description
 * You are keeping the scores for a baseball game with strange rules.
 * At the beginning of the game, you start with an empty record.
 *
 * You are given a list of strings operations, where operations[i] is the
 * ith operation you must apply to the record and is one of the following:
 * - an integer x = record a new score of x
 * - '+' = record a score that is the sum of the previous two scores
 * - 'D' = record a new score that is the double of the previous score
 * - 'C' = invalidate the previous score: removing it from the record
 * return the sum of all the scores on the record after applying all the operations
 * @summary
 * @param operations
 */
// o-n-time 49ms >95% | o-n-space >75%
function calPoints(operations: string[]): number {
	let scores: number[] = [];

	// o-n-time
	for (let i = 0; i < operations.length; i++) {
		switch (true) {
			case operations[i] === '+':
				scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
				break;
			case operations[i] === 'D':
				scores.push(scores[scores.length - 1] * 2);
				break;
			case operations[i] === 'C':
				scores.pop();
				break;
			default:
				scores.push(parseInt(operations[i]));
		}
	}
	// o-n-time
	return scores.reduce((a, b) => a + b, 0);
}

let calPointsTest = {
	test1: ['5', '2', 'C', 'D', '+'],
	test2: ['5', '-2', '4', 'C', 'D', '9', '+', '+'],
	test3: ['1', 'C'],
};

const { test2: test } = calPointsTest;

utils.timed('res', calPoints, [test]);
