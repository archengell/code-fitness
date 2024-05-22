import * as utils from '../../utils';
/**
 * @ref https://leetcode.com/problems/longest-repeating-character-replacement/
 * @description
 * You are given a string s and an integer k.
 * You can choose any character of the string and change it to any
 * other uppercase English character. You can perform this operation
 * at most k times.
 *
 * Return the length of the longest substring containing the same
 * letter you can get after performing the above operations.
 *
 * Example 1:
 * Input: s = "ABAB", k = 2
 * Output: 4
 * Explanation: Replace the two 'A's with two 'B's or vice versa.
 * @summary
 * @param s
 * @param k
 */
// time: o-n  space: o-n => beat 36.5% @ 93ms
function characterReplacement(s: string, k: number): number {
	let res = 0;
	let charMap = new Map<string, number>();
	let left = 0;
	let maxFreqChar = 0;

	for (let right = 0; right < s.length; right++) {
		charMap.set(s[right], (charMap.get(s[right]) || 0) + 1);
		maxFreqChar = Math.max(maxFreqChar, charMap.get(s[right]));

		// validate window
		if (right - left + 1 - maxFreqChar > k) {
			// decrease char freq in window
			charMap.set(s[left], charMap.get(s[left]) - 1);
			// remove char from map if it's at zero
			if (charMap.get(s[left]) === 0) charMap.delete(s[left]);
			left++;
		}

		res = Math.max(res, right - left + 1);
	}
	return res;
}

// revised sln that beats 94.4%
function characterReplacement_v1(s: string, k: number): number {
	let res = 0;
	let charMap = new Map<string, number>();
	let left = 0;
	let maxFreqChar = 0;

	for (let right = 0; right < s.length; right++) {
		charMap[s[right]] = (charMap[s[right]] || 0) + 1;
		maxFreqChar = Math.max(maxFreqChar, charMap[s[right]]);

		// validate window
		if (right - left + 1 - maxFreqChar > k) {
			// decrease char freq in window
			charMap[s[left]]--;
			// remove char from map if it's at zero
			left++;
		}

		res = Math.max(res, right - left + 1);
	}
	return res;
}

// 58ms beats > 97%
function characterReplacement_Op(s: string, k: number): number {
	let l = 0;
	let ret = 0;
	let maxFreq = 0;
	let count = new Map<string, number>();

	for (let r = 0; r < s.length; r++) {
		count[s[r]] = 1 + (count[s[r]] || 0);

		maxFreq = Math.max(maxFreq, count[s[r]]);

		while (r - l + 1 - maxFreq > k) {
			count[s[l]]--;
			l++;
		}
		ret = Math.max(ret, r - l + 1);
	}

	return ret;
}

const tests = {
	ex2: {
		str: 'AABABBA',
		k: 1,
	},
	ex1: {
		str: 'ABAB',
		k: 2,
	},
};

const { str, k } = tests['ex2'];

utils.timed('res', characterReplacement, [str, k]);
