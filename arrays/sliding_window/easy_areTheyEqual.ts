{
	/**
	 * @ref meta prep exercise
	 * @description
	 * In o-1-space, see if array1 === array2
	 * @summary
	 * - use 2-ptr method
	 * - set res === true
	 * - 1st while-loop while ptrs < arrA & B len
	 * - 2nd loop while b val !== a val && b-val < arrA len =>
	 * @param arrA
	 * @param arrB
	 * @returns
	 */
	// this approach specifically follows the intended instruction of reversing
	// o-n2-time ( see if i can do better while following this approach)
	function areTheyEqual(arrA, arrB) {
		// Write your code here
		let aIdx = 0;
		let bIdx = 0;

		let res = true;
		// o-n-time ( n = length of arrA + arrB)
		while (aIdx < arrA.length || bIdx < arrB.length) {
			// o-n-time (n = length of arrA)
			while (arrB[bIdx] !== arrA[aIdx] && bIdx < arrA.length) {
				bIdx++;
			}
			if (arrB[bIdx] !== arrA[aIdx]) res = false;

			// o-1-time
			let temp = arrB[aIdx];
			arrB[aIdx] = arrB[bIdx];
			arrB[bIdx] = temp;

			bIdx = aIdx;

			aIdx++;
			bIdx++;
		}
		console.log(res);
		return res;
	}

	// not the instruction but solves the problem
	function areTheyEqual2(A: number[], B: number[]): boolean {
		const sumA = A.reduce((acc, val) => acc + val, 0);
		const sumB = B.reduce((acc, val) => acc + val, 0);

		if (sumA !== sumB) {
			return false;
		}

		A.sort((a, b) => a - b);
		B.sort((a, b) => a - b);

		return A.every((num, index) => num === B[index]);
	}

	let tc = {
		e1: {
			arrA: [1, 2, 3, 4],
			arrB: [1, 4, 3, 2],
		},
		e2: {
			arrA: [1, 2, 3, 4],
			arrB: [1, 4, 3, 3],
		},
		e3: {
			arrA: [5, 6, 7],
			arrB: [7, 6, 5],
		},
		e4: {
			arrA: [4, 5, 6, 7, 8, 9, 10],
			arrB: [6, 4, 7, 8, 5, 9, 10],
		},
	};

	const { arrA, arrB } = tc['e4'];
	areTheyEqual(arrA, arrB);
}
