import { convertArrToBinaryTree, CreateBTNode  } from './easy_BT_createBinaryTree'

/**
 * easy | binary-tree | Same Tree
 * @description 
 * Given the roots of two binary trees, write a function to check if 
 * they are the same or not.  Two binary trees are considered the same
 * if they are structurally identical, and the nodes have the same 
 * value. 
 * @summary
 * @param root1 
 * @param root2 
 * @returns 
 */
function sameBT(root1: CreateBTNode, root2: CreateBTNode): boolean {
    
    if(!root1 && !root2) return true
    if((!root1 && root2) || (root1 && !root2)) return false
    if(root1.value !== root2.value) return false
    return sameBT(root1.left, root2.left) && 
    sameBT(root1.right, root2.right)
}


let sameTreeCase1: {[key:string]: number[]} ={
    'root1': [1, 2, 3],
    'root2': [1, 2, 3]
}

let sameTreeCase2: {[key:string]: number[]} ={
    'root1': [1, 2],
    'root2': [1, null, 2]
}

let sameTreeCase3: {[key:string]: number[]} ={
    'root1': [1, 2, 1],
    'root2': [1, 1, 2]
}

let sameTreeCase4: {[key:string]: number[]} ={
    'root1': [1, 2, 1],
    'root2': []
}

console.log(sameBT(
    convertArrToBinaryTree(sameTreeCase4['root1']),
    convertArrToBinaryTree(sameTreeCase4['root2'])
))

