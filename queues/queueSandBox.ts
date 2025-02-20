import * as typing from '../typing';

/**
 * @description
 * @param
 * @raises
 */
export class Queue<T> {
	constructor(public input?: T[]) {
		this.input = input || new Array<T>();
	}

	public add(elem: T) {
		this.input.push(elem);
		// console.log(`added ${elem} ==> ${this.input}`)
	}

	public remove() {
		// console.log(`removing ${this.input[0]}`)
		return this.input.shift();
		// console.log(`arr is now ${this.input}`)
	}

	public length() {
		return this.input.length;
	}
}

// let res = new Queue<number>([1, 2, 3, 4]);
// res.add(6)
// res.add(7)
// res.remove()
// res.add(8)
