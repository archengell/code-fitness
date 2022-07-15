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

/**
 * @name lvlOrderTraversalByLvls_iter
 * @description
 * LeetCode: 102. Binary Tree Level Order Travesal 
 * @access https://leetcode.com/problems/binary-tree-level-order-traversal/
 * @example
 * @param root 
 * @summary
 * @returns {number[][]} returns an array of arrays based on the different levels 
 */
// o(n) time & space
function lvlOrderTraversalByLvls_iter(root: btLevelOrderNode | null): number[][] {

    let level: number = 0;
    let levels: number[][] = []

    if(!root) return levels;

    let queue: btLevelOrderNode[] = []

    queue.push(root)

    while(queue.length){
        levels[level] = [];
        let levelLen: number = queue.length;
        for(let i = 0; i < levelLen; i++){
            let node: btLevelOrderNode = queue.shift()
            if(node.val !== null) levels[level].push(node.val)
            //the descent happens here...
            node.left  && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        ++level
    }
    return levels
}

/**
 * @name lvlOrderTraversalByLvls_recur
 * @description
 * LeetCode: 102. Binary Tree Level Order Travesal 
 * @access https://leetcode.com/problems/binary-tree-level-order-traversal/
 * @example
 * @param root 
 * @summary
 * @returns {number[][]} returns an array of arrays based on the different levels 
 */
// o(n) time & space
 function lvlOrderTraversalByLvls_recur(node: btLevelOrderNode | null): number[][] {

    let _lvlOrderTraverse = (node: btLevelOrderNode, level: number) => {

        if(levels.length === level) levels[level] = [];

        if(node.val !== null) levels[level].push(node.val)   
        
        node.left && _lvlOrderTraverse(node.left, level + 1);
        node.right && _lvlOrderTraverse(node.right, level + 1);
    }   

    let levels: number[][] = [];

    if(!node) return levels;

    _lvlOrderTraverse(node, 0)
    
    return levels;
}

/**
 * @name lvlOrderTraversal
 * @description
 * LeetCode: 102. Binary Tree Level Order Travesal 
 * @access 
 * @example
 * @param root 
 * @summary
 * @returns {number[]}: returns an array of integers in level order
 */
// o(n) time & space
function lvlOrderTraversal(node: btLevelOrderNode | null): number[] {

    let res: number[] = [];
    let queue: btLevelOrderNode[] = [];

    queue.push(node);

    while(queue.length){

        let node: btLevelOrderNode = queue.shift();

        if(node.val !== null || node.val === 0) res.push(node.val);

        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return res
}


let levelOrder: Typings.strNumArrObj = {
    'test1': [3,9,20,null,null,15,7], //[ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
    'test2': [0,2,4,1,null,3,-1,5,1,null,6,null,8], //[[0],[2,4],[1,3,-1],[5,1,6,8]]
    // need to figure out why it puts 0 at null placements!!
}



console.log(lvlOrderTraversalByLvls_iter(createBinaryTreeFromNumArr(levelOrder['test2'] as number[])))