import * as utils from '../utils';

/**
 * @ref https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/
 * @description
 * You are given a parentheses string s. In one move, you can insert a
 * parenthesis at any position of the string.
 * @summary
 * - create open closed parenthesis vars
 * - use stack
 * - loop thru,
 * - - if open: push to stack
 * - - else:
 * - - - - if closed & peek = open, pop open from stack ( completes a pair)
 * - - - - else: push closed
 * @param s
 */
// o-n-time 67ms > 14%
function minAddToValidateParentheticPairs(s: string): number {
	// est data to support our logic
	let closeParen = ')';
	let openParen = '(';

	// possibly needed to store and monitor the parenthetical imbalance
	let stack: string[] = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === openParen) {
			// add to stack where it may be removed it matched,
			// or kept as a corrective step
			stack.push(openParen);
		} else {
			// remove from stack because the next closeParen
			// inheritly completes a pair
			if (stack[stack.length - 1] === openParen) {
				stack.pop();
			} else {
				// add to stack bc it'll need be a corrective step
				stack.push(closeParen);
			}
		}
	}

	return stack.length;
}

// my initial non-stack approach... faster o-n-time 64ms >29%
function minAddToMakeValid(s: string): number {
	let openParen = '(';
	let openParens = 0;
	let closeParens = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === openParen) openParens++;
		else {
			if (openParens) openParens--;
			else {
				closeParens++;
			}
		}
	}

	return Math.abs(openParens + closeParens);
}

let minAddToValidateParentheticPairsTests = {
	test1: '())',
	test2: '(((',
	test3: '()))',
};

const { test1: test } = minAddToValidateParentheticPairsTests;

utils.timed('res', minAddToMakeValid, [test]);
