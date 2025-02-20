import * as utils from '../utils';

/**
 * @ref https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
 * @description
 * The school cafeteria offers circular and square sandwiches at lunch break,
 * referred to by numbers 0 and 1 respectively.
 * The number of sandwiches in the cafeteria is equal to the number of students.
 *
 * The sandwiches are placed in a stack. At each step:
 * - If the student at the front of the queue prefers the sandwich on the top
 *  of the stack, they will take it and leave the queue.
 * - Otherwise, they will leave it and go to the queue's end.
 *
 * This continues until none of the queue students want to take the top sandwich and are thus unable to eat.
 * You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich
 * in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the
 * initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.
 * @summary
 * @param students
 * @param sandwiches
 */
// o-n-time 53ms >79% | o-1-space >90%
function countStudents(students: number[], sandwiches: number[]): number {
	// keep track of iterating through students else infinite loop
	// when there is no student=sandwich match
	let currIdx = 0;
	// o-n-time
	while (currIdx < students.length) {
		if (students[0] === sandwiches[0]) {
			students.shift();
			sandwiches.shift();
			// reset
			currIdx = 0;
		} else {
			students.push(students.shift());
			currIdx++;
		}
	}

	return students.length;
}

let countStudentsTest = {
	test1: {
		students: [1, 1, 0, 0],
		sandwiches: [0, 1, 0, 1],
	},
	test2: {
		students: [1, 1, 1, 0, 0, 1],
		sandwiches: [1, 0, 0, 0, 1, 1],
	},
};

const { students, sandwiches } = countStudentsTest['test2'];

utils.timed('res', countStudents, [students, sandwiches]);
