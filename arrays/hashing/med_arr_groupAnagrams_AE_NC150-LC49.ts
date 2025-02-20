import * as utils from '../../utils';

/**
 * LEET_UBER & ALGOEXPERT: GROUP ANAGRAMS - MEDIUM
 *
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters
 * of a different word or phrase, typically using all the
 * original letters exactly once.
 *
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 */

/**
 * @name groupAnagrams - medium - AlgoExpert - NC150-LC49
 * @access
 * https://leetcode.com/problems/group-anagrams/
 *
 * @param strs
 * @returns
 */
// o-nlogn-time | o-n-space  > 92% w 109ms
function groupAnagrams(strs: string[]): string[][] {
	let subGrp: string[] = [];
	let subGrps = new Map<string, string[]>();

	// o-n-time
	for (let str of strs) {
		// sort anagram to determine match
		// o-logn-time
		let sortedStr = [...str].sort().join('');
		// need to record the group each time or create new array
		// o-1-time
		subGrp = subGrps.get(sortedStr) || [];
		// push anagram to sub array
		// o-1-time | o-n-space
		subGrp.push(str);
		// set store with updated sub grp
		// o-1-time
		subGrps.set(sortedStr, subGrp);
	}
	// o-n-time
	return [...subGrps.values()];
}

// faster approach ~89ms => same time & space
function groupAnagrams1(strs: string[]): string[][] {
	const map = new Map();
	for (let str of strs) {
		let s = str.split('').sort().join('');
		map.has(s) ? map.set(s, [...map.get(s), str]) : map.set(s, [str]);
	}
	return [...map.values()];
}

// usign obj in place of Map
function groupAnagrams2(strs: string[]): string[][] {
	let subGrp: string[] = [];
	let grp: { [key: string]: string[] } = {};
	for (let str of strs) {
		let key = [...str].sort().join();
		subGrp = grp.hasOwnProperty(key) ? grp[key] : [];
		subGrp.push(str);
		grp[key] = subGrp;
	}
	return Object.values(grp);
}
let grpAnagramTests: { [key: string]: string[] } = {
	test1: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
	test2: ['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp'],
	test3: [],
	test4: ['abc', 'dabd', 'bca', 'cab', 'ddba'],
	test5: ['zxc', 'asd', 'weq', 'sda', 'qwe', 'xcz'],
	test6: ['cinema', 'a', 'flop', 'iceman', 'meacyne', 'lofp', 'olfp'],
	test7: ['yo', 'oy', 'zn'],
};

const { test6 } = grpAnagramTests;

utils.timed('res', groupAnagrams, [test6]);
