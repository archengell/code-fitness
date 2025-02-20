// level order
function branchLevels(root: TreeNode) {
	if (!root) return;
	let queue: TreeNode[] = [root];
	let node;
	let nodeValsPerLvl: number[][];
	let rightSideView: number[];
	let lvl;

	while (queue.length) {
		let nodes = queue;
		for (let i = 0; i < nodes.length; i++) {
			node = queue.shift();
			// level order added
			nodeValsPerLvl[lvl].push(node[i].val);
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
		rightSideView.push(node.val);
		lvl++;
	}
}
