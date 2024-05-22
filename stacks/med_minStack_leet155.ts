/**
 * @ref https://leetcode.com/problems/min-reg/description/
 * @description
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * MinStack() initializes the stack object.
 * void push(int val) pushes the element val onto the stack.
 * void pop() removes the element on the top of the stack.
 * int top() gets the top element of the stack
 * int getMin() retrieves the minimum element in the stack.
 * You must implement a solution with O(1) time complexity for each function.
 *
 * @summmary
 * - create two stacks: reg, min
 */

// time: O1 space: On
class MinStack {
	public reg: number[];
	public min: number[];
	constructor() {
		this.reg = [];
		this.min = [];
	}

	push(val: number): void {
		this.reg.push(val);
		if (!this.min.length) {
			this.min.push(val);
		} else {
			if (this.min[this.min.length - 1] >= val) this.min.push(val);
		}
	}

	pop(): void {
		let popped = this.reg.pop();
		if (this.min.length && this.min[this.min.length - 1] === popped) {
			this.min.pop();
		}
		console.log(popped);
	}

	top(): number {
		console.log(this.reg[this.reg.length - 1]);
		return this.reg[this.reg.length - 1];
	}

	getMin(): number {
		console.log(this.min[this.min.length - 1]);
		return this.min[this.min.length - 1];
	}
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();
minStack.pop();
minStack.top();
minStack.getMin();
