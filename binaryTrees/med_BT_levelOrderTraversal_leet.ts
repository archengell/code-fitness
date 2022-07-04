import * as Typings from '../typing'


class btLevelOrderNode { 
    public val: number | null;
    public left: btLevelOrderNode | null;
    public right: btLevelOrderNode | null;

    constructor(val?: number | null, left?: btLevelOrderNode | null, 
        right?: btLevelOrderNode | null){
            this.val = val ?? 0;
            this.left = left ?? null;
            this.right = right ?? null;
    }
}

/**
 * @description creates BT from number[]
 * @param node starts as root, then subsequent tree nodes
 * @returns tree
 * @summary ???
 */
 function createBinaryTreeFromNumArr(values: number[], i: number = 0){
    if(i < values.length){
        let node: btLevelOrderNode = new btLevelOrderNode(values[i])
        node.left = createBinaryTreeFromNumArr(values, 2 * i + 1); // 1 3 5 7 ...
        node.right = createBinaryTreeFromNumArr(values, 2 * i + 2); // 2 4 6 8 ...
        return node
    }
}


function levelOrderTraversal(root: btLevelOrderNode | null): number[][] {
        let levels: number[] = []
        if(!root) return levels;
        let level: number = 0;
        let queue: [btLevelOrderNode, number] = [root, 0]
        while(queue.length){
            let temp = queue.shift();
            let node: btLevelOrderNode = temp[0]
            let level: number = temp[1]
            if (levels.length === level) {levels.push(level)}
            arr.push(node.val)
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            res.push(arr)
        }
        return res
}

let levelOrder: Typings.strNumArrObj = {
    'test1': [3,9,20,null,null,15,7],
    'test2': []
}

console.log(levelOrderTraversal(createBinaryTreeFromNumArr(levelOrder['test1'] as number[])))