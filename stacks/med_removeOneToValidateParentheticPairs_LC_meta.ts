import * as utils from '../utils';

/**
 * @ref https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/
 * @description
 * @summary
 * @param s
 * @returns
 */
// o-n-time 83ms >59% (ok) | o-n-space
function removeOneToValidateParentheticPairs(s: string): string {
	const parenthesisMap = { '(': ')' };
	const store: number[] = [];
	let res = s.split('');

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			store.push(i);
		}
		if (s[i] === ')') {
			if (store.length && s[store[store.length - 1]] === '(') {
				store.pop();
			} else {
				store.push(i);
			}
		}
	}
	for (let idx of store) res[idx] = '';
	return res.join('');
}

let removeOneToValidateParentheticPairsTests = {
	test1: 'lee(t(c)o)de)',
	test2: 'a)b(c)d',
	test3: '))((',
};

const { test1: test } = removeOneToValidateParentheticPairsTests;

utils.timed('res', removeOneToValidateParentheticPairs, [test]);
