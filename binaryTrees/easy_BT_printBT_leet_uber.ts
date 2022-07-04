
class TreeNode {
    public val: number | null
    public left: TreeNode | null
    public right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ?? null;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}

function createBT(values: number[], i: number = 0){
    if(i < values.length){
        let node: TreeNode = new TreeNode(values[i])
        node.left = createBT(values, 2 * i + 1); // 1 3 5 7 ...
        node.right = createBT(values, 2 * i + 2); // 2 4 6 8 ...
        return node
    }
}

function printTree(node: TreeNode | null): string[][] {

    const height = getNodeHeight(node);
    const width = 2 ** height - 1;
    
    const res: string[][] = new Array(height)
        .fill(null)
        .map(() => new Array(width).fill(''))

    const traverse = (node: TreeNode, level: number, 
        left: number, right: number): void => {
            if(!node) return;
            const mid: number = Math.floor((left + right)/2);
            res[level][mid] = node.val.toString();
            traverse(node.left, level + 1, left, mid);
            traverse(node.right, level + 1, mid, right);
        };
    
    traverse(node, 0, 0, width);
    console.log(res)
    return res
};


function getNodeHeight(node: TreeNode){
    //termination
    if (!node) return 0;

    const left = getNodeHeight(node.left);
    const right = getNodeHeight(node.right);
  
    return 1 + Math.max(left, right);
}

function getNodeDepths(node: TreeNode, depth: number = 0, 
    stack: number[] = [], obj: any = {}, arr: any = []): any {
    let left: number, right: number = depth;
    let resultDepth: number; 
    
    node.left && getNodeDepths(node.left, depth+1, stack, obj, arr)

    node.right && getNodeDepths(node.right, depth+1, stack, obj, arr)

    resultDepth = left > right ? left : right;

    stack.push(resultDepth);
    
    obj = Object.assign({},{
        'node': node.val,
        'depth': resultDepth
    })
    arr.push(obj)
    return {
        'nodes': arr,
        'treeHt': Math.max(...stack)
    }
}


let printBinaryTreeTests: {[key: string]: any} = {
    'test1': [1, 2],
    'test2': [1,2,3,null,4]
}

let tree: TreeNode = createBT(printBinaryTreeTests['test1'])
// console.log(tree)
printTree(tree)