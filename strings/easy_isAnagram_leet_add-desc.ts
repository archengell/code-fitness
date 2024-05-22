import * as utils from '../utils';

/**
 * @ref https://leetcode.com/problems/valid-anagram/description/
 * @description
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or
 * phrase, typically using all the original letters exactly once.
 * @param {string} s
 * @param {string} t
 * @returns
 */

// time: On || space: 0n
// cheating => not the greatest, probably preferred solution
function isAnagram(s: string, t: string): boolean {
	if (s.length != t.length) return false;
	return JSON.stringify([...s].sort()) == JSON.stringify([...t].sort());
}
// time: 0n || space: On ** MUCH FASTER! **
function isAnagram_Neet(s: string, t: string) {
	if (s.length !== t.length) return false;

	let first: Array<string | null> = s.split('');
	const second = t.split('');

	for (let i = 0; i < second.length; i++) {
		const element = second[i];

		// reason why time is 0n
		let found = first.indexOf(element);

		if (found !== -1) {
			// nullifys the reference, removing it from subsequent checks
			// key to this logic!
			first[found] = null;
		} else {
			return false;
		}
	}
	return true;
}

// slight deviation from neet version, and faster
function isAnagram3(str1: string, str2: string) {
	if (str1.length !== str2.length) return false;

	const base = [...str1];
	let target = [...str2];

	for (let str of str1) {
		let elem = target.indexOf(str);
		if (elem !== -1) {
			target[elem] = null;
		} else {
			return false;
		}
	}
	return true;
}

let ex1 = {
	s: 'anagram',
	t: 'nagaram',
};
// Output: true

let ex2 = {
	s: 'rat',
	t: 'car',
};
// Output: false

const { s, t } = ex2;

utils.timed('res', isAnagram, [s, t]);
utils.timed('res', isAnagram_Neet, [s, t]);
utils.timed('res', isAnagram3, [s, t]);
