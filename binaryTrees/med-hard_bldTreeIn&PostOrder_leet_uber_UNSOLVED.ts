/**
 * Given two integer arrays inorder and postorder where inorder is the 
 * inorder traversal of a binary tree and postorder is the postorder 
 * traversal of the same tree, construct and return the binary tree.
 * 
 * preorder: root > left > right
 * inorder: left > root > right
 * postorder: left > right > root
 * 
 */



class Node1 { 
    public val: number | null;
    public left: Node1 | null;
    public right: Node1 | null;

    constructor(val?: number | null, left?: Node1 | null, 
        right?: Node1 | null){
            this.val = val ?? 0;
            this.left = left ?? null;
            this.right = right ?? null;
    }
}

function buildTree1(inorder: number[], postorder: number[]): Node1 | null {
    let inorderMap: Map<number,number> = new Map();
    let postorderIdx: number = 0;


    for(let i = 0; i < postorder.length; i++){
        inorderMap.set(postorder[i], i);
    };

    let rootValue: number = postorder[postorderIdx];
    let root: Node1 = new Node1(rootValue)

    postorderIdx++
    return root
};