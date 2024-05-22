import * as utils from '../../utils';

/**
 * @ref https://leetcode.com/problems/valid-word-abbreviation/
 * @description
 * A string can be abbreviated by replacing any number of non-adjacent,
 * non-empty substrings with their lengths. The lengths should not have leading zeros.
 *
 *
 * For example, a string such as "substitution" could be abbreviated as (but not limited to):
 * "s10n" ("s ubstitutio n")
 * "sub4u4" ("sub stit u tion")
 * "12" ("substitution")
 * "su3i1u2on" ("su bst i t u ti on")
 * "substitution" (no substrings replaced)
 *
 * not valid options:
 * "s55n" ("s ubsti tutio n", the replaced substrings are adjacent)
 * "s010n" (has leading zeros)
 * "s0ubstitution" (replaces an empty substring)
 *
 * Given a string word and an abbreviation abbr, return whether the string matches the given abbreviation.
 *
 * CONSTRAINTS:
 * 1 <= word.length <= 20
 * word consists of only lowercase English letters.
 * 1 <= abbr.length <= 10
 * * abbr consists of lowercase English letters and digits.
 *
 * @summary
 * @param {string} word
 * @param {string} abbr
 * @returns
 */
// o-n-time || o-n-space ( creating the numStr, but very small )
// pretty fast => 47ms beats 97.46%
function validWordAbbreviation(word: string, abbr: string): boolean {
	let j = 0;
	let i = 0;
	let numStr = '';

	// track progression in each word
	// o-n-time
	while (i < word.length && j < abbr.length) {
		// check first char matches
		if (!Number(abbr[j])) {
			if (word[i] !== abbr[j]) {
				return false;
			}
		} else if (Number(abbr[j])) {
			// check leading zero edge case
			if (abbr[j] === '0') {
				return false;
			} else {
				numStr = '';
				// determine integer
				while (j < abbr.length && (Number(abbr[j]) || abbr[j] === '0')) {
					numStr += abbr[j];
					j++;
				}
				// where decrease here?
				j--;
			}
			// check if word.length limit has been exceeded
			if (Number(numStr) > 20) {
				return false;
			} else {
				i += Number(numStr) - 1;
			}
		}
		i++;
		j++;
	}
	// o-1-time
	if (i !== word.length || j !== abbr.length) return false;
	return true;
}

let tests = {
	ex1: {
		word: 'internationalization',
		abbr: 'i12iz4n',
	}, // true
	ex2: {
		word: 'apple',
		abbr: 'a2e',
	}, // false
	ex3: {
		word: 'a',
		abbr: '2',
	}, // false
};

const { word, abbr } = tests['ex3'];

utils.timed('res', validWordAbbreviation, [word, abbr]);
