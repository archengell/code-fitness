/**
 * @leet https://leetcode.com/problems/permutation-in-string/
 * @neet https://neetcode.io/problems/permutation-string
 * @description
 * You are given two strings s1 and s2. Return true if s2 contains a
 * permutation of s1, or false otherwise. That means if a permutation of s1
 * exists as a substring of s2, then return true.
 *
 * Both strings only contain lowercase letters.
 *
 * Example 1:
 *
 * Input: s1 = "abc", s2 = "lecabee"
 * Output: true
 * Explanation: The substring "cab" is a permutation of "abc" and is present
 * in "lecabee".
 *
 * Example 2:
 *
 * Input: s1 = "abc", s2 = "lecaabee"
 * Output: false
 *
 * Constraints:
 * 1 <= s1.length, s2.length <= 1000
 * @param s1
 * @param s2
 * @returns
 */
function checkInclusion(s1: string, s2: string): boolean {
	// store all the values in s1 in a hashmap called target
	const targetHash = {};
	for (const char of s1) targetHash[char] = (targetHash[char] ?? 0) + 1;

	// frequencyChar is used to store characters in window
	let frequencyChar = {};
	for (let windowStart = 0, windowEnd = 0; windowEnd < s2.length; windowEnd++) {
		// increase window size
		const char = s2[windowEnd];
		frequencyChar[char] = (frequencyChar[char] ?? 0) + 1;

		// check if the current window has an anagram of
		// s1. We do this by looping over the targetHash and checking
		// two things:
		// 1- char in target is present in window
		// 2- frequency of char in target is equal to frequency of char in window
		// if the past two conditions are true for every char in target, then we found
		// an anagram (permutation) => return true
		const hasPermutation = Object.entries(targetHash).every(
			([char, frequency]) => frequencyChar[char] === frequency
		);
		if (hasPermutation) return true;

		// we know that length of our window should always be
		// equal to length of s1 (because we are looking for an anagram of s1)
		// so we need to ensure that our window size is always equal to s1.length
		// and we do this by shrinking the window whenever windowEnd is greater
		// than s1.length
		if (windowEnd >= s1.length - 1) {
			const leftChar = s2[windowStart];
			frequencyChar[leftChar] -= 1;
			if (frequencyChar[leftChar] === 0) delete frequencyChar[leftChar];
			windowStart++;
		}
	}

	// no anagram was found, return false
	return false;
}
