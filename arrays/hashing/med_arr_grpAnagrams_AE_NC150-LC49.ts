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
 * @access https://leetcode.com/problems/group-anagrams/
 * @param strs
 * @returns
 */
function groupAnagrams(strs: string[]): string[][] {
	let anagraMap = new Map<string, string[]>();
	let subGrp: string[];
	let res: string[][];
	for (let str of strs) {
		let sortdStr: string = [...str].sort().join('');
		subGrp = anagraMap.get(sortdStr) || [];
		subGrp.push(str);
		anagraMap.set(sortdStr, subGrp);
	}
	res = Array.from(anagraMap.values());
	console.log(res);
	return res;
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

utils.timed('res', groupAnagrams, [grpAnagramTests['test6']]);
