/**
 * Given two integer arrays preorder and inorder where preorder is the 
 * preorder traversal of a binary tree and inorder is the inorder 
 * traversal of the same tree, construct and return the binary tree.
 * 
 * 
 * example: 
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * Output: [3,9,20,null,null,15,7] (TREE FORM)
 * 
 */

class Newde { 
    public val: number | null;
    public left: Newde | null;
    public right: Newde | null;

    constructor(val?: number | null, left?: Newde | null, 
        right?: Newde | null){
            this.val = val ?? 0;
            this.left = left ?? null;
            this.right = right ?? null;
    }
}

function buildTree(preorder: number[], inorder: number[]): Newde | null {
    let preorderIdx: number = 0
    let inorderMap: Map<number, number> = new Map();
    
    for(let i = 0; i < inorder.length; i++){
        inorderMap.set(inorder[i], i)
    }

    let arrayToTree = (left: number, right: number) => {
        console.log(`left_1:${left} | right_1: ${right}`)
        if(left > right) return null;

        let rootValue: number = preorder[preorderIdx];
        let root: Newde = new Newde(rootValue)
    
        preorderIdx += 1
        console.log(`preorderIdx: ${preorderIdx-1} | root: ${rootValue}`)
        console.log(`left_2:${left} | right_2: ${right}`)
        root.left = arrayToTree(left, inorderMap.get(rootValue) - 1)
        console.log(`left_3:${left} | right_3: ${right}`)
        root.right = arrayToTree(inorderMap.get(rootValue) + 1, right)
        console.log(`left_4:${left} | right_4: ${right}`)

        return root
    }

    return arrayToTree(0, preorder.length-1) 
};


let preOrderArr: number[] = [3, 9, 20, 15, 7];
let inOrderArr: number[] = [9, 3, 15, 20, 7];
//output: [3,9,20,null,null,15,7]

console.log(buildTree(preOrderArr, inOrderArr));