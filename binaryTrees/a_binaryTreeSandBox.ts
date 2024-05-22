export interface IBT {
	value: number | null;
	left: IBT | null;
	right: IBT | null;
	//protected|private fields cannot appear in types/interfaces
}

export class BT {
	public left: BT | null;
	public right: BT | null;

	constructor(public value: number | null, left?: BT | null, right?: BT | null) {
		this.value = value === undefined ? null : value;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}

	/** this is used w/ a queue and per algoexpert */
	// recursiveInsert(values: number[], i: number = 0): BinaryTreez {
	//     if(i >= values.length) return;
	//     const queue: BinaryTreez[] = [this];
	//     console.log('*********************************************************************');
	//     console.log('queue', queue);
	//     console.log('*********************************************************************');
	//     console.log('*********************************************************************');
	//     while(queue.length > 0){
	//         let current: BinaryTreez = queue.shift();
	//         console.log('current', current)
	//         // console.log('current', current)
	//         if(current.left === null) {
	//             current.left = new BinaryTreez(values[i])
	//             break;
	//         }
	//         queue.push(current.left);
	//         if(current.right === null) {
	//             current.right = new BinaryTreez(values[i]);
	//             break;
	//         }
	//         queue.push(current.right);
	//     }
	//     this.recursiveInsert(values, i+1);
	//     return this;
	// }

	// private insertNodeBT(currentNode: IBinaryTree = this, newNode: IBinaryTree){
	// //     // console.log(`currentNode: ${JSON.stringify(currentNode)}`)

	// // }

	/**
	 * @description creates BT from number[]
	 * @param node starts as root, then subsequent tree nodes
	 * @returns tree
	 * @summary ???
	 */
	public createBinaryTreeFromNumArr(values: number[], i: number = 0) {
		if (i < values.length) {
			let node: IBT = new BT(values[i]);
			node.left = this.createBinaryTreeFromNumArr(values, 2 * i + 1); // 1 3 5 7 ...
			node.right = this.createBinaryTreeFromNumArr(values, 2 * i + 2); // 2 4 6 8 ...
			return node;
		}
	}

	// public createTreeFromBinary(nodes: IBinaryTree[], idx: number = 0) {
	//     if(idx < nodes.length){
	//         let node: IBinaryTree = new BinaryTreez(nodes[idx]['value'])
	//         node.left = this.createTreeFromBinary(nodes, 2 * idx + 1)
	//     }
	// }

	/**
	 * @description gets node heights of BT/BST
	 * @param node starts as root, then subsequent tree nodes
	 */
	public getNodeHeight(node: IBT) {
		if (node === null) {
			return -1;
		} else if (node.left === null && node.right === null) {
			return 0;
		} else {
			return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
		}
	}

	/**
	 * @description AlgoExpert | Medium | Invert BT
	 * @description inverts the node.left + node.right values
	 * @param {IBinaryTree} node starts as root, then subsequent tree nodes
	 * @returns tree
	 * @summary ***why does it break here but work in AlgoExpert!!***
	 *  1       ---->1
	 *  /\      -----/\
	 *  2,3     -----3,2
	 *  /\/\    -----/\/\
	 * 4,5 6,7  ----7,6 5,4
	 * /\       ----------/\
	 * 8,9      ----------9,8
	 */
	public invertBT(node: IBT = this) {
		//termination
		//return if node == null
		if (!node) return;

		//base
		let tempL: IBT | null = node.left;
		node.left = node.right;
		node.right = tempL;

		//recursion
		this.invertBT(node.left);
		this.invertBT(node.right);

		return node;
	}

	/**
	 * @description AlgoExpert | Medium | BT Diameter
	 * @description ???
	 * @param {IBT} node starts as root, then subsequent tree nodes
	 * @returns {number} diameter
	 * @summary ???
	 */
	public btDiameter(node: IBT = this): number {
		let diameter: number = 0;
		let getHeight = (node: IBT) => {
			if (!node) return 0;
			let left: number = getHeight(node.left);
			let right: number = getHeight(node.right);
			diameter = Math.max(diameter, left + right);
			console.log(
				`node.value: ${node.value}, leftHt: ${left}, rightHt: ${right}, diameter: ${diameter}`
			);
			return Math.max(left, right) + 1;
		};
		getHeight(node);
		// console.log('diameter:', diameter)
		return diameter;
	}

	/**
	 * @description print tree structure
	 * @param node starts as root, then subsequent tree nodes
	 * @returns tree
	 * @summary why is this not working??! figure this out tonight...
	 */
	public printTree(node: IBT = this, spaceCount = 0, label = '* ') {
		if (node === null) return console.log(`${' -'.repeat(spaceCount)}${label} [0] null`);

		console.log(`${' -'.repeat(spaceCount)}${label}  ${node.value}`);

		this.printTree(node.right, spaceCount + 2, 'R: ');
		this.printTree(node.left, spaceCount + 2, 'L: ');
	}
}

let test1: { [key: string]: number | number[] } = {
	nodes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	root: 1,
};

let btDiameterTest1: { [key: string]: number | number[] } = {
	nodes: [
		1,
		3,
		2,
		7,
		4,
		null,
		null,
		8,
		null,
		null,
		5,
		null,
		null,
		null,
		null,
		9,
		null,
		null,
		null,
		null,
		null,
		null,
		6,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
	],
	root: 1,
};

// let treeTest: BinaryTreez = new BinaryTreez(test1['root'] as number).createBinaryTreeFromNumArr(test1['nodes'] as number[]);
// treeTest.printTree();
// console.log(JSON.stringify(treeTest, null, 4))
// let invertedTree: IBinaryTree = treeTest.invertBT()
// console.log(`***********************************************************`)
// console.log('inverted::', JSON.stringify(invertedTree, null, 4))
// treeTest.btDiameter()
